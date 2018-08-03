import fetch from 'node-fetch';
import fs from 'fs';

export default (fileName, fileUrl, wikiUrl) => new Promise((resolve, reject) => {
  fs.readFile(fileUrl, 'utf8', (fileErr, fileData) => {
    if (fileErr) {
      console.log(`The file ${fileName} does not exist.`);
      fetch(wikiUrl)
        .then(res => res.text())
        .then((data) => {
          resolve(data);
          fs.writeFile(fileUrl, data, (err) => {
            if (err) {
              reject(err);
            }
            console.log(`Downloaded ${fileName} from ${wikiUrl}`);
          });
        });
    } else {
      console.log(`File ${fileName} already exists locally.`);
      resolve(fileData);
    }
  });
});
