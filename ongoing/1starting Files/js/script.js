$(document).ready(function(){
    // $("div").click(function(){
    //     $(this).css({"animation": "fade 3s",
    //         "animation-fill-mode": "forwards"})
    // });
    $(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
});