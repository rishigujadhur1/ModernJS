const api_url = "http://api.quotable.io/random";
const author = document.querySelector("#author");
const quote = document.querySelector(".blockquote");

async function GetQuote()  {
    const response = await fetch("http://api.quotable.io/random");
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
};
GetQuote();