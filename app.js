// input 
// var username = prompt('Give me username')

// processing
// var welcomeMessage = 'this script works!!' + username

// output
// alert(welcomeMessage)


var btnClicked = document.querySelector('.btn-primary')
var textInput = document.querySelector("textarea");
// var inputTranslator = document.querySelector('[name="translator"]');
var resultdivOutput = document.querySelector('.output')
//  -------minion
// "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// https://api.funtranslations.com/translate/ferb-latin.json
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text) {
    return serverUrl + "?" + 'text=' + text
}

function errorHandler(error) {
    console.log('Error Occured', error);
    alert("Error Occured try again after some time!")
}


// resultdivOutput.innerText = "hello"
// console.log(textInput)

function btnKliked() {

    var inputText = textInput.value

    fetch(constructUrl(inputText)).then(response => response.json()).then(json =>
        resultdivOutput.innerText = json.contents.translated)
        .catch(errorHandler)
    // console.log('clicked!')
    // console.log("input",textInput.value)
    // resultdivOutput.innerText = textInput.value
    // console.log(constructUrl('Jello'));

}

btnClicked.addEventListener('click', btnKliked)