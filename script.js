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


