
chrome.runtime.onInstalled.addListener(() => {
    console.log('Sarcasm Detection Extension Installed!');
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: selectText
    });
});

function selectText() {
    document.addEventListener('mouseup', () => {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            chrome.runtime.sendMessage({ action: "selectText", text: selectedText });
        }
    });
}
