

//jshint esversion:6
function ctof(){
var t1 = document.getElementById("c1").value;
  t1 = parseFloat(t1);
  var t2 = ((t1*9)/5)+32;
  document.getElementById("f1").value=t2;
}
function ftoc(){
  var t3 = document.getElementById("f2").value;
  t3 = parseFloat(t3);
  var t4 = ((t3-32)*5)/9;
  document.getElementById("c2").value=t4;
}
function dtor(){
  var a = document.getElementById("ang").value;
  a = parseFloat(a);
  const pi = 22/7;
  var b = ((a*pi)/180);
  document.getElementById("rad").value=b;
}
function rtod(){
  var c = document.getElementById("rad2").value;
  c = parseFloat(c);
  const pi = 22/7;
  var d = ((c*180)/pi);
  document.getElementById("ang2").value=d;
}
