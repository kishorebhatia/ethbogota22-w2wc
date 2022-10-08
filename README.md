# ethbogota22-w2wc
Eth Bogota 2022 hackathon use-case: Wallet-to-Wallet Chat client

## Setup
Add Infura API_KEY to .env.local in the project's root:
NEXT_PUBLIC_INFURA_ID={INFURA_API_KEY}

### Installation
```bash
npm install
```

### Run dev server (localhost)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to work with the application

### Further sharing b/w multiple clients:

Install ngrok on your local dev server machine
run ngrok config with your key
```bash
ngrok config add-authtoken [your ngrok key]
```
then run ngrok to map local http port 3000
```bash
ngrok http 3000 
```
