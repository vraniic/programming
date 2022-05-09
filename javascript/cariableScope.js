let firstName = 'David'

function accessGlobalScope () {
    firstName = 'the name has been changed'
}

function localVariableFucntion () {
    var lastName;

    lastName = 'this variable is local'
}

function leakingVariable() {
    notPreviouslyDefinedVar = 'this is my Value'
}