import type { Cell, Script, CellDep } from "@ckb-lumos/lumos"
import { config, hd, Indexer, RPC } from "@ckb-lumos/lumos"
import { bytes, BytesLike, Uint128 } from "@ckb-lumos/lumos/codec"
import { common } from "@ckb-lumos/lumos/common-scripts"
import { ScriptConfig } from "@ckb-lumos/lumos/config"
import { addCellDep, cellHelper, encodeToAddress, sealTransaction, TransactionSkeleton } from "@ckb-lumos/lumos/helpers"
import { computeScriptHash } from "@ckb-lumos/lumos/utils"

// to work with the testnet
config.initializeConfig(config.TESTNET)
// indexer for cell provider
const indexer = new Indexer("https://testnet.ckb.dev")
// rpc to interact with the CKB node
const rpc = new RPC("https://testnet.ckb.dev")

// paste the generated key for the owner
const ownerPrivateKey = "649ed3d857d439a4f344a6307fdf0cf89a4f535a25e54de57745098b294fa556"

// script config that will be used later
const { XUDT, SECP256K1_BLAKE160 } = config.TESTNET.SCRIPTS

const ownerLockScript = createScript(SECP256K1_BLAKE160, hd.key.privateKeyToBlake160(ownerPrivateKey))
const ownerAddress = encodeToAddress(ownerLockScript)

// a helper to create a Script from a ScriptConfig
function createScript(config: ScriptConfig, args: BytesLike): Script {
  return { codeHash: config.CODE_HASH, hashType: config.HASH_TYPE, args: bytes.hexify(args) }
}

// a helper to crete a CellDep from a ScriptConfig
function createCellDep(config: ScriptConfig): CellDep {
  return { depType: config.DEP_TYPE, outPoint: { txHash: config.TX_HASH, index: config.INDEX } }
}

// Minting xUDT with lock script as owner in input or witness output type
async function mint() {
    console.log("Please Claim some testnet CKB first from https://faucet.nervos.org")
    console.log("Your owner address:", ownerAddress)
  
    // 1. Create the xUDT Type Script
    // This script defines the structure of the xUDT token.
    const xudtTypeScript = createScript(XUDT, computeScriptHash(ownerLockScript))
  
    // 2. Define Cell Provider (Optional)
    // This helps filter out unnecessary cells during transaction building.
    const cellProvider: TransactionSkeletonType["cellProvider"] = {
      collector: (query) => indexer.collector({ type: "empty", data: "0x", ...query }),
    }
  
    // 3. Create Transaction Skeleton
    // This is the base structure for our transaction.
    let txSkeleton = TransactionSkeleton({ cellProvider })
  
    // 4. Create Minted Cell with Amount
    // This defines the cell that will hold the minted xUDT tokens.
    const mintCell = cellHelper.create({
      lock: ownerLockScript, // The owner (you) controls this cell.
      type: xudtTypeScript, // This cell holds xUDT tokens.
      data: Uint128.pack(10000), // Set the initial amount of xUDT to mint (10000).
    })
  
    // 5. Add xUDT Script Dependency
    txSkeleton = addCellDep(txSkeleton, createCellDep(XUDT))
  
    // 6. Inject Capacity for Minted Cell
    txSkeleton = await common.injectCapacity(txSkeleton, [ownerAddress], mintCell.cellOutput.capacity)
  
    // 7. Add Minted Cell to Outputs
    // Specify the minted cell as part of the transaction outputs.
    txSkeleton = txSkeleton.update("outputs", (outputs) => outputs.push(mintCell))
  
    // 8. Pay Transaction Fee
    // Allocate CKB for transaction fees.
    // see also https://github.com/nervosnetwork/ckb/blob/31e02872b3a55ca7558073cb781971d8bc8f29b2/util/app-config/src/legacy/tx_pool.rs#L8-L9
    txSkeleton = await common.payFeeByFeeRate(txSkeleton, [ownerAddress], 1000)
  
    // 9. Prepare Signing Entries and Sign
    // Prepare transaction data for signing and sign it with your private key.
    txSkeleton = common.prepareSigningEntries(txSkeleton)
    const signatures = txSkeleton
      .get("signingEntries")
      .map(({ message }) => hd.key.signRecoverable(message, ownerPrivateKey))
      .toArray()
  
    // 10. Broadcast Transaction
    // Send the signed transaction to the CKB node.
    const signedTransaction = sealTransaction(txSkeleton, signatures)
    const txHash = await rpc.sendTransaction(signedTransaction)
    console.log(`https://pudge.explorer.nervos.org/transaction/${txHash}`)
  }

  


