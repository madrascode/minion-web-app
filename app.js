// // input 
// var username = prompt('Give me username')

// // processing
// var welcomeMessage = 'this script works!!' + username

// // output
// alert(welcomeMessage)


var btnClicked = document.querySelector('#btn-translate')
var textInput = document.querySelector(".text-input");

console.log(textInput)
function btnKliked(){
    console.log('clicked!')
    console.log("input",textInput.value)
}

btnClicked.addEventListener('click', btnKliked)