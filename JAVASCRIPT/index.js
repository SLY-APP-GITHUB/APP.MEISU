function showForm(formId) {
    // Display the overlay and the specified form
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById(formId).style.display = 'block';
}

function hideForm() {
    // Hide the overlay and all forms
    document.getElementById('overlay').style.display = 'none';

    // You may want to hide each form individually if there are multiple forms
    var forms = document.querySelectorAll('.popup-form');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
}
function DashboardForm() {
    // Handle the save functionality
    alert('Loading.....'); // You can replace this with your save logic
}
function savePaymentForm() {
    // Handle the save functionality
    alert('Form saved!'); // You can replace this with your save logic
}
