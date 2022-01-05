const orderAlfA = (array) => {
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

const orderAlfD = (array) => {
  const data = array.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return data;
};

const orderAtkDesc = (array) => {
  const data = array.sort((a, b) => b.atk - a.atk);
  return data;
};
const orderAtkAsc = (array) => {
  const data = array.sort((a, b) => a.atk - b.atk);
  return data;
};

export default function order(order, payload) {
  switch (order) {
    case "A-Z":
      return orderAlfA(payload);
    case "Z-A":
      return orderAlfD(payload);
    case "Fuerza Asc":
      return orderAtkAsc(payload);
    case "Fuerza Desc":
      return orderAtkDesc(payload);
    default:
      return payload;
  }
}
