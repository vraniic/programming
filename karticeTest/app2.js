let counter = 1;


function display() {
  //Assigning the variable to the user input
  var userName = document.getElementById("userName").value;
  var lastname = document.getElementById("lastname").value;
  var age = document.getElementById("age").value;



  // to print the input here
  // document.getElementById("printhere").innerHTML = userName;
  // document.getElementById("1lastname").innerHTML = lastname;
  // document.getElementById("1age").innerHTML = age;


  // making new div
  makeNewDiv(userName, lastname, age, counter)

  // clear inputs
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "";
  });
    
}

function makeNewDiv(ime, prezime, godine) {
  const div = document.createElement("div");

  // giving div random color
  var makingColorCode = '0123456789ABCDEF';
  var finalCode = '#';
  for (var i = 0; i < 6; i++) {
     finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  }
  div.style.backgroundColor = finalCode



  const nameP = document.createElement("p");

  const lastnameP = document.createElement('p')

  const ageP = document.createElement('p')



  const tekstIme = document.createTextNode(ime);
  const tekstPrezime = document.createTextNode(prezime);
  const tekstGodine = document.createTextNode(godine);

  div.appendChild(nameP).appendChild(tekstIme);
  div.appendChild(lastnameP).appendChild(tekstPrezime);
  div.appendChild(ageP).appendChild(tekstGodine);

  document.getElementById('card-container').appendChild(div)
}

function changeDivColor(broj) {
  var makingColorCode = '0123456789ABCDEF';
  var finalCode = '#';
  for (var i = 0; i < 6; i++) {
     finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  }
  document.querySelector('div').style.backgroundColor = finalCode
}


function changeOpacity(val) {
  let div = document.getElementById('card-container')
  div.style.opacity = val
}