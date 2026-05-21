# Builder Track Weekly Report - Week 9

**Name:** Alienate Bratipah

**Week Ending:** 05-17-2026

### Courses Completedand usage of CK

- Completed modules of CKB Learning Academy 
- Courses consist of:-
  - Deep Dive on RGB protocol



  ### Key Learnings
- Learned the RGB protocol history in UTXOs and it's vulnerability that led to to the isomorphic binding to CKB cell data type to manage state on transaction histories uisng RGB++  and it's usecase on double spending verification and it's differences from RGB on CKB where all RGB++ transcations are on CKB.
- Understood the deeper analytics of offchain & onchain commitment using RGB++ on a transaction through its commitments from a bitcoin UTXO it being used as a witness on a CKB transaction verification on onchain inclusive of Bitcoin Light clients for both users and state management.

- Explored the analogy of mulitple shared states on CKB with the use of RGB++ with the use of intent cells for standard shadow cells which later help in non-interactive transaction without invoice in CKB from BTC need of recipients invoice for transaction transfers if there any reverts on BTC transactions BTC time lock will be there to replace CKB addresses with it's lock script.

- Did a practical case study of implementing [a UDT using RGB++]() by issuing a RGB++ token using a predeployed XUDT script with a UTXO with 546 saoshis as a single use seal where we createa CKB cell  lock script set to RGB++ lock script after the intial UTXO has been spent to fulfill issuing of RGB++ XUDT token.Following the above points i worked on the transaferring of RGB++ XUDT on BTC and performing the leap to CKB from rgbpplock to BTC_time_lock where after unlocking the btc_time_lock after BTC 6 recommedned confirmations the XUDT becomes a CKB asset.

- Overral RGB++ has opened my mindset into looking into how a DEX would look like in CKB with a sample of using a Grid model order book from common Uniswap price curve market model with better benefits of cost and perfomance using client native verification strategies.
