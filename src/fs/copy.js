import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FSErrorMessage = 'FS operation failed';
const folderNameSrc = 'files';
const folderNameDestination = 'files_copy';
const pathToFolderSrc = join(__dirname, folderNameSrc);
const pathToFolderDestination = join(__dirname, folderNameDestination);

const copy = async () => {
  try {
    const files = await readdir(pathToFolderSrc);
    await mkdir(pathToFolderDestination);
    files.map(fileName => {
      const pathToSrcFile = join(pathToFolderSrc, fileName);
      const pathToDestFile = join(pathToFolderDestination, fileName);
      copyFile(pathToSrcFile, pathToDestFile);
      return false;
    })
  } catch (e) {
    console.log(FSErrorMessage);
  }
};

copy();