# MedProof Usage Guide

## What MedProof Does

MedProof lets a hospital issue a private prescription credential, lets a patient prove ownership without exposing identity or directions, and lets a pharmacy verify one finalized fill.

## Getting Started on Preprod

1. Install the 1AM wallet and switch it to Midnight `preprod`.
2. Open the [live MedProof app](https://med-proof-phi.vercel.app/).
3. Open **Patient Wallet**, connect 1AM, and approve the scoped message signature.
4. Copy the generated request code and send it to an authorized hospital user.

## Your First Transaction

1. Hospital user opens **Doctor Issue** and connects the authorized 1AM wallet.
2. Hospital pastes the patient request code, enters expiry and directions, then approves the transaction.
3. Hospital sends the encrypted prescription package to the patient.
4. Patient imports the package and selects **Fill prescription**.
5. Pharmacy opens **Pharmacy Verify** and checks the finalized transaction ID.
6. A second fill attempt fails because the contract records a one-time nullifier.

## Level 6 Improvements

- Hospital users now see a review card before confirming: patient request readiness, medicine, expiry, encrypted directions, and character count.
- Patients can select **Add new credential** from an existing prescription view to import another issued credential without creating a new wallet identity.
- Mobile navigation has larger touch targets and more spacing on small screens.

## Privacy Notes

Never enter patient names, wallet secrets, or other sensitive identity data into request fields. Patient identity, directions plaintext, and private witnesses stay off-chain. The contract exposes only the commitments and verification state needed to prove validity.

## Local Run

```bash
npm ci
npm run compile
npm run sync:assets
npm run dev
```
