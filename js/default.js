$(document).ready(function(){
    $(".all").on("click", function () {
        $(".nav").addClass("on");
        $(".all").addClass("hidden");
    });
    $(".nav .close").on("click", function () {
        $(".nav").removeClass("on");
        $(".all").removeClass("hidden");
    });
})
