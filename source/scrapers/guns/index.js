/**
 * Scrape the guns from the wiki.
 * https://enterthegungeon.gamepedia.com/Guns
 */

import path from 'path';
import getHtmlFile from '../utils/getHtmlFile';
import parseGuns from './parseGuns';

const fileName = 'guns.html';
const fileUrl = path.join(__dirname, fileName);
const wikiUrl = 'https://enterthegungeon.gamepedia.com/Guns';

getHtmlFile(fileName, fileUrl, wikiUrl).then((html) => {
  const parsedGuns = parseGuns(html);

});
