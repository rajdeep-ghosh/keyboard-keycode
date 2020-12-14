$(document).keypress(function(eve) {
    $("h1").removeClass("title").addClass("keycode").text(eve.keyCode);
    $(".key").text(eve.key);
});