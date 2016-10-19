//The psychic game//
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
              "m", "n","o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", 
              "z"
];


var wins = 0;
var losses = 0;
var yourGuesses = [];
var guessesLeft = 10;
var alphaExp = /^[a-zA-Z]+$/;

//Computer randomly chooses a letter 
var computerChoice = letter[Math.floor(Math.random() * letter.length)];
console.log(computerChoice);



document.onkeyup = function(event) {
        var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
        //If player chooses the right letter 
        if (userChoice.match(alphaExp)) {
        
        //If player picks somthing other than letters alert 
        } else {
            alert("Please enter only letters");
        }
        
        yourGuesses.push(userChoice);
        document.getElementById("yourGuesses").innerHTML += " " + userChoice;

        if (userChoice === computerChoice) {
            wins++;
            alert("You win!")
            var winDiv = document.getElementById("win");
            winDiv.innerHTML = "wins: " + wins;

        } else {
            losses++;
            var loseDiv = document.getElementById("losses")
            loseDiv.innerHTML = "losses: " + losses;
            --guessesLeft;
            var guessesLeftDiv = document.getElementById("guessesLeft")
            guessesLeftDiv.innerHTML = "Guesses Left: " + guessesLeft;
        }

        if (guessesLeft <= 0) {
            alert("You lose!");
        }



}
    

