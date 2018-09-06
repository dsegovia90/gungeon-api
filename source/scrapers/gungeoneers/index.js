/**
 * Scrape the gungeoneers from the wiki.
 * https://enterthegungeon.gamepedia.com/Gungeoneers
 */

import path from 'path';
import fs from 'fs';
import getHtmlFile from '../utils/getHtmlFile';
import parseGungeoneers from './parseGungeoneers';

const fileName = 'gungeoneers.html';
const fileUrl = path.join(__dirname, fileName);
const wikiUrl = 'https://enterthegungeon.gamepedia.com/Gungeoneers';
const gunDataUrl = path.join(__dirname, 'gungeoneers.json');

getHtmlFile(fileName, fileUrl, wikiUrl).then((html) => {
  // @TODO do something with this json object of the gungeoneers
  const parsedGungeoneers = JSON.stringify(parseGungeoneers(html));
  fs.writeFile(gunDataUrl, parsedGungeoneers, 'utf8', ((err) => {
    if (err) {
      console.error(err);
    }
  }));
});
