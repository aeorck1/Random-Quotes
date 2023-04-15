

const quote=document.getElementById("quoter");
const author=document.getElementById("author");

const quotes_authors={
    quote: "Die if you give up, live when you don\'t",
    author: "Joe Brown"
}

function quote_gen() {
quote.innerHTML=quotes_authors.quote
author.innerHTML=quotes_authors.author    
}