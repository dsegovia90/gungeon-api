import { JSDOM } from 'jsdom';
import getIds from '../utils/getIds';

export default (data) => {
  const { document } = (new JSDOM(data)).window;
  const output = [];

  const rows = document.querySelectorAll('tr');

  /**
   * Find all table rows.
   */
  rows.forEach((row) => {
    const columns = row.querySelectorAll('td');

    /**
     * If the columns are not td (aka th row), skip.
     */
    if (columns.length > 0) {
      const gungeoneer = {};

      /**
       * Cycle through each row's column.
       */
      columns.forEach((column, index) => {
        /** What to do in the gungeoneer title column. */
        if (index === 0) {
          const item = column.querySelector('[title]');
          gungeoneer.name = item.getAttribute('title');
          gungeoneer.href = item.getAttribute('href');
          gungeoneer.id = gungeoneer.name.replace(' ', '_');
          gungeoneer.image = item.querySelector('img').getAttribute('src');

        /** What to do in the gungeoneer starting weapons column. */
        } else if (index === 1) {
          const weapons = column.querySelectorAll('[title]');
          gungeoneer.weapons = getIds(weapons);

          /** What to do in the gungeoneer starting items column. */
        } else if (index === 2) {
          const items = column.querySelectorAll('[title]');
          gungeoneer.items = getIds(items);
        }
      });

      /** Add to output. */
      output.push(gungeoneer);
    }
  });

  return output;
};
