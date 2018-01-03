var n = 16;

var alphaCycle = [8, 4, 4];
var betaCycle = [8, 4, 4];
var gammaCycle = [8, 4, 4];

var alpha = new Array(n);
var beta  = new Array(n);
var gamma = new Array(n);

var alphaLengths = new Array(n);
var betaLengths  = new Array(n);
var gammaLengths = new Array(n);

function initializeIsotopism() {
  var c = 0;
  var pos = 0;

  for (var i = 0; i < alphaCycle.length; i++) {
    var l = alphaCycle[i];
    for (var j = 0; j < l-1; j++) {
      alpha[pos] = c+j+1;
      pos = pos + 1;
    }
    alpha[pos] = c;
    pos = pos + 1;
    c = c + l;
  }

  c = 0;
  pos = 0;

  for (var i = 0; i < betaCycle.length; i++) {
    var l = betaCycle[i];
    for (var j = 0; j < l-1; j++) {
      beta[pos] = c+j+1;
      pos = pos + 1;
    }
    beta[pos] = c;
    pos = pos + 1;
    c = c + l;
  }

  c = 0;
  pos = 0;

  for (var i = 0; i < gammaCycle.length; i++) {
    var l = gammaCycle[i];
    for (var j = 0; j < l-1; j++) {
      gamma[pos] = c+j+1;
      pos = pos + 1;
    }
    gamma[pos] = c;
    pos = pos + 1;
    c = c + l;
  }
}

function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

function gcd(x, y) {
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function lcm_condition(x, y, z) {
  var a = lcm(x, y);

  if (a != lcm(x, z)) { return false; }
  if (a != lcm(y, z)) { return false; }
  if (a != lcm(x, lcm(y, z))) { return false; }

  return true;
}

function identifyCycleLengths() {
  var pos = 0;

  for (var i = 0; i < alphaCycle.length; i++) {
    var l = alphaCycle[i];
    for (var j = 0; j < l; j++) {
      alphaLengths[pos] = l;
      pos = pos + 1;
    }
  }

  pos = 0;

  for (var i = 0; i < betaCycle.length; i++) {
    var l = betaCycle[i];
    for (var j = 0; j < l; j++) {
      betaLengths[pos] = l;
      pos = pos + 1;
    }
  }

  pos = 0;

  for (var i = 0; i < gammaCycle.length; i++) {
    var l = gammaCycle[i];
    for (var j = 0; j < l; j++) {
      gammaLengths[pos] = l;
      pos = pos + 1;
    }
  }

}

var L = new Array(n);
for (var i = 0; i < n; i++) {
  L[i] = new Array(n);
}
for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    L[i][j] = 0;
  }
}

var used = new Array(n);
for (var i = 0; i < n; i++) {
  used[i] = 0;
}

function resetUsed() {
  for (var i = 0; i < n; i++) {
    used[i] = 0;
  }
}

function nrDistinctSymbolsRow(i) {
  resetUsed();

  for (var j = 0; j < n; j++) {
    used[L[i][j]] = 1;
  }

  var count = 0;
  for (var j = 0; j < n; j++) {
    count = count + used[j];
  }

  return count;
}

function nrDistinctSymbolsCol(j) {
  resetUsed();

  for (var i = 0; i < n; i++) {
    used[L[i][j]] = 1;
  }

  var count = 0;
  for (var i = 0; i < n; i++) {
    count = count + used[i];
  }

  return count;
}

function isLatinSquare() {
  for (var i = 0; i < n; i++) {
    if (nrDistinctSymbolsRow(i) != n) { return false; }
  }

  for (var j = 0; j < n; j++) {
    if (nrDistinctSymbolsCol(j) != n) { return false; }
  }

  return true;
}

function alphaString() {
  var str = "";

  resetUsed();

  for (var i = 0; i < n; i++) {
    if (used[i] == 1) { continue; }

    var a = i;
    var isFirst = true;

    str = str + "(";
    while (used[a] != 1) {
      if (isFirst == false) { str = str + ","; }
      str = str + a;
      used[a] = 1;
      a = alpha[a];
      isFirst = false;
    }
    str = str + ")";

  }

  return str;
}

