export const orderAlfabe = (array) => {
  const data = array.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return data;
};

export const orderAtk = (array) => {
  const data = array.sort((a, b) => b.atk - a.atk);
  return data;
};
