import { access } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderName = 'files';
const fileName = 'fileToRead.txt';
const pathToFile = join(__dirname, folderName, fileName);

const read = async () => {
  try {
    await access(pathToFile);
    const readStream = createReadStream(pathToFile);
    readStream.pipe(stdout);
  } catch (e) {
    console.log(e.message);
  }
};

await read();