let topBtn = document.querySelector(".content-pageup");

topBtn.onclick = () => window.scrollTo({top:0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500? topBtn.getElementsByClassName.opacity = 1 :
topBtn.getElementsByClassName.opacity = 0;