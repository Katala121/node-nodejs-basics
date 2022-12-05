import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderName = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const pathToFile = join(__dirname, folderName, fileName);

const calculateHash = async () => {
  try {
    await access(pathToFile);
    const file = await readFile(pathToFile);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(file);
    const hex = hashSum.digest('hex');
    console.log(hex);
  } catch (e) {
    console.log(e.message);
  }
};

await calculateHash();