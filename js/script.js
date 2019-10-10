$(document).ready(function(){
    var h = $(window).height();
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
    var position;
    $("#scroll").click(function(){
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ); 
      // alert(scrollHeight);
      position = scrollHeight * .2;
      $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: position
        }, 'slow'); $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: position
        }, 'slow');
    });
    // Animation for the header(Header)
    var i = 0; 
    Transition();
    function Transition(){
      if(i == title.length){
        i = 0;
      }
      $("#Title,#Author,#Date,#Content").addClass("Change"); 
      setTimeout(function(){
        // insert of new value
        $("#Title").html(title[i]);
        $("#Author").html(author[i]);
        $("#Date").html(date[i]);
        $("#Content").html(content[i]);
        $("#head").css("background",BG[i]);
        i++;
        setTimeout(function(){
          $("#Title,#Author,#Date,#Content").removeClass();         
          // Time of the animation
        },1000)
        // time of the animation * 0.4
      },400);
      setTimeout(function(){
        Transition();
      },10000);
      // for the changing of the content
      
      
    }
    FactsChange();
    var c = 0;
    function FactsChange(){
      
      $("#FactsContent").addClass("FactAni");
      setTimeout(function(){
        if(c==facts.length){
          c = 0;
        }
        // insert of new value
        $("#FactsContent").html(facts[c]);
        // $("").html(img[c]);
        c++;
        setTimeout(function(){
          $("#FactsContent").removeClass();         
          // Time of the animation
        },1000);
        // time of the animation * 0.4
      }, 400);
      setTimeout(function(){
        FactsChange();
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