// This file is the javascript for the fonts and languages submenu.

// Font family

$('#fontArial').click(function(){
  $('body').css("font-family", "Arial");
});
$('#fontTimes').click(function(){
  $('body').css("font-family", "TimesNewRoman");
});
$('#fontCalibri').click(function(){
  $('body').css("font-family", "Calibri");
});

// Font size

$('#fontSizeIncrease').click(function(){
  var mySize = $('body').css("font-size");
  var actualSize = parseFloat(mySize);
  actualSize+=2;
  var unit= mySize.slice(-2);
  $('body').css("font-size", actualSize + unit);
  $('button').css("font-size", actualSize + unit);
  $('textarea').css("font-size", actualSize + unit);
});


$('#fontSizeDecrease').click(function(){
  var mySize = $('body').css("font-size");
  var actualSize = parseFloat(mySize);
  actualSize-=2;
  var unit= mySize.slice(-2);
  $('body').css("font-size", actualSize + unit);
  $('button').css("font-size", actualSize + unit);
  $('textarea').css("font-size", actualSize + unit);
});
