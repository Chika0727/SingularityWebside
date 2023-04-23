const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

let user = document.querySelector(".Tabs1");

function sh() {
    user.classList.toggle("hide");
}
 


