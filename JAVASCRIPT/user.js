function showForm(formId) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById(formId).style.display = 'block';
}


function showViewForm() {
    document.getElementById("susudnv-form").style.display = "none"; 
    document.getElementById("View-form").style.display = "block"; 
}
function ShowDataForm() {
    document.getElementById("settings-form").style.display = "none"; 
    document.getElementById("View-data").style.display = "block"; 
}

function UserInputDataForm() {
    document.getElementById("settings-form").style.display = "none"; 
    document.getElementById("user-input-form").style.display = "block"; 
}

function SusudnvForm() {
    document.getElementById("susu-form").style.display = "none"; 
    document.getElementById("susudnv-form").style.display = "block"; 
}

function hideForm() {

    document.getElementById('overlay').style.display = 'none';

    var forms = document.querySelectorAll('.popup-form');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
}