const crypto = require('crypto');
const admin = require('firebase-admin');
const path = require('path');

// Configuration
const USERNAME_TO_CHECK = process.argv[2] || 'oxbow68';
const SERVICE_ACCOUNT_KEY_PATH = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || 'service-account-key.json';

async function checkUser() {
    console.log(`Checking status for: "${USERNAME_TO_CHECK}"`);

    // 1. Calculate Hash
    const normalized = USERNAME_TO_CHECK.trim().toLowerCase();
    const hash = crypto.createHash('sha256').update(normalized).digest('hex');
    console.log(`Normalized: "${normalized}"`);
    console.log(`Calculated Hash: ${hash}`);

    // 2. Check Firestore
    if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
        console.error(`\n[!] Service account key not found at ${SERVICE_ACCOUNT_KEY_PATH}`);
        console.log("Skipping Firestore check. Please download the key to verify database state.");
        return;
    }

    const serviceAccount = require(path.resolve(SERVICE_ACCOUNT_KEY_PATH));
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    const db = admin.firestore();

    console.log('\nConnecting to Firestore...');
    const docRef = db.collection('pawned_hashes').doc(hash);
    const doc = await docRef.get();

    if (doc.exists) {
        console.log(`[+] FOUND! Document exists in 'pawned_hashes'.`);
        console.log('Data:', doc.data());
    } else {
        console.log(`[-] NOT FOUND. Document with ID ${hash} does not exist.`);
    }

    // Check for @ version just in case
    if (!normalized.startsWith('@')) {
        const hashAt = crypto.createHash('sha256').update('@' + normalized).digest('hex');
        const docAt = await db.collection('pawned_hashes').doc(hashAt).get();
        if (docAt.exists) {
            console.log(`[+] FOUND as Company! (@${normalized})`);
            console.log('Data:', docAt.data());
        }
    }
}

const fs = require('fs');
checkUser();

