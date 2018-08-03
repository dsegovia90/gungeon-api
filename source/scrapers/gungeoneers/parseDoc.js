import { JSDOM } from 'jsdom';

export default (data) => {
  const { document } = (new JSDOM(data)).window;
  const tables = document.querySelectorAll('table');

  const sampleObj = {};

  const titles = tables[0].querySelectorAll('th');
  titles.forEach((title) => {
    let parsedTitle = title.innerHTML.trim();
    parsedTitle = parsedTitle[0].toLowerCase()
      + parsedTitle.substring(1, parsedTitle.length);
    parsedTitle = parsedTitle.split(' ').join('');
    sampleObj[parsedTitle] = {};
  });



  tables.forEach((table) => {
    const rows = table.querySelectorAll('tr');
    
  });
};
