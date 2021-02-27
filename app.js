// // input 
// var username = prompt('Give me username')

// // processing
// var welcomeMessage = 'this script works!!' + username

// // output
// alert(welcomeMessage)


var btnClicked = document.querySelector('.btn-primary')
var textInput = document.querySelector("textarea");
// var inputTranslator = document.querySelector('[name="translator"]');

var resultdivOutput = document.querySelector('.output')

// resultdivOutput.innerText = "hello"

console.log(textInput)

function btnKliked(){
    console.log('clicked!')
    console.log("input",textInput.value)
    resultdivOutput.innerText = textInput.value
}

btnClicked.addEventListener('click', btnKliked)