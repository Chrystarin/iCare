$(document).ready(function(){
    // Scroll animation for the head nav
    $(window).on("scroll", function(){tr();})
    function tr(){
      var scroll = $(window).scrollTop();
      
      if(scroll > 5){
        $("header").addClass('animate');
        $("header div").css("border-color","transparent");
      }else{
        $("header").removeClass('animate');
        $("header > div").css("border-color","white");

      }
    }
    
    // Animation for the header
    setTimeout(function(){
      Transition();


    },10000);
    function Transition(){
      $("#Title,#Author,#Date,#Content").addClass("Change"); 
      setTimeout(function(){
        // insert of new value
        $("#Title").html(title[0]);
        $("#Author").html(author[0]);
        $("#Date").html(date[0]);
        $("#Content").html(content[0]);
        setTimeout(function(){
          $("#Title,#Author,#Date,#Content").removeClass();
          
          // Time of the animation
        },1000)
        // time of the animation * 0.4
      },400);
      setTimeout(function(){
        Transition();
      },10000);
    }
      
    
        
    // $("header")
    //   .on("click", function(){
    //   $(this).addClass('animate');
    // });
    //   .on("animationend", function(){
    //   $(this).removeClass('animate');
    // });
    
});