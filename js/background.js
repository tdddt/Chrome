const images = ["0.jpg", "1.jpeg", "2.jpg"];

const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImg}`;
document.body.appendChild(bgImage);