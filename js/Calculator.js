var index = 0;
var IN = 2;
var A;
var c;
var B;
function dis(val) {
  if (IN == 3) {
    document.getElementById("display").value = "";
  }
  document.getElementById("display").value += val;
  B += val;
}
function dis_o(val) {
  if (IN >= 2) {
    IN = 1;
    A = document.getElementById("display").value;
    c = val;
    B = "";
    document.getElementById("display").value += " " + val + " ";
  }
}
function solve() {
  let x = document.getElementById("display").value;
  let y = 0;
  var a = parseInt(A);
  var b = parseInt(B);
  switch (c) {
    case "+":
      y = a + b;
      break;
    case "-":
      y = a - b;
      break;
    case "/":
      y = a / b;
      break;
    case "*":
      y = a * b;
      break;
  }
  document.getElementById("display").value = y;
  IN = 3;
}

function clr() {
  document.getElementById("display").value = "";
  IN = 2;
}
