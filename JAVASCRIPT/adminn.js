function showOverviewPopup() {
    // Show the popup when the "Overview" list item is clicked
    document.getElementById('popup-container').style.display = 'flex';
}

document.getElementById('close-popup').addEventListener('click', function () {
    // Close the popup when the "Close" button is clicked
    document.getElementById('popup-container').style.display = 'none';
});

function openPopup() {
    document.getElementById('userManagementPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('userManagementPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

const users = [
    { id: 1, name: "User1", role: "teller" },
    { id: 2, name: "User2", role: "superuser" },
    // Add more dummy data as needed
];

// Function to display the popup
function openPopup() {
    const popup = document.getElementById("userManagementPopup");
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("userManagementPopup");
    popup.style.display = "none";
}

// Function to view the number of users
function viewUsers() {
    alert(`Number of Users: ${users.length}`);
}

// Function to add a new user
function addUser() {
    const userName = prompt("Enter the new user's name:");
    const password = prompt("Enter the new user's password:");
    if (userName) {
        // Assuming adding a new user to the dummy data
        users.push({ id: users.length + 1, username: userName, password: password, role: "teller" });
        alert(`${userName} added as a new user.`);
    }
    else {
        alert("Username and password are required.");
    }
}

// Function to delete a user
function deleteUser() {
    const userId = prompt("Enter the user ID to delete:");
    if (userId) {
        const index = users.findIndex(user => user.id == userId);
        if (index !== -1) {
            const deletedUser = users.splice(index, 1)[0];
            alert(`${deletedUser.name} deleted.`);
        } else {
            alert("User not found.");
        }
    }
}

// Function to assign user role
function assignRole() {
    const userId = prompt("Enter the user ID to assign a role:");
    if (userId) {
        const user = users.find(user => user.id == userId);
        if (user) {
            const newRole = prompt("Enter the new role (teller/superuser):");
            if (newRole && (newRole === "teller" || newRole === "superuser")) {
                user.role = newRole;
                alert(`${user.name}'s role updated to ${newRole}.`);
            } else {
                alert("Invalid role. Please enter either 'teller' or 'superuser'.");
            }
        } else {
            alert("User not found.");
        }
    }
}

document.getElementById('transactionMonitoring').addEventListener('click', function () {
    document.getElementById('popup-TM').style.display = 'block';

    var barChartData = {
        labels: ['MOMO', 'ECOBANK', 'FIDELITY'],
        datasets: [{
            label: 'Number of Customers',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [100, 71, 55]
        }]
    };

    var pieChartData = {
        labels: ['MOMO', 'ECOBANK', 'FIDELITY'],
        datasets: [{
            label: 'Number of Money sent to customers GHC',
            data: [50000, 40000, 22000],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    };

    var barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
        type: 'bar',
        data: barChartData
    });

    var pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
        type: 'pie',
        data: pieChartData
    });
});

document.getElementById('close-popupTM').addEventListener('click', function () {
    document.getElementById('popup-TM').style.display = 'none';
});
