import { access, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FSErrorMessage = 'FS operation failed';
const deleteFileName = 'fileToRemove.txt';
const folderName = 'files';
const pathToDeleteFileName = join(__dirname, folderName, deleteFileName);

const remove = async () => {
  try {
    await access(pathToDeleteFileName);
    await rm(pathToDeleteFileName);
  } catch (e) {
    console.log(FSErrorMessage);
  }
};

await remove();