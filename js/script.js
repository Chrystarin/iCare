$(document).ready(function(){

    $(window).on("scroll", function(){tr();})
    
    function tr(){
      var scroll = $(window).scrollTop();
      
      if(scroll > 5){
        console.log("greater");
        $("header").addClass('animate');
        $("header div").css("border-color","transparent");
      }else{
        $("header").removeClass('animate');
        $("header > div").css("border-color","white");
        console.log("lower");
      }
      // console.log(scroll);
    }
    

    
        
    // $("header")
    //   .on("click", function(){
    //   $(this).addClass('animate');
    // });
    //   .on("animationend", function(){
    //   $(this).removeClass('animate');
    // });
    
});