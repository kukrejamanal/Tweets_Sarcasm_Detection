
document.getElementById('analyzeButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value.trim();
    const resultCard = document.getElementById('resultCard');
    const resultText = document.getElementById('resultText');

    if (!inputText) {
        alert('Please enter some text to analyze.');
        return;
    }

    // Mock detection result for demo
    const isSarcastic = Math.random() > 0.5;
    resultText.textContent = isSarcastic ? 
        'Sarcasm detected! 🌀' : 
        'No sarcasm detected. 😊';
    resultCard.classList.remove('d-none');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "selectText") {
        document.getElementById('inputText').value = message.text;
    }
});
