const content_aboutme_scroll_btn = document.getElementById('content-aboutme-a');

var content_aboutme_scroll_btn_clickListener = function() {
    content_aboutme_scroll_btn.scrollIntoView(true);
}

content_aboutme_scroll_btn.addEventListener('click', content_aboutme_scroll_btn_clickListener);