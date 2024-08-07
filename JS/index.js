$(".logo-container").on("click", function () {
  alert("Angga Ferdiansyah");
});
$(".submit").on("click", function () {
  $(".submit").toggleClass("d-none");
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwZfODLkgVxsw0tPlyEKvcSbxMA634sPIFkHfYzYXmSv7Xc7yfbt6KxehM9cjEnL5JsdQ/exec'
const form = document.forms['contact-form']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            $(".submit").toggleClass("d-none");
            $(".alert-success").toggleClass("d-none");
            console.log('Success!', response)
          })
          .catch(error => {
            $(".alert-danger").toggleClass("d-none");
            console.error('Error!', error.message)
          })
      })

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}