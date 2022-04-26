var myArray = []

var webCategories = ['front end developer', 'backend developer', 'fullstack developer']

var myObject = {
    name: 'David'
}

var numericValue = 10
var mixedArray = [ numericValue, 'im a string', true, myObject ]

mixedArray[3].name = 'john'
mixedArray[0] = 20

webCategories.concat( mixedArray )

mixedArray.indexOf(true)

mixedArray.push('another string')
 
mixedArray.pop()

mixedArray.shift()

var uppercaseCategories = []

function uppercaseElement(element, index, array) {
    uppercaseCategories.push( element.toUpperCase())
}

webCategories.forEach(uppercaseElement)


console.log(webCategories)

// ??