const accordionBtns = document.getElementsByClassName("button-accordion");
const btnToggle1 = document.getElementsByClassName("btn-toggle1");
const btnToggle2 = document.getElementsByClassName("btn-toggle2");
const accordionItems = document.getElementsByClassName("accordion-items");
for (const buttons of accordionBtns) {
    buttons.addEventListener("click" , accordionFunction);
    function accordionFunction() {
        buttons.nextElementSibling.classList.toggle("show");
        buttons.parentElement.classList.toggle("show");
        const btnToggle1 = buttons.querySelector(".btn-toggle1");
        const btnToggle2 = buttons.querySelector(".btn-toggle2");
        btnToggle1.classList.toggle("show");
        btnToggle2.classList.toggle("show");
    }
}
function navigate1(){
    window.location.href = 'index.html';
}
function navigate2(){
    window.location.href = 'about-us.html';
}
function navigate3(){
    window.location.href = 'faq.html';
}
function navigate4(){
    window.location.href = 'contact.html';
}
/*const countryButtons = document.querySelectorAll('.btn-tabs');
countryButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        countryButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        countryDetails.forEach((details, i) => {
            if (i === index) {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        })
    })
})*/