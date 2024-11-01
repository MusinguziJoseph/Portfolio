// JavaScript for  animations
const words = ["Network Specialist", "Web Developer", "Machine Learning Developer", "Mobile App Developer", "Graphic Designer", "Data Analyst"];
let wordIndex = 0;

function changeWord() {
    const slidingText = document.getElementById("sliding-text");
    slidingText.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

// Change word every 2 seconds
setInterval(changeWord, 2000);
