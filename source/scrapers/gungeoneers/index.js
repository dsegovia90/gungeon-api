/**
 * Scrape the gungeoneers from the wiki.
 * https://enterthegungeon.gamepedia.com/Gungeoneers
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import parseDoc from './parseDoc';

const url = 'https://enterthegungeon.gamepedia.com/Gungeoneers';
const fileUrl = path.join(__dirname, 'gungeoneers.html');

fs.readFile(fileUrl, 'utf8', (fileErr, fileData) => {
  if (fileErr) {
    console.log('File does not exits...');
    fetch(url)
      .then(res => res.text())
      .then((data) => {
        console.log(data);
        fs.writeFile(fileUrl, data, (err) => {
          if (err) {
            return console.log(err);
          }
          return console.log('Downloaded gungeoneers...');
        });
      });
  } else {
    console.log('File already exists, using that...');
    const gungeoneersJson = parseDoc(fileData);

    // @TODO => Do something with the gungeoneerJson.
  }
});
