// My event lisetners, one for each image.  The mouse hover was best done using CSS instead of trying to use the event listener.
const rock_was_selected = document.getElementById("rock");
rock_was_selected.addEventListener("click", game_logic);

const paper_was_selected = document.getElementById("paper");
paper_was_selected.addEventListener("click", game_logic);

const scissors_was_selected = document.getElementById("scissors");
scissors_was_selected.addEventListener("click", game_logic);

// And the game logic is over here.
function game_logic(element) {
    console.log("Game Logic Executed");
    console.log(`${element.target.id} was clicked`);
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

};