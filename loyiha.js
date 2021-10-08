const number = +prompt("siz qancha yangilik ko'rdingiz?");

const personal = {
  count: number,
  news: {},
  octor: {},
  genner: {},
  privat: false,
};

const a = prompt("oxrigi kurgan yangiliklariz?"),
  b = prompt("unga qancha baxo bergan bular ediz?");

personal.news[a] = b;
console.log(personal);