function betaString() {
  var str = "";

  resetUsed();

  for (var i = 0; i < n; i++) {
    if (used[i] == 1) { continue; }

    var a = i;
    var isFirst = true;

    str = str + "(";
    while (used[a] != 1) {
      if (isFirst == false) { str = str + ","; }
      str = str + a;
      used[a] = 1;
      a = beta[a];
      isFirst = false;
    }
    str = str + ")";

  }

  return str;
}

function gammaString() {
  var str = "";

  resetUsed();

  for (var i = 0; i < n; i++) {
    if (used[i] == 1) { continue; }

    var a = i;
    var isFirst = true;

    str = str + "(";
    while (used[a] != 1) {
      if (isFirst == false) { str = str + ","; }
      str = str + a;
      used[a] = 1;
      a = gamma[a];
      isFirst = false;
    }
    str = str + ")";

  }

  return str;
}

function isotopismString() {
  return "(" + alphaString() + "," + betaString() + "," + gammaString() + ")";
}

function computeIsotopismString() {
  document.getElementById("iso").innerHTML = isotopismString();
}

function computeIsotopismArrayString() {
  var str = "";

  for (var i = 0; i < n; i++) {
    str = str + alpha[i] + " ";
  }

  str = str + "- ";

  for (var i = 0; i < n; i++) {
    str = str + beta[i] + " ";
  }

  str = str + "- ";

  for (var i = 0; i < n; i++) {
    str = str + gamma[i] + " ";
  }

  document.getElementById("isoArray").innerHTML = str;
}

function computeIsotopismLengthsString() {
  var str = "";

  for (var i = 0; i < n; i++) {
    str = str + alphaLengths[i];
  }

  str = str + " ";

  for (var i = 0; i < n; i++) {
    str = str + betaLengths[i];
  }

  str = str + " ";

  for (var i = 0; i < n; i++) {
    str = str + gammaLengths[i];
  }

  document.getElementById("isoLengths").innerHTML = str;
}

function LatinSquareString() {
  str = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      str = str + L[i][j];
    }
    if (i != n-1) str = str + " ";
  }
  return str;
}

function cellClick(i,j) {
  var a = alpha[i];
  var b = beta[j];

  var s = (L[i][j] + 1) % n;

  while (lcm_condition(alphaLengths[i],betaLengths[j],gammaLengths[s]) == false) {
    s = (s + 1) % n;
  }

  L[i][j] = s;
  document.getElementById("symbolOut" + i + "r" + j).innerHTML = L[i][j];
  document.getElementById("row" + i + "unused").innerHTML = n - nrDistinctSymbolsRow(i);
  document.getElementById("col" + j + "unused").innerHTML = n - nrDistinctSymbolsCol(j);

  while(a != i || b != j) {
    s = gamma[s];
    L[a][b] = s;

    document.getElementById("symbolOut" + a + "r" + b).innerHTML = L[a][b];
    document.getElementById("row" + a + "unused").innerHTML = n - nrDistinctSymbolsRow(a);
    document.getElementById("col" + b + "unused").innerHTML = n - nrDistinctSymbolsCol(b);

    a = alpha[a];
    b = beta[b];
  }

  if(isLatinSquare()) {
    document.getElementById("latinfound").innerHTML = "<b>You've found a Latin square with that autotopism!!  Congratulations!</b>";
    document.getElementById("latin").innerHTML = "Latin square string: " + LatinSquareString();
  }
  else {
    document.getElementById("latinfound").innerHTML = "";
  }

};

function initialization() {
  initializeIsotopism();
  identifyCycleLengths();

  computeIsotopismString();
  // computeIsotopismArrayString();
  // computeIsotopismLengthsString();

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var r = Math.floor((Math.random() * n) + 1);
      for (var k = 0; k < r; k++) {
        cellClick(i,j);
      }
    }
  }

}

