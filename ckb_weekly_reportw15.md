# Builder Track Weekly Report - Week 12

**Name:** Alienate Bratipah

**Week Ending:** 16-08-2026

### Courses Completed and usage of CK

- Completed modules of CKB Learning Academy 
- Courses consist of:-
  - CKB Project Progress



  ### Key Learnings
- Currently still building [programmable wallet system](https://github.com/Bratipah/Agent-CKB-Wallet-Library) for AI agents on the Nervos CKB blockchain. In this project an agent can manage Cells, sign transactions, open Fiber payment channels, mint DOBs (digital objects/NFTs), and compose OTX intents — all gated behind configurable safety rails. the idea is that a developer or a business can use AI agents that can manage assets programmatically without risking catastrophic financial loss or greater margins in transactions or signing transactions.On a large scale it will be a high key of how users who wouldn't want to go through the tenchincal of learning all about CKB but be able to do activities like tracking their transactions. do payments through channels or micropayments using stablecoins, mint DOBs in a very seamless way even when the numbers of transaction at a go wouldn't be a problem.

- The progress from last week building the Fiber side of the wallet transcations
    - Ai agent can be able to be governed using human approval where necessary 
    - 

- A challenges in this building were protecting the agent from moving away from it's structual context in different scenarios like:-
    - agents trying to spend on same cells
    - two wallets trying to use overlapping cell stes
    - Separation of concerns between local storage/state and offchain & onchain state
    - Ensuring the safety checks don't cause latency on the whole operation
    - Being able to support paraphases without storing them in plain text 
    - the possibilty of wallet data to be sharded by scaling horizontally
    - To be able to do rollbacks in case of the agent hallucinations

    


