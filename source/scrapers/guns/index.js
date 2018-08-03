/**
 * Scrape the guns from the wiki.
 * https://enterthegungeon.gamepedia.com/Guns
 */

import path from 'path';
import getFile from '../utils/getFile';
import parseGuns from './parseGuns';

const fileName = 'guns.html';
const fileUrl = path.join(__dirname, fileName);
const wikiUrl = 'https://enterthegungeon.gamepedia.com/Guns';

getFile(fileName, fileUrl, wikiUrl).then((html) => {
  parseGuns(html);
});
