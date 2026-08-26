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
    - Ai agent can be able to be governed using human approval where necessary like signing transcations creating wallets using external wallets like joy ID or OKX Or create testnet wallets by using private key obraining a public key and be able to sign transcations depending on the safety rails. The wallet can choose the wallet network depensing on the uecase of the wallet & the generation of the wallets done by the human approval. 

    - Did a through tests case of safety rails if they are updating the rails onchain or offchain. They are doing this onchain for example putting a spending limit it isn't done onchain meaning it doesnt't affect the onchain cell state rather it ensures that the transaction isn't pending from a user perscpective. The application stores the address and only the public key information and not the private key. 
    - Some fo safety rules tested include a max amount per transcation and maximum amount spent per day and what happens when differen transcations re done under multiple agents paralleism each not conflicting their own safety rails or line of thought.Before the agent could bypass spending controls by raw signing and also do cross network addresses without proof there's interoperability infra available which we have been able to harness
    - Have prechosen whitelist address working and vice versa which is very 
    - The kill switch can only be called or accessed through human approval & not agent request.
    - Expnaded the audit log to ensure key stages the user should be aware of rather than just anoutcome to be able to see where the agent hallucinates. There are also developer logs who might need to get  a deeper look into both the agents traces & onchain trackings
    - The wallet balances are only updated after the transaction has been confirmed onchain with proof of transcation hash whihc can be manually relooked on which is different from transfer permisson

- A challenges in this building were protecting the agent from moving away from it's structual context in different scenarios like:-
    - It was quite difficult being able to switch the agents it functioning agents to becoming usecase referred agent and ensure each wallet's safety rails or worlflow do not intermarry for a start. for example a payroll agent to be able to parallel transactions and ensuring the parallel transctions will stop the maximum amount & transactions at the right time
    - Having a soft kill switch warning to the audit log if the wallet encouters errors that could threaten transcations not being successfull like insufiicient cells capacity among others . We still need to pressure test and ensure that this doean't leak to give the agents a leverage

![Transaction Confirmation Stages](https://github.com/Bratipah/CKB-Builder/blob/main/public/assets/Screenshot%20from%202026-08-15%2000-56-15.png)
![Agent onchain proof transcation](https://github.com/Bratipah/CKB-Builder/blob/main/public/assets/Screenshot%20from%202026-08-17%2000-05-55.png)


    
    


