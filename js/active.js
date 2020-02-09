$(document).ready(function($){
// masonry JQ plugin
	$(".portfolio-area").masonry();
	
// Animate CSS JQ Plugin
	$(".single-portfolio-link").hover(function(){
		$(".single-portfolio-link .portfolio-hover h2").removeClass("animated slideInDown");
		$(this).find(".portfolio-hover h2").addClass("animated slideInDown");
	});
	
// Offcanvas menu Trigger
	$(".menu-trigger").on('click', function(){
		$(".offcanvas-menu").addClass("active");
		$(".offcanvas-menu-overlay").addClass("active");
	});
	$(".menu-close i.fas, .offcanvas-menu-overlay").on('click', function(){
		$(".offcanvas-menu").removeClass("active");
		$(".offcanvas-menu-overlay").removeClass("active");
	});
	
// Headroom JS
	$(".menus").headroom();
});