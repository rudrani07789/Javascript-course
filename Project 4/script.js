let random=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guessField')
const guesses=document.querySelector('.guesses')
const result=document.querySelector('.lastResult')
const lowehigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')
let preguess=[]
let numguess=1
let playgame=true
 

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuesss(guess);
    })
}
function validateGuesss(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
       alert('Please enter a valid number') 

    }
    else if(guess>100){
        alert('Please enter a number more than 100')
    } else{
        preguess.push(guess)
        if(numguess===11){
            displayGuess(guess)
            displayMessage(`Game Over, Random was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===random){
      displayMessage(`You guessed`)
      endGame()
    } else if(guess<random){
        displayMessage('Number is Too low')
    }else if(guess>random){
        displayMessage(`Number is TOO high`)
    }

}

function displayGuess(guess){
     userInput.value=''
     guesses.innerHTML+=`${guess} `
     numguess++;
     result.innerHTML=`${11-numguess}`


}

function displayMessage(message){
    lowehigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame>Start new Game</h2>`
    startOver.appendChild(p)
    playgame=false
    newGame()
}

function newGame(){
   const newGame=document.querySelector('#newGame')
   newGame.addEventListener('click',function(){
    random=parseInt(Math.random()*100+1);
    preguess=[]
    numguess=1
    guesses.innerHTML=''
    result.innerHTML=`${11-numguess} `;
    userInput.removeAttribute('disabled')
    startOver.replaceChild(p)
    
    playgame=true
   })
}

