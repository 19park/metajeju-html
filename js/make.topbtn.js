$(function () {
    var $topBtn = $("<a href='javascript:;' class='btn-move-top'/>");

    $topBtn.on("click", function(e) {
        e.preventDefault();
        $("body, html").animate({scrollTop: 0}, 1000);
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $topBtn.fadeIn();
        } else {
            $topBtn.fadeOut();
        }
    });

    $("body").append($topBtn);
});