import { access } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderName = 'files';
const fileName = 'fileToWrite.txt';
const pathToFile = join(__dirname, folderName, fileName);

const write = async () => {
  try {
    await access(pathToFile);
    const writeStream = createWriteStream(pathToFile);
    stdin.pipe(writeStream);
  } catch (e) {
    console.log(e.message);
  }
};

await write();