const quotes = [
  {
    quote: "Remember you’re the one who can fill the world with sunshine.",
    author: "Snow White",
  },
  {
    quote: "To love someone, you have to love yourself first.",
    author: "The beauty and the beast",
  },
  {
    quote: "Today's special moments are tomorrow's memories.",
    author: "Aladdin",
  },
  {
    quote: "Prove you are the best.",
    author: "Monster Inc.",
  },
  {
    quote: "I will decide how I feel, I will be happy today.",
    author: "Alice in Wonderland",
  },
  {
    quote: "A true friend looks at the tears hidden in forced smile.",
    author: "Winne the Pooh",
  },
  {
    quote:
      "Success is not givin for free. You have to be able to do anything for your goal.",
    author: "Coco",
  },
  {
    quote: "Don't think and don't worry. If the time comes, you'll what to do.",
    author: "The Incredibles",
  },
  {
    quote:
      "You are braver than you believe, smarter than you seem, and stronger than you think.",
    author: "Winne the Pooh",
  },
  {
    quote:
      "You are a very loving person and your life will be filled with romance.",
    author: "The Charlie Brown and Snoopy",
  },
  {
    quote:
      "You're the one who does it, show it to me. To those who believe in you and to yourself.",
    author: "The Charlie Brown and Snoopy",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
