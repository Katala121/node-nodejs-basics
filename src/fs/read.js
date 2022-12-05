import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FSErrorMessage = 'FS operation failed';
const fileName = 'fileToRead.txt';
const folderName = 'files';
const pathToFile = join(__dirname, folderName, fileName);

const read = async () => {
  try {
    await access(pathToFile);
    const contentFile = await readFile(pathToFile, { encoding: 'utf8' });
    console.log(contentFile);
  } catch (e) {
    console.log(FSErrorMessage);
  }
};

await read();