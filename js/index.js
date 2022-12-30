let topBtn = document.querySelector(".content-pageup");

topBtn.onclick = () => window.scrollTo({top:0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500? topBtn.getElementsByClassName.opacity = 1 :
topBtn.getElementsByClassName.opacity = 0;


let header_nav_btn = document.getElementById("header-nav-btn");
let header_nav = document.getElementById("header-nav");
var mcnt = 0;

header_nav_btn.click(function(){
    if (mcnt == 0){     
        header_nav.addClass('trans');
        mcnt = 1;
        return;
    } else {
        header_nav.removeClass('trans');
        mcnt = 0;
    }
});