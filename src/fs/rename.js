import { access, copyFile, rm, constants } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FSErrorMessage = 'FS operation failed';
const wrongFileName = 'wrongFilename.txt';
const properFileName = 'properFilename.md';
const folderName = 'files';
const pathToWrongFileName = join(__dirname, folderName, wrongFileName);
const pathToProperFileName = join(__dirname, folderName, properFileName);

const rename = async () => {
  try {
    await access(pathToWrongFileName);
    await copyFile(pathToWrongFileName, pathToProperFileName, constants.COPYFILE_EXCL);
    await rm(pathToWrongFileName);
  } catch (e) {
    console.log(FSErrorMessage);
  }
};

await rename();