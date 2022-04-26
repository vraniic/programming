let prvi = document.getElementById("prvi");
prvi.style.backgroundColor = "red";

let bezDekoracije = document.querySelector("a");
bezDekoracije.style.textDecoration = "none";

let lista = document.getElementById("lista");
lista.style.listStyle = "none";

document.getElementById('druga').innerHTML = "treca lista";

// pomocu siblinga
let trecaLista = (document.getElementById(
  "druga"
).nextElementSibling.style.listStyle = "none");


// appendChild
function dodavanjeChilda () {
const novaLista = document.createElement('li')

const tekstNoveListe = document.createTextNode('cedevita')

novaLista.appendChild(tekstNoveListe)

document.getElementById('oLista').appendChild(novaLista)
}



let divDugmici = document.getElementById('dugmici')

function topMargin () {
    divDugmici.style.margin = '50px'
}

function obrisatiElement () {
    const dugmePet = document.getElementById('dugmePet')
    dugmePet.remove()
}



let kartica = document.getElementById("kartica");
let imeKartica = document.getElementById('imeKartica');
let prezimeKartica = document.getElementById('prezimeKartica');
let polKartica = document.getElementById('polKartica');


function getFormvalue() {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
    imeKartica.innerHTML = `${x.elements[0].value}`
    prezimeKartica.innerHTML = `${x.elements[1].value}`
    }}
  }





