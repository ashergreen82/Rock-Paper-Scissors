// game initilization.  Set the scores to 0.  I had to place the "Select: Rock, Paper, scissors", to give instructgion to the user, but also because
// I didn't like how the screen jumped each time the use started the game to insert the results.  So it is also being used as a place holder.
// Also notice that I have written this code to use functions as much as possible, even if it is only one line.  I am working to build this as a habit as I understand
// this to be good coding practice.
let computer_score = 0
let user_score = 0
document.getElementById("display_who_wins").innerHTML = "Select: Rock, Paper, Scissors";
display_the_score();

// My event lisetners, one for each image.  The mouse hover was best done using CSS instead of trying to use the event listener.
// When using event listeners, the function needed has to be called without () as it automaticaly passes the event listener information over to the fucntion call.
// Using a lambda function is possible with this format: const rock_was_selected.addEventListner("click", function(e) { .. }.
// It is possible to pass another fucntion within the lambda function.
const rock_was_selected = document.getElementById("rock");
rock_was_selected.addEventListener("click", game_logic);

const paper_was_selected = document.getElementById("paper");
paper_was_selected.addEventListener("click", game_logic);

const scissors_was_selected = document.getElementById("scissors");
scissors_was_selected.addEventListener("click", game_logic);

// And the game logic is over here.
function game_logic(element) {
    display_the_score();
    let computer_choice = computer_makes_a_choice()
    image_selected = element.target.id;
    if (image_selected == computer_choice) {
        tie();
    }
    if (image_selected == "rock") {
        if (computer_choice == "paper") {
            user_loses();
        } else if (computer_choice == "scissors") {
            user_wins();
        }
    }

    if (image_selected == "paper") {
        if (computer_choice == "scissors") {
            user_loses();
        } else if (computer_choice == "rock") {
            user_wins();
        }
    }

    if (image_selected == "scissors") {
        if (computer_choice == "rock") {
            user_loses();
        } else if (computer_choice == "paper") {
            user_wins();
        }

    }
    function tie() {
        document.getElementById("display_who_wins").innerHTML = "It's a tie!  No points scored.";
    }

    function user_wins() {
        document.getElementById("display_who_wins").innerHTML = `You win!! Computer chose ${computer_choice}!`;
        user_score += 1;
    }

    function user_loses() {
        document.getElementById("display_who_wins").innerHTML = `You lose!! Computer chose ${computer_choice}!`;
        computer_score += 1;
    }

    //This is the routine where the computer makes it's choice.
    function computer_makes_a_choice() {
        generate_random_number = Math.floor((Math.random() * 3) + 1);
        if (generate_random_number == 1) {
            return "rock";
        } else if (generate_random_number == 2) {
            return "paper";
        } else if (generate_random_number == 3) {
            return "scissors";
        }
    }
}
function display_the_score() {
    document.getElementById("current_score").innerHTML = `User ${user_score} | Computer ${computer_score}`;
}