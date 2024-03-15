function showForm(formId) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById(formId).style.display = 'block';
}

function showViewForm() {
    document.getElementById("susu-form").style.display = "none"; 
    document.getElementById("View-form").style.display = "block"; 
}
function ShowDataForm() {
    document.getElementById("data-form").style.display = "none"; 
    document.getElementById("View-data").style.display = "block"; 
}

function UserInputDataForm() {
    document.getElementById("settings-form").style.display = "none"; 
    document.getElementById("user-input-form").style.display = "block"; 
}

function ShowDataBaseForm() {
    document.getElementById("settings-form").style.display = "none"; 
    document.getElementById("data-form").style.display = "block"; 
}

function BConfirmPaymentForm() {
    document.getElementById("Bpayment-form").style.display = "none"; 
    document.getElementById("Bconfir-menu").style.display = "block"; 
}

function MConfirmPaymentForm() {
    document.getElementById("Mpayment-form").style.display = "none"; 
    document.getElementById("Mconfir-menu").style.display = "block"; 
}

function BanksPaymentForm() {
    document.getElementById("choose-menu").style.display = "none"; 
    document.getElementById("Bpayment-form").style.display = "block"; 
}

function MomoPaymentForm() {
    document.getElementById("choose-menu").style.display = "none"; 
    document.getElementById("Mpayment-form").style.display = "block"; 
}

function MGoBackPaymentForm() {
    document.getElementById("Mconfir-menu").style.display = "none"; 
    document.getElementById("Mpayment-form").style.display = "block"; 
}

function BGoBackPaymentForm() {
    document.getElementById("Bconfir-menu").style.display = "none"; 
    document.getElementById("Bpayment-form").style.display = "block"; 
}


function hideForm() {
    document.getElementById('overlay').style.display = 'none';

    var forms = document.querySelectorAll('.popup-form');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
}