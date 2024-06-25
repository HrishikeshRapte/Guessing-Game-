let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');
let fireBtn = document.querySelector('btn');

let answer = Math.floor(Math.random()*100)+1; //used for random appearing no.s
console.log(answer);

let numGuesses = 0;

btn.addEventListener("click", ()=>{
    guessesNumber();
})

function guessesNumber(){
    if (input.value < 1 || input.value > 100 || isNaN(input.value))
        wrng.innerHTML = "Enter Between 1 to 100";

    else{
        numGuesses ++;
        guesses.innerHTML = "No. of Guess: "+numGuesses;
        if(input.value > answer){
            wrng.innerHTML= "You Guessed too High!";
            input.value=""
        }
        else if(input.value < answer){
            wrng.innerHTML= "You Gueessed too Low!";
        }

        else{
            wrng.innerHTML= "Congratulations You Guessed correct answer";
            setTimeout(()=>{
                resetGame();
                confetti({
                    particleCount: 300,
                    spread: 90,
                    origin: { x: 1, y:0.9 },
                  });
        
                confetti({
                    particleCount: 300,
                    spread: 90,
                    origin: { x: 0, y:0.9 },
                  });  

                  
            },500)
        }
    }    
}

function resetGame(){
    numGuesses =0;
    answer= Math.floor(Math.random()*100)+1;
    input.value= "";
    guesses.innerHTML= "No. of Guess: 0";

}


