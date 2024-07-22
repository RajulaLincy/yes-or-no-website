let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let noTexts = [
    "Oh, come on!",
    "Really? Try again!",
    "You're not serious, right?",
    "This isn't rocket science!",
    "Who hurt you?",
    "You can't be serious!",
    "You must be joking!",
    "Are you for real?",
    "Don't be that guy!",
    "Give it a shot!",
    "Live a little!",
    "Make up your mind!",
    "Just say yes!",
    "What are you afraid of?",
    "You're missing out!",
    "Seriously, just do it!",
    "Be a hero!",
    "Take the plunge!",
    "Do it for the memes!",
    "Don't overthink it!"
];
let noClickCount = 0;

function handleYes() {
    document.body.innerHTML = '<h1>Success!</h1>';
}

function handleNo() {
    noClickCount++;
    if (noClickCount < noTexts.length) {
        noButton.textContent = noTexts[noClickCount];
    } else {
        noButton.textContent = "Come on, just say yes!";
    }
    yesButton.style.fontSize = `${16 + noClickCount * 2}px`;
}
