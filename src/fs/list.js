import { access, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FSErrorMessage = 'FS operation failed';
const folderName = 'files';
const pathToFolder = join(__dirname, folderName);

const list = async () => {
  try {
    await access(pathToFolder);
    const files = await readdir(pathToFolder);
    files.map(fileName => console.log(fileName));
  } catch (e) {
    console.log(FSErrorMessage);
  }
};

await list();