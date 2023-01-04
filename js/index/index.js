let topBtn = document.querySelector(".content-pageup");
const header = document.getElementById("header");
const header_bar = document.getElementById("header-bar");
const drop_menu = document.getElementById("header-menu-drop");
const drop_menu_btn = document.querySelectorAll("#header-menu-drop-btn-1, #header-menu-drop-btn-2, #header-menu-drop-btn-3, #header-menu-drop-btn-4, #header-menu-drop-btn-5");
const header_menu_checkbox = document.getElementById("header-menu-checkbox");
const header_menu_label = document.getElementById("header-menu-label");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ? topBtn.getElementsByClassName.opacity = 1 :
    topBtn.getElementsByClassName.opacity = 0;

for (const temp_btn of drop_menu_btn) {
    temp_btn.addEventListener('click', DropMenuClickListener);
}

function DropMenuClickListener() {
    header_menu_checkbox.checked = false;
}

// Responsive Layout Functions
ResponsiveResize();
ResponsiveTop();

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
