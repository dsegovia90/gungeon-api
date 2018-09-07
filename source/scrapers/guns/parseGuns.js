import { JSDOM } from 'jsdom';
import toCamelCase from '../utils/toCamelCase';

export default (data) => {
  const { document } = (new JSDOM(data)).window;
  const output = [];

  const titles = [];
  document.querySelectorAll('th').forEach((td) => {
    if (td.querySelector('[title]')) {
      titles.push(toCamelCase(td.querySelector('[title]').innerHTML.trim()));
    } else {
      titles.push(toCamelCase(td.innerHTML.trim()));
    }
  });


  const rows = document.querySelectorAll('tr');

  /**
   * Cycle through the gun rows.
   */
  rows.forEach((row) => {
    const columns = row.querySelectorAll('td');
    const weapon = {};

    columns.forEach((column, index) => {
      if (index === 0) {
        const img = column.querySelector('img');
        weapon.icon = {};
        weapon.icon.x1 = img.getAttribute('src');

        let srcset = img.getAttribute('srcset');
        if (srcset) {
          srcset = srcset.split(', ');
          srcset.forEach((singleSrcset) => {
            const splittedSrcset = singleSrcset.split(' ');
            let srcSize = splittedSrcset[1];
            if (srcSize === '1.5x') {
              srcSize = 'x1.5';
            } else if (srcSize === '2x') {
              srcSize = 'x2';
            }
            const srcUrl = splittedSrcset[0];
            weapon.icon[srcSize] = srcUrl;
          });
        }
      } else if (index === 1) {
        const name = column.querySelector('[title]');
        weapon.name = name.getAttribute('title');
        weapon.id = weapon.name.replace(' ', '_');
      } else if (index === 14) {
        // Do nothing for now, this are the notes...
      } else if (!column.querySelector('img')) {
        if (parseFloat(column.innerHTML.trim())) {
          weapon[titles[index]] = parseFloat(column.innerHTML.trim());
        } else {
          weapon[titles[index]] = column.innerHTML.trim();
        }
      } else if (column.querySelector('img')) {
        let alt = column.querySelector('img').getAttribute('alt').trim();
        if (alt.includes('Item.png')) alt = alt.substring(0, 1);
        if (alt === 'Infinity.png') alt = 'infinite';
        if (alt === 'N/A') alt = undefined;
        weapon[titles[index]] = alt;
      }
    });

    output.push(weapon);
  });

  return output;
};
