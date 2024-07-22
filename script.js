let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let noTexts = ["Are you sure?", "Really?", "Think again!", "Still No?", "Come on!", "Last chance!"];
let noClickCount = 0;

function handleYes() {
    document.body.innerHTML = '<h1>Success!</h1>';
}

function handleNo() {
    noClickCount++;
    if (noClickCount < noTexts.length) {
        noButton.textContent = noTexts[noClickCount];
    } else {
        noButton.textContent = "Seriously?";
    }
    yesButton.style.fontSize = `${16 + noClickCount * 2}px`;
}
