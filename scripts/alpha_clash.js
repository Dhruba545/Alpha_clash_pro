// function play(){
//     //Frist hide the home screen       .to hide the screen add the class hidden to the home section
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //second show the playground 
//    const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
//    console.log(playGroundSection.classList);
// }

function handleKeyboardButtonPress(event){
    const playerPress = event.key;

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress , expectedAlphabet);

     // check matched or not 
     if(playerPress === expectedAlphabet){
       removeBackgroundColorById(expectedAlphabet);
        continueGame();
     }
     else{
        console.log('Not matched');
     }
}
document.addEventListener('keyup' , handleKeyboardButtonPress)


function continueGame(){
  //Step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your random Alphabet' , alphabet);
    // set randomly generated alphabet to the  screen  
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet ;

    //set background color 
    setBackgroundColorById(alphabet);
    
}

function setBackgroundColorById(elementId){
const element = document.getElementById(elementId);
element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function play(){
   hiddenElementByid('home-screen');
   showElementById('play-ground');
   continueGame()
}

function getRandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const index = Math.round(Math.random()*25);
    const alphabet = alphabets[index];
    return alphabet;


}
function score(){
    hiddenElementByid('play-ground');
    showElementById('last');
}

