// My event lisetners, one for each image.  The mouse hover was best done using CSS instead of trying to use the event listener.
const rock_was_selected = document.getElementById("rock");
rock_was_selected.addEventListener("click", game_logic);

const paper_was_selected = document.getElementById("paper");
paper_was_selected.addEventListener("click", game_logic);

const scissors_was_selected = document.getElementById("scissors");
scissors_was_selected.addEventListener("click", game_logic);

// And the game logic is over here.
function game_logic(element) {
    let computer_choice = computer_makes_a_choice()
    // console.log(computer_choice);
    // computer_choice = "paper"
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
        // document.getElementById("display_who_wins").innerHTML = "A Rock was selected";
    }

    if (image_selected == "paper") {
        if (computer_choice == "scissors") {
            user_loses();
        } else if (computer_choice == "rock") {
            user_wins();
        }
        // document.getElementById("display_who_wins").innerHTML = "Paper was selected";
    }

    if (image_selected == "scissors") {
        if (computer_choice == "rock") {
            user_loses();
        } else if (computer_choice == "paper") {
            user_wins();
        }
        // document.getElementById("display_who_wins").innerHTML = "Scissors was selected";
    }
    function tie() {
        document.getElementById("display_who_wins").innerHTML = "It's a tie!  No points scored.";
    }

    function user_wins() {
        document.getElementById("display_who_wins").innerHTML = `You win!! Computer chose ${computer_choice}!`;
    }

    function user_loses() {
        document.getElementById("display_who_wins").innerHTML = `You lose!! Computer chose ${computer_choice}!`;
    }
    //This is the routine where the comptuer makes it's choice.
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