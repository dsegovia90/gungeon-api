/**
 * Scrape the guns from the wiki.
 * https://enterthegungeon.gamepedia.com/Guns
 */

import path from 'path';
import fs from 'fs';
import getHtmlFile from '../utils/getHtmlFile';
import parseGuns from './parseGuns';

const fileName = 'guns.html';
const fileUrl = path.join(__dirname, fileName);
const wikiUrl = 'https://enterthegungeon.gamepedia.com/Guns';
const gunDataUrl = path.join(__dirname, 'guns.json');

getHtmlFile(fileName, fileUrl, wikiUrl).then((html) => {
  const parsedGuns = JSON.stringify(parseGuns(html));
  fs.writeFile(gunDataUrl, parsedGuns, 'utf8', ((err) => {
    if (err) {
      console.error(err);
    }
  }));
});
