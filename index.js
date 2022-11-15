// document.addEventListener("click", function (event) {
//     console.log(event);
// })

let rock_was_clicked;
let paper_was_clicked;
let scissors_was_clicked;
const rock_was_selected = document.getElementById("rock");
// rock_was_selected.addEventListener("mouseover", function (e) {
//     console.log(e.type)
//     console.log(e);
// });
rock_was_selected.addEventListener("click", function (e) {
    // rock_was_clicked = e.target.innerHTML;
    test(e.target.id);
    console.log("clicked");
    // console.log(e.type);
    // console.log(e);
    // console.log(rock_was_selected);
    // console.log(rock_was_clicked);
});
const paper_was_selected = document.getElementById("paper");
// paper_was_selected.addEventListener("mouseover", function (e) {
//     console.log(e.type)
//     console.log(e);
// });
paper_was_selected.addEventListener("click", function (e) {
    test(e.target.id);
    paper_was_clicked = e.target.innerHTML;
    console.log(e.type);
    console.log(e);
    console.log(paper_was_selected);
    console.log(paper_was_clicked);
});
const scissors_was_selected = document.getElementById("scissors");
// scissors_was_selected.addEventListener("mouseover", function (e) {
//     console.log(e.type)
//     console.log(e);
// });
scissors_was_selected.addEventListener("click", function (e) {
    test(e.target.id);
    scissors_was_clicked = e.target.innerHTML;
    console.log(e.type);
    console.log(e);
    console.log(scissors_was_selected);
    console.log(scissors_was_clicked);
});

function test(element) {
    console.log(`${element} was clicked`);
    // document.getElementById("test").innerHTML = "A Rock was selected";
};