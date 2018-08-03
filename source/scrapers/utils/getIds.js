export default (list) => {
  const arr = [];
  list.forEach((item) => {
    const obj = {
      id: item.getAttribute('title').replace(' ', '_'),
    };
    arr.push(obj);
  });

  return arr;
};
