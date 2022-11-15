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
    console.log(computer_choice);
    image_selected = element.target.id;
    if (image_selected == "rock") {
        document.getElementById("test").innerHTML = "A Rock was selected";
    }

    if (image_selected == "paper") {
        document.getElementById("test").innerHTML = "Paper was selected";
    }

    if (image_selected == "scissors") {
        document.getElementById("test").innerHTML = "Scissors was selected";
    }

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