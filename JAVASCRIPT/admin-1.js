function showOverviewPopup() {
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('popup-content').style.display = 'block';
    document.getElementById('popup-superuser').style.display = 'none';
    document.getElementById('viewTT').style.display = 'none';
    document.getElementById('viewDta').style.display = 'none';
}

function ViewTotaltransac() {
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('viewTT').style.display = 'block';
    document.getElementById('popup-content').style.display = 'none';

}

function SuperuserDataBase(){
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('popup-superuser').style.display = 'block';
    document.getElementById('popup-content').style.display = 'none';

}

function ViewSuperuserData(){
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('viewDta').style.display = 'block';
    document.getElementById('popup-superuser').style.display = 'none';

}

function closeBtn(){
    document.getElementById('popup-container').style.display = 'none';
    
}


function showViewForm() {
    document.getElementById("susu-form").style.display = "none"; 
    document.getElementById("View-form").style.display = "block"; 
}

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


function openPopup() {
    const popup = document.getElementById("userManagementPopup");
    popup.style.display = "block";
}

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
        labels: ['MOMO', 'ECOBANK', 'FIDELITY','CALBANK'],
        datasets: [{
            label: 'Number of Customers',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [100, 71, 55, 12]
        }]
    };

    var pieChartData = {
        labels: ['MOMO', 'ECOBANK', 'FIDELITY','CALBANK'],
        datasets: [{
            label: 'Number of Money sent to customers GHC',
            data: [50000, 40000, 22000,10000],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)','rgba(218, 165, 32, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)','rgba(218, 165, 32, 1)'],
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

function showsusuviewPopup() {
    var popup = document.getElementById("susu-popup");
    popup.style.display = "block";
}

function closeSusuPopup() {
    var popup = document.getElementById("susu-popup");
    popup.style.display = "none";
}


// Function to open the popup for Susu Data
function viewSusuData() {
    var popup = document.getElementById("view-susu-popup");
    popup.style.display = "block";
    generateSusuData();
}
  
  // Function to close the popup for Susu Data
function closeViewSusuPopup() {
    var popup = document.getElementById("view-susu-popup");
    popup.style.display = "none";
}
  
  // Function to generate dummy Susu Data
function generateSusuData() {
    var susuDataContainer = document.getElementById("susu-data-container");
    var dummyData = [
      { name: "John Doe", amount: 100, date: "2024-02-13", balance: 500 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      { name: "Jane Smith", amount: 150, date: "2024-02-12", balance: 700 },
      
      // Add more dummy data as needed
    ];
  
    susuDataContainer.innerHTML = ""; // Clear previous data
  
    dummyData.forEach(function(entry) {
      var item = document.createElement("div");
      item.innerHTML = `<strong>Name:</strong> ${entry.name}<br>
                        <strong>Amount Deposited:</strong> ${entry.amount}<br>
                        <strong>Date:</strong> ${entry.date}<br>
                        <strong>Current Balance:</strong> ${entry.balance}<br><br>`;
      susuDataContainer.appendChild(item);
    });
}

  


