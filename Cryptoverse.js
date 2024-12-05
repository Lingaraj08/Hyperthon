require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { ethers } = require("ethers");

const app = express();
app.use(bodyParser.json());

// Blockchain setup
const ABI = [/* Add your contract's ABI here */];
const CONTRACT_ADDRESS = "<Your_Contract_Address>";
const provider = new ethers.providers.JsonRpcProvider(process.env.TESTNET_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

// Mint API
app.post("/mint", async (req, res) => {
    try {
        const { to } = req.body;
        const tx = await contract.mintAsset(to);
        await tx.wait();
        res.json({ status: "success", txHash: tx.hash });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
