module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  (item.enhancement == 20 ? item : item.enhancement++);
  let newItem = Object.assign({}, item)
  // return newItem
  return { ...item };
}

function fail (item) {
  if(item.enhancement < 15) {
    item.durability < 5 ? item.durability = 0 : item.durability = item.durability - 5;
  } else if (item.enhancement == 15 || item.enhancement == 16) {
    item.durability < 10 ? item.durability = 0 : item.durability = item.durability - 10
  } else if (item.enhancement > 16) {
    item.durability < 10 ? item.durability = 0 : item.durability = item.durability - 10;
    item.enhancement--;
  }
  let newItem = Object.assign({}, item)
  // return newItem
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  let newItem = Object.assign({}, item)
  // return newItem
  return { ...item };
}

function get(item) {
  return { ...item };
}

