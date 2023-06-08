/*will go to the designated page*/
function goToPage(pageId) {
    // Redirect to the appropriate page
    window.location.href = `${pageId}.html`;
    }

/*will go to previous page*/
function goBack() {
window.history.back();
}

//an alert if u submitted
function showNotificationAndRedirect() {
    var name = document.getElementById('name').value;
    alert('Thank you for submitting the form, ' + name + '!');
    goToPage('submit');
}

// go to main page if reloaded
window.onbeforeunload = function() {
    goToPage('index.html');
}

function goToPage(pageId) {
    // Redirect to the appropriate page
    window.location.href = `${pageId}.html`;
}

//loading screen
document.addEventListener("DOMContentLoaded", function () {
    var loadingScreen = document.getElementById("loading-screen");

    // Show loading screen initially
    loadingScreen.style.display = "flex";

    // Redirect to the main page after 6 seconds
    setTimeout(function () {
        window.location.href = "index.html";
    }, 6000);
});
