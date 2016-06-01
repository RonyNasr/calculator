// Business (or back-end) logic:

var add = function (num1,num2){
  return num1+num2;
}
var subtract = function (num1,num2){
  return num1-num2;
}
var multiply = function (num1,num2){
  return num1*num2;
}
var divide = function (num1,num2){
  return num1/num2;
}

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var num1 = parseInt($("#add1").val());
  var num2 = parseInt($("#add2").val());
  var result = add(num1,num2);
  $("#output").text(result);
  });
  $("form#sub").submit(function(event) {
  event.preventDefault();
  var num1 = parseInt($("#sub1").val());
  var num2 = parseInt($("#sub2").val());
  var result = subtract(num1,num2);
  $("#output").text(result);
  });
  $("form#mult").submit(function(event) {
  event.preventDefault();
  var num1 = parseInt($("#mult1").val());
  var num2 = parseInt($("#mult2").val());
  var result = multiply(num1,num2);
  $("#output").text(result);
  });
  $("form#div").submit(function(event) {
  event.preventDefault();
  var num1 = parseInt($("#div1").val());
  var num2 = parseInt($("#div2").val());
  var result = divide(num1,num2);
  $("#output").text(result);
  });
});
