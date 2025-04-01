
document.getElementById("check").addEventListener("click", function (event) {
    event.preventDefault();
    const load = document.getElementById("load");
    const text = document.getElementById('text');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    load.style.display = 'block';
    
    const loadingTexts = [
        "Consulting with AI weather gods...",
        "Analyzing cloud patterns...",
        "Checking wind direction...",
        "Processing meteorological data...",
        "Almost there..."
    ];
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 20;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            text.innerText = "Analysis Complete!";
        }
    }, 1000);
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
        text.innerText = loadingTexts[textIndex];
        textIndex = (textIndex + 1) % loadingTexts.length;
    }, 1200);
    
    setTimeout(function () {
        clearInterval(textInterval);
        clearInterval(progressInterval);
        showCustomAlert("April Fools! 🎭\nWeather prediction: ⭐100% chance of laughter!⭐");
    }, 6000);
});

function showCustomAlert(message, isSecondMessage = false) {
    document.getElementById('alert-message').textContent = message;
    document.getElementById('custom-alert').classList.add('show');
    
    // If it's not the second message, set up the next message
    if (!isSecondMessage) {
        const okButton = document.querySelector('.alert-content button');
        okButton.onclick = function() {
            closeAlert();
            setTimeout(() => {
                showCustomAlert("Just kidding! This is an April Fools' weather app to make you Smile 😂\n So Smile and be happy 😄 ", true);
            }, 100);
        };
    } else {
        // For the second message, just close the alert
        const okButton = document.querySelector('.alert-content button');
        okButton.onclick = closeAlert;
    }
}

function closeAlert() {
    document.getElementById('custom-alert').classList.remove('show');
}
