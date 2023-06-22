function showAlert() {
    alert("¡Hola, esta es una alerta desde JavaScript!")
}

const form = document.getElementById("miForm")

form.addEventListener("submit",function(lala) {
    lala.preventDefault()
    validateForm();
})

function validateForm() {
    const input = document.getElementById("email")
    const inputvalue = input.value

    if (!validateEmail(inputValue)) {
        alert("Por favor ingrese un correo electronico valido.")
    } else {
        alert("Correo electronico enviado correctamente.")
    }
}

function validateEmail(email) {
    const regex = //^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    regex.test(email)
}
function validateForm() {
    const input = document.getElementById('email');
    const inputValue = input.value

    if (!validateEmail(inputValue)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
}

if (form) {
    form.addEventListener("submit", function(lala) {
        lala.preventDefault()
        validateForm();
    })
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})