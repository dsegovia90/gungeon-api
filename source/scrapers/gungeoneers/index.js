/**
 * Scrape the gungeoneers from the wiki.
 * https://enterthegungeon.gamepedia.com/Gungeoneers
 */

import path from 'path';
import getFile from '../utils/getFile';
import parseGungeoneers from './parseGungeoneers';

const fileName = 'gungeoneers.html';
const fileUrl = path.join(__dirname, fileName);
const wikiUrl = 'https://enterthegungeon.gamepedia.com/Gungeoneers';

getFile(fileName, fileUrl, wikiUrl).then((html) => {
  console.log(parseGungeoneers(html));
});
