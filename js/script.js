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
    

    
    // inserting of value
    insertion(i);
    // add of the animation in timer
    start();
    function start(){
      $("#hold").addClass("ani");
      $("#hold").on("animationend",function(){
        i++;
        $("#hold").removeClass(); 
        setTimeout(function(){
          $("#hold").addClass("ani");
        });
        if(i == title.length){
          i = 0;
        }
        $("#Title,#Author,#Date,#Content").addClass("Change"); 
        setTimeout(function(){
         // insert of new value
          insertion(i);
        },400);
        $("#Title,#Author,#Date,#Content").on("animationend",function(){
          $("#Title,#Author,#Date,#Content").removeClass();
        });
      });
    }
    function insertion(x){
      $("#Title").html(title[x]);
      $("#Author").html(author[x]);
      $("#Date").html(date[x]);
      $("#Content").html(content[x]);
      $("#head").css("background",BG[x]);
    } 
    var c = 0;
    FactsInsertion(c);
    // add of the animation in timer
    startFacts();
    function startFacts(){
      $("#S2 > div > div").addClass("Startani");
      $("#S2 > div > div").on("animationend",function(){
        c++;
        $("#S2 > div > div").removeClass(); 
        setTimeout(function(){
          $("#S2 > div > div").addClass("Startani");
        });
        if(c == facts.length){
          c = 0;
        }
        $("#FactsContent").addClass("FactAni"); 
        setTimeout(function(){
         // insert of new value
          FactsInsertion(c);
        },400);
        $("#FactsContent").on("animationend",function(){
          $("#FactsContent").removeClass();
        });
      });
    }
    function FactsInsertion(x){
      $("#FactsContent").html(facts[x]);
    } 

    counter($("#try"));

    // function counter(x){
    //   Num = x.html();
    //   if(Num>0){
    //     var c = 0;
    //     x.html(c);
    //     S();
    //     function S(){
    //       if(c < Num){
    //        x.addClass("Conterani");
    //        setTimeout(function(){
    //         x.html(c);
    //         c++;
    //        },400);
    //        x.on("animationend",function(){
    //         x.removeClass();
    //        });
    //       }else{

    //       }
        
    //     }


    //     // for(var c = 0; c <= Num; c++ ){
    //     //   x.addClass("Counterani");
    //     //   setTimeout(function(){
    //     //     alert(c);
    //     //     x.html(c);
    //     //   },400);
    //     //   x.on("animationend",function(){
    //     //     x.removeClass();
    //     //   });
    //     // }
    //   }
    // }
});