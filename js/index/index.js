// Variables Declare
// HEADER Declare
const header = document.getElementById("header");
const header_bar = document.getElementById("header-bar");
const drop_menu = document.getElementById("header-menu-drop");
const drop_menu_btn = document.querySelectorAll("#header-menu-drop-btn-1, #header-menu-drop-btn-2, #header-menu-drop-btn-3, #header-menu-drop-btn-4, #header-menu-drop-btn-5");
const header_menu_checkbox = document.getElementById("header-menu-checkbox");
const header_menu_label = document.getElementById("header-menu-label");

// CONTENT Declare
let topBtn = document.querySelector(".content-pageup");
const overlay = document.getElementById("overlay");
const overlay_img = document.getElementById("overlay-img");
const overlay_addi = document.getElementById("overlay-addi");
let img_fullname = undefined;

// CONTENT Projects Declare
// CONTENT Projects GPS Declare
const gps_left = document.getElementById("content-projects-slide-gps-left");
const gps_right = document.getElementById("content-projects-slide-gps-right");
const gps_num = document.getElementById("gps-num");
const gps_img_location = "../images/index/content/projects/GPS/";
const gps_img_count = 3;
const gps_img_name = "content-projects-slide-gps-img-";
const gps_img_png = ".png";
const gps_img_tag = document.getElementById("content-projects-slide-gps-img");
const gps_zoomin = document.getElementById("gps-zoomin");
const gps_addi = document.getElementById("gps-addi");
let gps_check = 1;


// First Settings
gps_num.innerText = gps_check + " / " + gps_img_count;
gps_img_tag.src = gps_img_location + gps_img_name + gps_check + gps_img_png;


// EventListener
// CONTENT EventListener
overlay.addEventListener('click', Overlay);

// GPS EventListener
gps_left.addEventListener('click', SlideLeft);
gps_right.addEventListener('click', SlideRight);
gps_zoomin.addEventListener('click', SlideZoomIN);
gps_addi.addEventListener('click', GPSAddiON);



topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ? topBtn.getElementsByClassName.opacity = 1 :
    topBtn.getElementsByClassName.opacity = 0;

for (const temp_btn of drop_menu_btn) {
    temp_btn.addEventListener('click', DropMenuClickListener);
}

function DropMenuClickListener() {
    header_menu_checkbox.checked = false;
}

ResponsiveResize();
ResponsiveTop();

// Projects GPS Functions
function Overlay() {
    document.body.classList.remove('scroll-lock');
    overlay.animate([
        {
            opacity: 1
        },

        {
            opacity: 0
        },

        {
            easing: "ease-in-out"
        }
        
    ], 400);
    setTimeout(
        function() {
            overlay.style.display = 'none';
            overlay_img.style.display = 'none';
            overlay_addi.style.display = 'none';
        }, 200);
}

function GPSAddiON() {
    document.body.classList.add('scroll-lock');
    overlay.style.display = 'flex';
    overlay_addi.style.display = 'block';
    overlay.animate([
        {
            opacity: 0
        },

        {
            opacity: 1
        },

        {
            easing: "ease-in-out"
        }
        
    ], 400);

    document.getElementById('overlay-addi-title').innerText = "위치 정보 공유 웹앱";
    document.getElementById('overlay-addi-deployment-content').href =
    "https://naver.com/";
    document.getElementById('overlay-addi-deployment-content').innerText =
    "https://naver.com/";
    document.getElementById('overlay-addi-summary-content').innerText = "asdfasdf";
    document.getElementById('overlay-addi-meaning-content').innerText = "asdfasdf";
    document.getElementById('overlay-addi-technology-content').innerText = "asdfasdf";
    LIAdd("lilililililili");
}

function LIAdd(value) {
    const addi_li = document.createElement("li");
    const addi_li_text = document.createTextNode(value);
    addi_li.appendChild(addi_li_text);
    document.getElementById('overlay-addi-function-content').appendChild(addi_li);
}

function SlideZoomIN() {
    document.body.classList.add('scroll-lock');
    img_fullname = gps_img_location + gps_img_name + gps_check + gps_img_png;
    overlay.style.display = 'flex';
    overlay_img.style.display = 'block';
    overlay.animate([
        {
            opacity: 0
        },

        {
            opacity: 1
        },

        {
            easing: "ease-in-out"
        }
        
    ], 400);
    overlay_img.src = img_fullname;
}

function SlideLeft() {
    if (gps_check === 1) {
        gps_check = 3;
        SlideIMGChange(gps_check);
    } else if (gps_check === 2) {
        gps_check = 1;
        SlideIMGChange(gps_check);
    } else {
        gps_check = 2;
        SlideIMGChange(gps_check);
    }
}

function SlideRight() {
    if (gps_check === 1) {
        gps_check = 2;
        SlideIMGChange(gps_check);
    } else if (gps_check === 2) {
        gps_check = 3;
        SlideIMGChange(gps_check);
    } else {
        gps_check = 1;
        SlideIMGChange(gps_check);
    }
}

function SlideIMGChange(num) {
    gps_num.innerText = num + " / " + gps_img_count;
    gps_img_tag.src = gps_img_location + gps_img_name + num + gps_img_png;
    gps_img_tag.animate([
        {
            transform: 'scale(0)'
        },

        {
            transform: 'scale(1)'
        },

        {
            easing: "ease-in-out"
        }
        
    ], 400);
}


// Responsive Layout Functions

window.addEventListener("resize", ResponsiveResize);
window.addEventListener("resize", ResponsiveTop);
window.addEventListener("scroll", ResponsiveTop);

function ResponsiveResize() {
    if (window.innerWidth >= 961) {
        drop_menu.style.display = "none";
        header_menu_label.style.display = "none";
    } else {
        drop_menu.style.display = "block";
        header_menu_label.style.display = "block";
    }
}

function ResponsiveTop() {
    if (window.innerWidth >= 961) {
        if (header.offsetTop === 0) {
            header.style.backgroundColor = "rgba(0, 0, 0, 0)";
            header_bar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            header.style.boxShadow = "0";
        } else {
            header.style.backgroundColor = "#151515";
            header_bar.style.backgroundColor = "#151515";
            header.style.boxShadow = "6px 0px 12px black";
        }
    } else {
        header.style.backgroundColor = "#151515";
        header_bar.style.backgroundColor = "#151515";
        header.style.boxShadow = "6px 0px 12px black";
    }
}
