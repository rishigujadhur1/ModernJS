const author = document.querySelector("#author");
const quote = document.querySelector(".blockquote");

async function GetQuote() {
  debugger;
  const response = await fetch("http://api.quotable.io/random");
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
GetQuote();

const btn1 = document.querySelector(".btn");
btn1.addEventListener("click", () => {
  GetQuote();
});