//transfer minted xUDT to user(alice)
async function transfer() {
    const xudtTypeScript = createScript(XUDT, computeScriptHash(ownerLockScript))
  
    const cellProvider: TransactionSkeletonType["cellProvider"] = {
      collector: (query) => indexer.collector({ type: "empty", data: "0x", ...query }),
    }
  
    const alicePrivateKey = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    const aliceLock = createScript(SECP256K1_BLAKE160, hd.key.privateKeyToBlake160(alicePrivateKey))
  
    // 1. Collect Minted xUDT Cell
    // Find the xUDT cell owned by you (based on owner lock script).
    const xudtCollector = indexer.collector({ type: xudtTypeScript, lock: ownerLockScript })
  
    let transferCell: Cell | undefined
  
    for await (const cell of xudtCollector.collect()) {
      transferCell = cell
      // Collect only one (assuming you have only one minted xUDT cell).
      break
    }
  
    if (!transferCell) {
      throw new Error("Owner do not have an xUDT cell yet, please call mint first")
    }
  
    const transferAmount = Uint128.unpack(transferCell.data)
    console.log("Transfer to Alice", transferAmount.toNumber(), "xUDT")
  
    // 2. Create Transaction Skeleton
    let txSkeleton = TransactionSkeleton({ cellProvider })
  
    // 3. Add xUDT Script Dependency
    txSkeleton = addCellDep(txSkeleton, createCellDep(XUDT))
  
    // 4. Set Up Input Cell (Transfer Cell)
    // Include the minted xUDT cell as both input and output (for transfer).
    txSkeleton = await common.setupInputCell(txSkeleton, transferCell)
  
    // 5. Update Output Cell Lock to Alice's Lock
    // Change the ownership of the minted xUDT cell to Alice's lock.
    txSkeleton = txSkeleton.update("outputs", (outputs) =>
      outputs.update(0, (cell) => ({ ...cell!, cellOutput: { ...cell!.cellOutput, lock: aliceLock } }))
    )
  
    // the following process is the same with mint to broadcast the transaction
    txSkeleton = await common.payFeeByFeeRate(txSkeleton, [ownerAddress], 1000)
    txSkeleton = common.prepareSigningEntries(txSkeleton)
  
    const signatures = txSkeleton
      .get("signingEntries")
      .map(({ message }) => hd.key.signRecoverable(message, ownerPrivateKey))
      .toArray()
  
    const signed = sealTransaction(txSkeleton, signatures)
    const txHash = await rpc.sendTransaction(signed)
    console.log(txHash)
  }

//Mint with extension script for parallel transcation without inputs
async function mintViaExtensionScript() {
    // An always-success extension script.
    // You can compile it yourself from https://github.com/nervosnetwork/ckb-production-scripts/blob/410b16c499a8888781d9ab03160eeef93182d8e6/tests/xudt_rce/extension_script_0.c
    // we use the script to demonstrate how to use Lumos to mint xUDT with the extension script
    const ALWAYS_SUCCESS_EXTENSION: ScriptConfig = {
      CODE_HASH: "0xea8ee0b1e932802224f6462f57b34110907357ac35d0952383d550820e1205d1",
      HASH_TYPE: "type",
      TX_HASH: "0x5681d80387af77a096aa1386dbe3ba7b44a3302e62cc0f832ea51869bc5a614c",
      INDEX: "0x0",
      DEP_TYPE: "code",
    }
  
    // Reuse the owner defined above
    const receiverLock = ownerLockScript
    const receiverAddress = encodeToAddress(receiverLock)
  
    // 🌟 1. Define the schema for extension script
    // https://github.com/nervosnetwork/ckb-production-scripts/blob/410b16c499a8888781d9ab03160eeef93182d8e6/c/xudt_rce.mol#L3-L11
    const ScriptVec = vector(blockchain.Script)
    const ScriptVecOpt = option(ScriptVec)
    const XudtWitnessInput = table(
      {
        ownerScript: blockchain.ScriptOpt,
        ownerSignature: blockchain.BytesOpt,
        rawExtensionData: ScriptVecOpt,
        extensionData: blockchain.BytesVec,
      },
      ["ownerScript", "ownerSignature", "rawExtensionData", "extensionData"]
    )
  
    // 🌟2. Create the Owner Lock Script
    // The owner script will be set into witness instead of inputs
    const extensionOwnerScript = createScript(ALWAYS_SUCCESS_EXTENSION, "0x")
  
    // 🌟3. Create the xUDT Type Script
    const xudtTypeScript = createScript(XUDT, computeScriptHash(extensionOwnerScript))
  
    // 4. Create Minted Cell with Amount
    const mintCell: Cell = cellHelper.create({
      lock: receiverLock,
      type: xudtTypeScript,
      data: Uint128.pack(10000),
    })
  
    // 5. Create Transaction Skeleton
    const cellProvider: TransactionSkeletonType["cellProvider"] = {
      collector: (query) => indexer.collector({ type: "empty", data: "0x", ...query }),
    }
    let txSkeleton = TransactionSkeleton({ cellProvider })
  
    // 6. Add xUDT Script and Owner Extension Script Dependency
    txSkeleton = addCellDep(txSkeleton, createCellDep(XUDT))
    txSkeleton = addCellDep(txSkeleton, createCellDep(ALWAYS_SUCCESS_EXTENSION))
  
    // 7. Inject Capacity for Minted Cell
    txSkeleton = await common.injectCapacity(txSkeleton, [receiverAddress], mintCell.cellOutput.capacity)
  
    // 8. Add Minted Cell to Outputs
    txSkeleton = txSkeleton.update("outputs", (outputs) => outputs.push(mintCell))
  
    // 🌟9. Set the Extension Owner Script into witnesses
    txSkeleton = txSkeleton.update("witnesses", (witnesses) => {
      const witnessOutputType = XudtWitnessInput.pack({ ownerScript: extensionOwnerScript, extensionData: [] })
      const mintCellIndex = txSkeleton.get("outputs").size - 1
      return witnesses.set(mintCellIndex, hexify(WitnessArgs.pack({ outputType: witnessOutputType })))
    })
  
    // the following process is the same with mint to broadcast the transaction
    txSkeleton = await common.payFeeByFeeRate(txSkeleton, [ownerAddress], 1000)
    txSkeleton = common.prepareSigningEntries(txSkeleton)
  
    const signatures = txSkeleton
      .get("signingEntries")
      .map(({ message }) => hd.key.signRecoverable(message, ownerPrivateKey))
      .toArray()
  
    const signed = sealTransaction(txSkeleton, signatures)
    const txHash = await rpc.sendTransaction(signed)
    console.log(txHash)
  }