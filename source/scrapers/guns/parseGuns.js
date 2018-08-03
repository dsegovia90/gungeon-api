import { JSDOM } from 'jsdom';

export default (data) => {
  const { document } = (new JSDOM(data)).window;
  const output = [];

  const rows = document.querySelectorAll('tr');

  /**
   * Cycle through the gun rows.
   */
  rows.forEach((row) => {
    const columns = row.querySelectorAll('td');

    columns.forEach((column) => {
      
    })
  })
};
