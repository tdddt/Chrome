const quotes = [{
    quote:"Life can only be understood backwards; but it must be lived forwards.",
    author:"Soren Kierkegaard",
}, {
    quote: "Be brave. Take risks. Nothing can substitute experience.",
    author:"Paulo Coelho",
}, {
    quote: "Life is the art of drawing without an eraser.",
    author:"John W. Gardner",
}, {
    quote: "If you change the way you look at things, the things you looks at change.",
    author:"Wayne Dyer",
}, {
    quote: "The only true wisdom is in knowing you know nothing.",
    author:"Socrates",
}, {
    quote: "Yesterday is history, tomorrow is a mystery, today is God's gift, that's why we call it the present.",
    author:"Joan Rivers",
}, {
    quote: "Try before regret.",
    author:"unknown",
}, {
    quote: "Dream as if you'll live forever. Live as if you'll die today.",
    author:"James Dean",
}, {
    quote:"A positive attitude can really make dreams come true - it did for me.",
    author: "David Bailey",
}, {
    quote:"Acting is magical. Change your look and your attitude, and you can be anyone.",
    author:"Alicia Witt",
},
]; //array including objects

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;