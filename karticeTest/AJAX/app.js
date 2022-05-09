let pageCounter = 1 
let animaContainer = document.getElementById('animal-info')
let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    let ourRequest = new XMLHttpRequest()
    ourRequest.responseText('GET', 'https://learnwebcode.github.io/json-example/animals-')
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText)
        renderHTML(ourData)

    }
})


ourRequest.onerror = function () {
    console.log('connection error')

}

ourRequest.send()
pageCounter++
if (pageCounter > 3) {
    btn.classList.add('hide-me')
}


// AKO ZELIMO DA SKARIJEMO NEKI ELEMENT ILI DA MU BILO STA URADIMO POSLE ODREDJENOG BROJA ITERACIJA - NAJLAKSI NACIN ZA TO JE :
// DA MU SE DODA NOVA KLASA KOJA CE BITI PREWRITTEN U CSSU I RADICE ONO STO MI ZELIMO  mpr:

// Ukoliko zelim da sakrijemo neki element posle 3 iteracije mozem oda stavimo id (i > 3) {
// div.classList.add('sakriti-element')
// }

// style 
// .sakriti-element {
//  
// }