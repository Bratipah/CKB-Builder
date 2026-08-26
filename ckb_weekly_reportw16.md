# Builder Track Weekly Report - Week 16

**Name:** Alienate Bratipah

**Week Ending:** 24-08-2026

### Courses Completed and usage of CK

- Completed modules of CKB Learning Academy 
- Courses consist of:-
  - CKB Project Progress



  ### Key Learnings
- Currently still building [programmable wallet system](https://github.com/Bratipah/Agent-CKB-Wallet-Library) for AI agents on the Nervos CKB blockchain. In this project an agent can manage Cells, sign transactions, open Fiber payment channels, mint DOBs (digital objects/NFTs), and compose OTX intents — all gated behind configurable safety rails. the idea is that a developer or a business can use AI agents that can manage assets programmatically without risking catastrophic financial loss or greater margins in transactions or signing transactions.On a large scale it will be a high key of how users who wouldn't want to go through the tenchincal of learning all about CKB but be able to do activities like tracking their transactions. do payments through channels or micropayments using stablecoins, mint DOBs in a very seamless way even when the numbers of transaction at a go wouldn't be a problem.

- The progress from last week building the agent capabilities side. This addition has been made to ensure this project not only becomes an infra on Cell & fiber architecture but also be a value creating project using CKB as its backbone & AI Agent as it orcherstartor. Moving forward the project will have an approach of state as a service architecture 
- Agents will hence observe an orcherstration that ensures the agents can be able to have their own cloud run of operations. Agents can manage other agents while still mantaining the cell model architecture and still inherit the earlier capabilities like safety rails, transfer transactions, kill switch almost like following the A2A protocol.
- An agent can act as an orchestrator by managing other wallets agents and mantaining its task's lifecyle through transition states of working, delegation & submission.
- Fiber acts a settlment layer and a reward motivator to the agents that transition from delegation to submission through states transitions which will allow micro payments to the designated wallets.
- At the end of the day the project is an agent that becomes a coordinated layer of handling identity, computation, storage with skills to determine which workflow works best for case by case real world scenario . For example a payroll scenario of escrow funds done by agent orcherstrator or a  RWA scenario where the agent will be used as a trust tool for counterfeit arts verification againist onchain state to the owner/creator ensuring artists royalties even on secondary sales through artworks chip & spore DOB hash storage on cells.



- A challenges in this building were protecting the agent from moving away from it's structual context in different scenarios like:-
    - Agents hallucination or stuck in loops from the transaction parameters. Later we will work to see to it that agents will work in TEEs to avoid agents reporting cell with erroneus information.
    - Agents can misinterpret a request or a state update with an unsound state logic.For now we are depending on the compiler & validating states on full nodes since most of the transition will be heavily reliant on light clients
    - As agents create update & manage state for other agents they might consume more Cell capacity whihc wil in turn increase the storage cost. 


![Agent Specialization](https://github.com/Bratipah/CKB-Builder/blob/main/public/assets/Screenshot%20from%202026-08-17%2000-52-15.png)


    
    


