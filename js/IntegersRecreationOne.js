function listSquared(m, n) {
  var matches = [];
  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    if (Number.isInteger(Math.sqrt(sum))) {
      matches.push([i, sum]);
    }
  }
  return matches;
}


function getDivisors (n) {
  var divisors = [];
  for (var i = 1; i <= n / 2; ++i) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }

  return divisors.concat([n]);
}