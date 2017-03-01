// (function() {
//   "use strict";
  function createNode(number){
    var node = new Object();
    node.next = null;
    node.element = number;
    return node;
  };

  function createStack (){
    var stack = new Object();
    stack.size = 0;
    stack.top = null;
    //push method
    stack.push = function (number){
      var newNode = new createNode(number);
      if(stack.size === 0){
        stack.top = newNode;
      }else {
        newNode.next = stack.top;
        stack.top = newNode;
      }
      stack.size++;

      //ending push function
    };
    stack.toString = function(){
      var result = "";
      var current= stack.top;
      while(current != null){
        result += current.element + "\n";
        current = current.next;
      }
      return result;
    };
    stack.pop = function(){
      //ending pop function
      var result = stack.top.element;
      stack.top = stack.top.next;
      stack.size--;
      return result;
    };
    stack.isEmpty = function(){
      if(stack.size == 0){
        return true;
      }
      else{
        return false;
      }
    };
    stack.peek = function(){
      return stack.top.element
    };

      return stack;
  };
  var stack = new createStack();
  var log = ""
  $('#pushButton').click(function(){
    var input = $('#inputNumber').val();
    if(input !=""){
      stack.push(input);
    $('#showStack').val(stack.toString());
    $('#showLog').val(input +" "+ $('#infoPush').html() +"\n" + $('#showLog').val());
    }
    else{
    $('#showLog').val($('#infoPushError').html()+"\n" + $('#showLog').val());
    }
    });
  $('#popButton').click(function(){
    console.log("Stack size: " + stack.size);
    if(stack.isEmpty()){
    $('#showLog').val($('#infoPopError').html() +"\n" + $('#showLog').val());
    }else{
    var result = stack.pop();
    console.log((stack.toString()))
    $('#showLog').val(result + " " +$('#infoPop').html() +"\n" + $('#showLog').val());
    $('#showStack').val(stack.toString());
  }
  });
  $('#peekButton').click(function(){
    if (stack.isEmpty()){
      $('#showLog').val("You cannot peek from an empty stack.\n" + $('#showLog').val());
    }else{
      $('#showLog').val(" The top of the stack is: " + stack.peek() +"\n" + $('#showLog').val());
    }
  });
  $('#sizeButton').click(function(){
    $('#showLog').val("Stack size: " + stack.size + "\n" + $('#showLog').val());
  });
  $('#isEmptyButton').click(function(){
    if(stack.isEmpty()){
      $('#showLog').val("The stack is empty.\n" + $('#showLog').val());
    }else{
        $('#showLog').val("The stack is not empty.\n" + $('#showLog').val());
    }
  });
  $('#clearStack').click(function(){
    stack = new createStack();
    $('#showStack').val(stack.toString());
    $('#showLog').val("The stack has been cleared!");
  });
  $('#clearLog').click(function(){
    $('#showLog').val("");
  });
//short cut key actions below -----------------

$(document).keydown(function(e){
  var keyCode = e.keyCode || e.which || e.charCode;
  var controlKey = e.ctrlKey || e.mataKey;
  switch(keyCode){
    case 85:
      if(e.altKey){
        $('#pushButton').click();
      }
      e.preventDefault;
      return false;
      case 79:
        if(e.altKey){
          $('#popButton').click();
        }
        e.preventDefault;
        return false;
      case 69:
        if(e.altKey){
          $('#peekButton').click();
        }
        e.preventDefault;
        return false;
      case 83:
        if(e.altKey){
          $('#sizeButton').click();
        }
        e.preventDefault;
        return false;
        //is empty
      case 77:
        if(e.altKey){
          $('#isEmptyButton').click();
        }
        e.preventDefault;
        return false;
        //clear stack
        case 67:
          if(e.altKey && controlKey){
            $('#clearStack').click();
          }
          else if(e.altKey){
            $('#clearLog').click();
          }
          e.preventDefault;
          return false;
  }
});//close keydown
