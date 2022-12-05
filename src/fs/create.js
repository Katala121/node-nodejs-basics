import { writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FSErrorMessage = 'FS operation failed';
const folderName = 'files';
const filename = 'fresh.txt';
const dataMessage = 'I am fresh and young';
const pathToFile = join(__dirname, folderName, filename);

const create = async () => {
  try {
    await access(pathToFile);
    throw new Error(FSErrorMessage);
  } catch (e) {
    if (e.message !== FSErrorMessage) await writeFile(pathToFile, dataMessage, {flag: 'w+'});
    else console.log(e.message);
  }
};

await create();