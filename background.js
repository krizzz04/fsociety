chrome.extension.onRequest.addListener(function(prediction) {
    let message = "";

    if (prediction == 1) {
        message = "Warning: Phishing detected!!";
    } else if (prediction == -1) {
        message = "No phishing detected";
    }

    // Send message to content script to show custom alert
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: message, isPhishing: prediction == 1 });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.enableVPN) {
        console.log("VPN is enabled");
        // Logic to enable VPN here
    } else {
        console.log("VPN is disabled");
        // Logic to disable VPN here
    }
});

