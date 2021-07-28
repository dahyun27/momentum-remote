const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImageContainer = document.createElement("div");
bgImageContainer.className = "img__container";

const bgImage = document.createElement("img");

bgImageContainer.appendChild(bgImage);

bgImage.src = `./img/${chosenImage}`;

document.body.prepend(bgImageContainer);
