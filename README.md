# 🌏 Traditia Backend – Cultural Heritage Preservation Platform

Traditia is a web platform dedicated to preserving and sharing traditional cultures across regions and tribes. This project features two major components:

- 🛠️ **Traditional Backend** – REST API for managing cultural data (songs, clothes, houses, food, etc.)
- ⛓️ **Blockchain Module** – Ethereum-based authenticity tracking for submitted artifacts

---

## 📁 Project Structure
traditia-backend/
├── backend/ # Node.js + Hono-based backend
│ ├── controllers/ # API route logic (create/read/update)
│ ├── utils/ # Supabase + CSV handling scripts
│ ├── middlewares/ # CORS, auth, etc.
│ ├── db/ # Drizzle ORM setup
│ └── index.ts # Main server entry
├── blockchain/ # Hardhat + Solidity contracts
│ ├── contracts/ # Smart contracts (.sol)
│ ├── scripts/ # Deployment/interact scripts
│ └── hardhat.config.ts
├── .env
├── README.md
└── package.json


---

## 🌐 Features

### ✅ Backend API (Hono + Drizzle + Supabase)
- Upload & fetch cultural artifacts (by tribe/category)
- CSV parser for mass uploads (`public/datasets/*.csv`)
- Supabase public bucket integration for file storage
- Categorization system: `song`, `food`, `clothes`, `house`, etc.

### ✅ Blockchain (Solidity + Hardhat)
- On-chain cultural artifact record (immutability + trust)
- Verify authenticity of uploaded artifacts
- Record hashes of artifacts (stored off-chain in Supabase)

---

## 🔧 Environment Setup

### 1. Backend Environment (`.env`)


---

## 🚀 Running the Project

### ✅ Install Dependencies

```bash
npm install
npm run dev
