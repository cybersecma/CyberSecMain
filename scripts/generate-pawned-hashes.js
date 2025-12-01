const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Configuration
const INPUT_CSV_PATH = process.argv[2] || 'private_data/shai_hulud_stats.csv';
const OUTPUT_JSON_PATH = 'public/data/pawned_hashes.json';

function generateHashes() {
    console.log(`Reading data from ${INPUT_CSV_PATH}...`);

    if (!fs.existsSync(INPUT_CSV_PATH)) {
        console.error(`Error: Input file not found at ${INPUT_CSV_PATH}`);
        console.log('Usage: node scripts/generate-pawned-hashes.js <path-to-csv>');
        process.exit(1);
    }

    const content = fs.readFileSync(INPUT_CSV_PATH, 'utf-8');
    const lines = content.trim().split('\n');
    const hashes = new Set();
    
    // Skip header (row 0)
    let count = 0;
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Handle CSV parsing (considering quotes)
        // This regex splits by comma but ignores commas inside quotes
        const cols = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        
        // Clean quotes if present
        const cleanCol = (col) => col ? col.replace(/^"|"$/g, '').trim() : '';

        // Column 0: Username
        const username = cleanCol(cols[0]);
        // Column 4: Company (5th column)
        const company = cleanCol(cols[4]);

        if (username && username !== 'None') {
            const hash = crypto.createHash('sha256').update(username.toLowerCase()).digest('hex');
            hashes.add(hash);
            count++;
        }
        
        if (company && company !== 'None') {
            const hash = crypto.createHash('sha256').update(company.toLowerCase()).digest('hex');
            hashes.add(hash);
            count++;
        }
    }

    // Ensure output directory exists
    const outputDir = path.dirname(OUTPUT_JSON_PATH);
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(Array.from(hashes)));
    console.log(`Success! Generated ${hashes.size} unique hashes from ${lines.length - 1} records.`);
    console.log(`Output saved to: ${OUTPUT_JSON_PATH}`);
    console.log('You can now deploy this JSON file safely. The raw CSV data is not exposed.');
}

generateHashes();

