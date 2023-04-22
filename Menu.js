const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})


$("#sideBar li a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    console.log(section);
    $("wind").removeClass("Tabs");
    $(section).addClass("Tabs");
    $("#sideBar li a").removeClass("tab-active");
    $(this).addClass("tab-active");
})
