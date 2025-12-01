const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const admin = require('firebase-admin');

// Configuration
const INPUT_CSV_PATH = process.argv[2] || 'private_data/shai_hulud_stats.csv';
// Note: You need to set GOOGLE_APPLICATION_CREDENTIALS environment variable 
// or provide the path to your service account key JSON file here
const SERVICE_ACCOUNT_KEY_PATH = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || 'service-account-key.json';

async function migrateHashesToFirestore() {
    console.log(`Reading data from ${INPUT_CSV_PATH}...`);

    if (!fs.existsSync(INPUT_CSV_PATH)) {
        console.error(`Error: Input file not found at ${INPUT_CSV_PATH}`);
        console.log('Usage: node scripts/upload-hashes-to-firestore.js <path-to-csv>');
        process.exit(1);
    }

    if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
        console.error(`Error: Service account key not found at ${SERVICE_ACCOUNT_KEY_PATH}`);
        console.error('Please download a service account key from Firebase Console -> Project Settings -> Service Accounts');
        process.exit(1);
    }

    // Initialize Firebase Admin
    const serviceAccount = require(path.resolve(SERVICE_ACCOUNT_KEY_PATH));
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    const db = admin.firestore();
    const batchSize = 500; // Firestore batch limit

    const content = fs.readFileSync(INPUT_CSV_PATH, 'utf-8');
    const lines = content.trim().split('\n');
    const hashes = new Set();
    
    // Process CSV and generate hashes
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const cleanCol = (col) => col ? col.replace(/^"|"$/g, '').trim() : '';

        const username = cleanCol(cols[0]);
        const company = cleanCol(cols[4]);

        if (username && username !== 'None') {
            const hash = crypto.createHash('sha256').update(username.toLowerCase()).digest('hex');
            hashes.add(hash);
        }
        
        if (company && company !== 'None') {
            const hash = crypto.createHash('sha256').update(company.toLowerCase()).digest('hex');
            hashes.add(hash);
        }
    }

    console.log(`Found ${hashes.size} unique records to sync.`);
    
    const hashArray = Array.from(hashes);
    const collectionRef = db.collection('pawned_hashes');

    // Delete existing collection (optional, safer to just overwrite/add)
    // For large collections, you'd normally use a recursive delete or CLI tool
    // console.log('Clearing old data...'); 
    // (Implement deletion logic if needed)

    console.log('Uploading hashes in batches...');
    
    for (let i = 0; i < hashArray.length; i += batchSize) {
        const batch = db.batch();
        const chunk = hashArray.slice(i, i + batchSize);
        
        chunk.forEach(hash => {
            const docRef = collectionRef.doc(hash); // Use hash as ID for automatic deduplication and fast lookups
            batch.set(docRef, { hash: hash, lastUpdated: admin.firestore.FieldValue.serverTimestamp() });
        });

        await batch.commit();
        console.log(`Uploaded ${Math.min(i + batchSize, hashArray.length)} / ${hashArray.length}`);
    }

    console.log('Success! All hashes uploaded to Firestore.');
}

migrateHashesToFirestore();

