var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var target;
var finished = false;
var guess_input;
var guesses = 0;

function check_guess() {
    if (colors.indexOf(guess_input) === -1) {
        alert("I don't recognize that color!");
        return false;
    }
    if (guess_input > target) {
        alert("Your input is alphabetically higher than mine!");
        return false;
    }
    if (guess_input < target) {
        alert("Your input is alphabetically lower than mine!");
        return false;
    }
    var myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;
    alert("Congratulations! You have guessed the color!\n\n" +
        "It took you " + guesses + " to finish the game!\n\n" +
        "You can see the color in the background.");
    return true;
}

function do_game() {
    var random_number = Math.random() * colors.length;
    random_number = Math.floor(random_number);
    target = colors[random_number];
    alert(target);
    while (!finished) {
        guess_input = prompt("I am thinking of one of these colors:\n\n" +
                            "blue, cyan, gold, gray, green, magenta, orange, red, white, yellow\n\n" +
                            "What color am I thinking of?");
        guesses++;
        finished = check_guess();
    }
}