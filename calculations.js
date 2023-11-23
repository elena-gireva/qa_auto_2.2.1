function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function getIncrement(x) {
  ++x;
  return x;
}

function getDecrement(y) {
  --y;
  return y;
}



console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(getIncrement(10));
console.log(getDecrement(21));
