/***** Accordian - Use of Jquery UI*******/


var acc = document.getElementsByClassName("accordion");         //Used getElementByClassName()
var j;

for (j = 0; j < acc.length; j++) {                              //Use of for Loop
  acc[j].addEventListener("click", function() {                 // Use of addEventListener() Method
    this.classList.toggle("active");                            // Use of 'this' Keyword
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {                      // Use of if else loop
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

_newElement.onclick = newElement;                               // Added on click event