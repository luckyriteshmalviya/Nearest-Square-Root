function mysqrt(a, x = 1) {
  if (a - x <= 0) {
    x = (x + 1) / 2;

    if (x ** 2 > a) x--;
    return x;
  }
  a = a - x;
  x += 2;
  return mysqrt(a, x);
}

console.log("sqrt", mysqrt(2));
console.log("sqrt", mysqrt(10));
console.log("sqrt", mysqrt(16));
console.log("sqrt", mysqrt(17));
console.log("sqrt", mysqrt(24));
console.log("sqrt", mysqrt(26));
console.log("sqrt", mysqrt(179));
