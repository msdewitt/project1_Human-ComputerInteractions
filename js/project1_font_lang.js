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

//Font Styles

$('#fontStyleBold').click(function(){
  if(this.checked){
    $('body').css("font-weight", "bold");
    $('button').css("font-weight", "bold");
    $('textarea').css("font-weight", "bold");
  }
  else{
    $('body').css("font-weight", "");
    $('button').css("font-weight", "");
    $('textarea').css("font-weight", "");
  }
});

$('#fontStyleUnderline').click(function(){
  if(this.checked){
    $('body').css("text-decoration", "underline");
    $('button').css("text-decoration", "underline");
    $('textarea').css("text-decoration", "underline");
  }
  else{
    $('body').css("text-decoration", "");
    $('button').css("text-decoration", "");
    $('textarea').css("text-decoration", "");
  }
});

$('#fontStyleItalic').click(function(){
  if(this.checked){
    $('body').css("font-style", "italic");
    $('button').css("font-style", "italic");
    $('textarea').css("font-style", "italic");
  }
  else{
    $('body').css("font-style", "");
    $('button').css("font-style", "");
    $('textarea').css("font-style", "");
  }
});
$('#langSP').click(function(){
  console.log("Test");
  $("[data-localize]").localize("lang",{pathPrefix:"lang", language:'sp'}); //triggers the dictionary file
});
