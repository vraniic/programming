let person =[{
nameValue: document.getElementById('nameElement').value,
lastnameValue: document.getElementById('lastnameElement').value,
sexValue: document.getElementById('sexElement').value
}]



// person.push({
//     nameValue: document.getElementById('nameElement').value,
//     lastnameValue: document.getElementById('lastnameElement').value,
//     sexValue: document.getElementById('sexElement').value
// })




// function createPerson(ime, prezime, pol) {
//     person.nameValue = document.getElementById('domNameElement').value
//     person.lastnameValue = document.getElementById('domLastnameElement').value
//     person.sexValue = document.getElementById('domSexElement').value

//     document.getElementById('name').innerHTML = nameValue
//     document.getElementById('lastname').innerHTML = lastnameValue
//     document.getElementById('sex').innerHTML = sexValue
// }

function createPerson () {
    const div = document.createElement('div')

    const divKontent = document.createTextNode(person)

    div.appendChild(divKontent)

    document.querySelector('body').appendChild(div)
    person = {}
}