# Builder Track Weekly Report - Week 17

**Name:** Alienate Bratipah

**Week Ending:** 31-08-2026

### Courses Completed and usage of CK

- Completed modules of CKB Learning Academy 
- Courses consist of:-
  - CKB Project Progress



  ### Key Learnings
- Currently still building [programmable wallet system](https://github.com/Bratipah/Agent-CKB-Wallet-Library) for AI agents on the Nervos CKB blockchain. In this project an agent can manage Cells, sign transactions, open Fiber payment channels, mint DOBs (digital objects/NFTs), and compose OTX intents — all gated behind configurable safety rails. the idea is that a developer or a business can use AI agents that can manage assets programmatically without risking catastrophic financial loss or greater margins in transactions or signing transactions.On a large scale it will be a high key of how users who wouldn't want to go through the tenchincal of learning all about CKB but be able to do activities like tracking their transactions. do payments through channels or micropayments using stablecoins, mint DOBs in a very seamless way even when the numbers of transaction at a go wouldn't be a problem.

- The progress from last week building the agent orcherstartor for different usecases putting the agents at the forefront of the project rather than one agent before we will now support mutli agents with parallel transcactions
- Ensure we use offckb for a start to have an an isolated environment where agents can be able to showcase their lifecycle to mimic a production environment. Teh agents will have prefunded testnet accounts and built-in scripts by ckb-std for Task cell and Agent state cells for mutli agent transactions
- Managed to have a usage of ckb-dev skills to be to use is it as a query platform for the agents
- Updated that the agents don't be able need to use joyID 
-Use alerts to inform on any channel disputes during fiber settlement or any failed payments accompanies by logs
- Use of typehash rather than type id to prevent spoofing on code cells and also agent state cells




- A challenges in this building were protecting the agent from moving away from it's structual context in different scenarios like:-
    - How agents can be able to access fiber nodes publicly
    - Agents should be able to hold an invoice and be able to settle the payment through an LSP which i'm not aware of one in CKB maybe have this orcherstartor be an LSP aggregator later on 
    - Find a way to ensure my A2A adapters can be plugged in into parojects like fiber402 to minimize building everything from scratch


![Agent Specialization](https://github.com/Bratipah/CKB-Builder/blob/main/public/assets/Screenshot%20from%202026-08-17%2000-52-15.png)


    
    


