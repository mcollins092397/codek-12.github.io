var submitAnswerL1E1 = function() {

  var radios = document.getElementsByName('choiceL1E1');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Correct" ) {
    alert('Answer is correct !');
  } else if (val == "Missing Public and Class") {
    alert('That is incorrect, remember that we need to include "public class" before the class name');
  }
	else if (val == "Missing Public") {
    alert('That is incorrect, remember that we need to include "public class" before the class name');
  }
	else if (val == "Missing Curly Brackets") {
    alert("That is incorrect, remember that we need to include curly brackets {} after the class declaration to make it's body");
  }
};

var submitAnswerL1E2 = function() {

  var radios = document.getElementsByName('choiceL1E2');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Correct" ) {
    alert('Answer is correct !');
  } else if (val == "Missing String") {
    alert('While this is a correct way to declare a method it is incorrect for the main method. The main method must include (String[] args)');
  }
	else if (val == "Incorrect Declaration") {
    alert('That is incorrect, remember that the main method is declared differently than a class. It is declared using public static void main(String[] args) followed by its body');
  }
	else if (val == "Missing Curly Brackets") {
    alert("That is incorrect, remember that we need to include curly brackets {} after the main declaration to make it's body");
  }
};