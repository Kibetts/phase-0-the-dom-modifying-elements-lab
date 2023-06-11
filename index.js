
var main = document.getElementById("main");
main.parentNode.removeChild(main);


var newHeader = document.createElement("h1");


newHeader.id = "victory";


newHeader.textContent = "Brian is the champion";

document.body.appendChild(newHeader);