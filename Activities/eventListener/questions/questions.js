//What is the output of this code?
// Q1
function showMessage() {
  console.log("Button clicked!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  showMessage();
});
