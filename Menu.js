const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

//let user = document.querySelector(".Tabs1");

function sh() {

    document.getElementById("Home").style.display = "block";
    document.getElementById("Tab1").style.display = "none";
    document.getElementById("Tab2").style.display = "none";
    document.getElementById("Tab3").style.display = "none";
    document.getElementById("Tab4").style.display = "none";
}

 


function sh1() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Tab1").style.display = "block";
    document.getElementById("Tab2").style.display = "none";
    document.getElementById("Tab3").style.display = "none";
    document.getElementById("Tab4").style.display = "none";

}

function sh2(){
        document.getElementById("Home").style.display = "none";
        document.getElementById("Tab1").style.display = "none";
        document.getElementById("Tab2").style.display = "inline-block";
        document.getElementById("Tab3").style.display = "none";
        document.getElementById("Tab4").style.display = "none";
}

function sh3(){
            document.getElementById("Home").style.display = "none";
            document.getElementById("Tab1").style.display = "none";
            document.getElementById("Tab2").style.display = "none";
            document.getElementById("Tab3").style.display = "block";
            document.getElementById("Tab4").style.display = "none";
}

function sh4(){
            document.getElementById("Home").style.display = "none";
            document.getElementById("Tab1").style.display = "none";
            document.getElementById("Tab2").style.display = "none";
            document.getElementById("Tab3").style.display = "none";
            document.getElementById("Tab4").style.display = "block";
}


