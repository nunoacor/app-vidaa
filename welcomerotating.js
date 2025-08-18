// This code is by AI

const lines = [
    "app store for Vidaa OS TVs",
    "best way to install apps on old Hisense TVs",
    "you can also request new apps in github issues using an app URL"
];

const h2 = document.getElementById("rotating-text");
let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 50; // milliseconds per character
let pauseBetweenLines = 2000; // pause after line is typed

function typeLine() {
    if (charIndex < lines[lineIndex].length) {
        h2.textContent += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        // Line finished, pause, then erase
        setTimeout(eraseLine, pauseBetweenLines);
    }
}

function eraseLine() {
    if (charIndex > 0) {
        h2.textContent = lines[lineIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseLine, typingSpeed / 2);
    } else {
        // Move to next line
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(typeLine, typingSpeed);
    }
}

// Start typing
typeLine();
