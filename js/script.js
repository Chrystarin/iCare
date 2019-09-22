$(document).ready(function(){
    $(window).onscroll(Header());
    function Header() {
        $("header")
          .on("click", function(){
          $(this).addClass('animate');
        })
          .on("animationend", function(){
          $(this).removeClass('animate');
        });
    });
});