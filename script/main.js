$(document).ready(function(){
    $(document).on('scroll', function(){
        if ( $(window).scrollTop() > 30) {
            $("nav").css({
                transition : 'background-color 1s ease-in-out',
                "background-color": "rgba(0, 0, 0, 0.63)"
            });
        } else {
            $("nav").css({
                transition : 'background-color 1s ease-in-out',
                "background-color": "rgba(0, 0, 0, 0.189)"
            });
        }
    });
});