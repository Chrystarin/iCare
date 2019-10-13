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
    // Getting the total length of the website
    var position;
    $("#scroll").click(function(){
      scroll(.1);
    });
    function scroll( x){
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ); 
      // alert(scrollHeight);
      position = scrollHeight * x;
      $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: position
        }, 'slow'); $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: position
        }, 'slow');
    }
    function Start(){
      alert()
    }


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
      $("#head").css({"background": BG[x] +" no-repeat","background-size":"cover"});
      $("#Discover-Head").attr("data-Location", id[x])
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

    $("#BLOG").on("click",function(){
      $("#Blog,#Article1,#Article2,#Article3,#Article4,#Article5").fadeOut();
      $("#S1,#S2,#S3,#S4,#head").fadeIn();
      scroll(.79);
    });
    $("#CONTRIBUTE").on("click",function(){
      $("#Blog,#Article1,#Article2,#Article3,#Article4,#Article5").fadeOut();
      $("#S1,#S2,#S3,#S4,#head").fadeIn();
      scroll(.4 );
    });
    $("header div > img").on("click",function(){
      $("#Blog,#Article1,#Article2,#Article3,#Article4,#Article5").fadeOut();
      $("#S1,#S2,#S3,#S4,#head").fadeIn();
      scroll(0);
    });
    // Function for the discover button
    $(".Discover").on("click",function(){
      swap($(this).attr("data-Location"));
    });
    $(".blog-holder").on("click",function(){
      swap($(this).attr("data-Location"));
    });

    function swap(article){
      $("#S1,#S2,#S3,#S4,#head").fadeOut();
      $("#Blog,#Article1,#Article2,#Article3,#Article4,#Article5").fadeOut();
      $("#Blog,#S4,#"+ article).fadeIn();
      $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: 0
        }, 'slow'); 
    }
    setTimeout(function(){
      $("#Loading").fadeOut();
      $("#iCare-Content").fadeIn();
    },5000)
    

});