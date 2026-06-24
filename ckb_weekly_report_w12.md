# Builder Track Weekly Report - Week 12

**Name:** Alienate Bratipah

**Week Ending:** 16-24-2026 -28-06-2026

### Courses Completedand usage of CK

- Completed modules of CKB Learning Academy 
- Courses consist of:-
  - CKB Project Progress



  ### Key Learnings
- Currently still building [programmable wallet system](https://github.com/Bratipah/Agent-CKB-Wallet-Library) for AI agents on the Nervos CKB blockchain. In this project an agent can manage Cells, sign transactions, open Fiber payment channels, mint DOBs (digital objects/NFTs), and compose OTX intents — all gated behind configurable safety rails. the idea is that a developer or a business can use AI agents that can manage assets programmatically without risking catastrophic financial loss or greater margins in transactions or signing transactions.On a large scale it will be a high key of how users who wouldn't want to go through the tenchincal of learning all about CKB but be able to do activities like tracking their transactions. do payments through channels or micropayments using stablecoins, mint DOBs in a very seamless way even when the numbers of transaction at a go wouldn't be a problem.

- The progress from last week building from the frontend building as seeing a major improvement in the function outlined above has been still concetrated in the same features. 
    - Ai agent can be able to now perform wallet creation either using a private key or a CCC connecter with other wallets in the device and the ones supported by CKB(joyId,metamask). The wallet registered to the agent now gives power to the agent by human approvals both on the wallet and feature approvals. 
    - The agent can now be able to manage a wallet by perform a transaction that has happened in each of the 5-10secs nd then update the cell status by their unspent cells, all through while keeping the agent alive 
    - The agent can be able to do a transfer of CKBs / Shannonse20i to a wallet or multiple wallets at once. A user can be able to determine a list of allowed wallets to transact with to blacklisted walllets not to be able to transact with. A usecase would be perfoming payroll in your company.
    - The agent can also be able to update its wallet's audit log of each transactions be it transferring, minitng,offchain payments this will be able to help the safety guard rail notifications outcomes can be able to be tracked or solved in the audit log.
    - The agent has a human approval kill switch incase of derived pattern and errors log for a wallet stop in its operations. For also aiding in the kill switch misappropiations  the kill switch have an alert notification when the safety rails have broken more than 2 times to be able to startegically stop unapproved bot ooperations for spam.
    - The dashboard has been updated to autonomously the agent's health by  updating the operations of the agent in terms of number of wallets created,killed or are active, number of transaction happened as they happen, the number of DOBs created for an business mindset for tracking this projects growth in supporting the CKB network. 

- A challenges in this building were protecting the agent from moving away from it's structual context in different scenarios like:-
    - agents trying to spend on same cells
    - two wallets trying to use overlapping cell stes
    - Separation of concerns between local storage/state and offchain & onchain state
    - Ensuring the safety checks don't cause latency on the whole operation
    - Being able to support paraphases without storing them in plain text 
    - the possibilty of wallet data to be sharded by scaling horizontally
    - To be able to do rollbacks in case of the agent hallucinations
    


