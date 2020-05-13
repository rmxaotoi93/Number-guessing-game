// 1. computer need to pick a random number
let history = []
let guessRemain = 3;
// 2. when user click the guess , it will fire the function "guess"
function guessNumber(){
     // 3. grab the value that user typed
     
    const randomNum = Math.floor(Math.random() * 100) +1
    let userGuess = document.getElementById("user-guess").value
    let resultMessage = '';
    
    // Check if userGuess is already in history
    if(history.includes(userGuess)){
        document.getElementById("resultArea").innerHTML = `Try another number`;
    } else {
    
        // 4. compare with the value computer picked with user value
        // 5. if computer number > user num, "too low"
            if(userGuess < randomNum){
                resultMessage = 'too low';
            }
            // 6. if computer number < user num, "too high"
            else if(userGuess > randomNum){
                resultMessage = 'too high';
            }
            // 7. if computer number === user num, "correct"
            else if(userGuess == randomNum){
                resultMessage = 'correct';
            }
            
        guessRemain--;
        document.getElementById("user-guess").value = '';
        document.getElementById("guesses-remaining").innerHTML = `Remaining Guess: ${guessRemain}`
        if(guessRemain == 0){
            
            resultMessage = 'Out of guess';
            document.getElementById("guessButton").disabled = true
        }
        
        // keep history 
        history.push(userGuess)
        // 8. show the result to user 
        document.getElementById("resultArea").innerHTML = `${resultMessage}`
        document.getElementById("hisArea").innerHTML = `History number: ${history}`
    }
}

function reset(){


    // 1.delelte the user guess first

    // 2.restart the guess button
    document.getElementById("guessButton").disabled = false
    guessRemain = 3;
    document.getElementById("guesses-remaining").innerHTML = `Remaining Guess: ${guessRemain}`
    history = []
    document.getElementById("hisArea").innerHTML = `History number: ${history}`
    let resultMessage = '';
    document.getElementById("resultArea").innerHTML = `${resultMessage}`;
}
