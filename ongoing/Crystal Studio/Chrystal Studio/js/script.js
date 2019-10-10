$(document).ready(function(){

	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 0,
		loop: true,
		centeredSlides: true,
		autoplay: {
		  delay: 2500,
		  disableOnInteraction: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });
	  var click = "dianne";
	  $("."+click).fadeIn();
	  $("#Harold").click(function(){
		if(click != "harold"){
			$("."+click).css("display","none");
			click = "harold";
			$("."+click).fadeIn();
		}
	  });
	  $("#Dianne").click(function(){
		if(click != "dianne"){
			$("."+click).css("display","none");
			click = "dianne";
			$("."+click).fadeIn();
		}
	  });
	  $("#Topher").click(function(){
		if(click != "topher"){
			$("."+click).css("display","none");
			click = "topher";
			$("."+click).fadeIn();
		}
	  });
	  $("#Shanelle").click(function(){
		if(click != "shanelle"){
			$("."+click).css("display","none");
			click = "shanelle";
			$("."+click).fadeIn();
		}
	  });
	  $("#Marcus").click(function(){
		if(click != "marcus"){
			$("."+click).css("display","none");
			click = "marcus";
			$("."+click).fadeIn();
		
		}
	  });
	  $("#S3nav li").click(function(){
		$("#S3nav li").css("color","black");
		$(this).css("color","rgb(45, 108, 205)");
	  });
	  var X = 1;
	  $('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		if(X == 1){
			$("#M-Nav").animate({left: "20%"},300);
			X= 2;
		}else{
			$("#M-Nav").animate({left: "101%"},300);
			X = 1;
		}
	  })

	 
   
	  
});





