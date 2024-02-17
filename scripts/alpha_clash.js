// function play(){
//     //Frist hide the home screen       .to hide the screen add the class hidden to the home section
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //second show the playground 
//    const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
//    console.log(playGroundSection.classList);
// }

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

