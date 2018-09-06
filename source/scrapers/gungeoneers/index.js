/**
 * Scrape the gungeoneers from the wiki.
 * https://enterthegungeon.gamepedia.com/Gungeoneers
 */

import path from 'path';
import getHtmlFile from '../utils/getHtmlFile';
import parseGungeoneers from './parseGungeoneers';

const fileName = 'gungeoneers.html';
const fileUrl = path.join(__dirname, fileName);
const wikiUrl = 'https://enterthegungeon.gamepedia.com/Gungeoneers';

getHtmlFile(fileName, fileUrl, wikiUrl).then((html) => {
  // @TODO do something with this json object of the gungeoneers
  parseGungeoneers(html);
});
