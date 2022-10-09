let showFilter = false;

function getDocHeight() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= getDocHeight()) {
            if (!showFilter) {
                $("#menuFilter").removeClass("hidden");
                $("#txtScroll").addClass("hidden");
            }
            showFilter = true;
        }
    });
});