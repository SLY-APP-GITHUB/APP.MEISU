function openAdminForm() {
    document.getElementById("adminLoginForm").style.display = "block";
}

function closeAdminForm() {
    document.getElementById("adminLoginForm").style.display = "none";
}

function validateAdminLogin() {
    var dummyAdminUsername = "admin";
    var dummyAdminPassword = "admin123";

    var enteredUsername = document.getElementById("adminUser").value;
    var enteredPassword = document.getElementById("adminPassword").value;

    if (enteredUsername === dummyAdminUsername && enteredPassword === dummyAdminPassword) {
        // Redirect to the admin page (replace "adminPage.html" with the actual page URL)
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }

    return false;
}
