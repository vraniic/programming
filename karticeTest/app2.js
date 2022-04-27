function display() {
  //Assigning the variable to the user input
  var userName = document.getElementById("userName").value;
  var lastname = document.getElementById("lastname").value;
  var age = document.getElementById("age").value;

  // to print the input here
  document.getElementById("printhere").innerHTML = userName;
  document.getElementById("1lastname").innerHTML = lastname;
  document.getElementById("1age").innerHTML = age;

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "";
  });
}

function makeNewDiv() {
  const div = document.createElement("div");

  const p = document.createElement("p");


  const tekst = document.createTextNode("TESKT");

  div.appendChild(p).appendChild(tekst);

  document.querySelector('body').append
}
