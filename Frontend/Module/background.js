chrome.extension.onRequest.addListener(function(prediction) {
    if (prediction == 1) {
        alert("Warning: Phishing link detected!!");
    } else if (prediction == -1) {
        alert("Safe to Use");
    }
});