import * as fs from 'node:fs';
import * as crypto from 'node:crypto';

// ts-node createhashfinal.ts 


// Read the contents of the hashsource.txt file
const data = fs.readFileSync('./hashsource.txt', 'utf8');

// Create a SHA-256 hash of the file contents
const hash = crypto.createHash('sha256').update(data, 'utf8').digest('hex');


console.log(`SHA-256 hash ${hash}`);