# Builder Track Weekly Report - Week 11

**Name:** Alienate Bratipah

**Week Ending:** 05-31-2026

### Courses Completedand usage of CK

- Completed modules of CKB Learning Academy 
- Courses consist of:-
  - CKB Project Conception



  ### Key Learnings
- I'm building a [programmable wallet system](https://github.com/Bratipah/Agent-CKB-Wallet-Library) for AI agents on the Nervos CKB blockchain. where agents can manage Cells, sign transactions, open Fiber payment channels, mint DOBs (digital objects/NFTs), and compose OTX intents — all gated behind configurable safety rails. the idea is that a developer or a business can deploy AI agents that can manage assets programmatically without risking catastrophic financial loss.On a large scale it will be a high key of how users who wouldn't want to go through the tenchincal of learning all about CKB but be able to do activities like tracking their transactions. do payments through channels or micropayments using stablecoins, mint DOBs in a very seamless way.

- Started off by first doing a frontend of the idea to see how it can span from a user's perspective which included using a typescript with 3 intergrated a backend an API and a monitoring dashboard. Looking forward to incorporate joy id on the creation of the wallet 

- A challenge which might be an oversight is that the Fiber channel off-chain payment state risks replay attacks. I'm looking to implement per-channel nonce counters with signed commitment updates and storing channel state locally and settling on-chain only when required—enabling agents to make unlimited off-chain payments without per-transaction CKB fees.


- On the ai agent side i'm focusing more on safety rails for example a scenario of a race condition where concurrent agent requests could exceed daily spending limits. I'm looking to solve this by using row locks on wallet usage counters, ensuring limit enforcement is serializable which i have started doing a part of this on the database with 'Select for update`. At first also the audit log had some some latency issues which i solved using batching and caching .
