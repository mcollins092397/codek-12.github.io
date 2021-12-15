var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
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