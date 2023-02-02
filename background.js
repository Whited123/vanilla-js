const images = ["0.jpg", "1.jpg", "2.jpg"];

const chooseimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chooseimage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
