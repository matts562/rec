$(document).ready(function() {


	var images = ["blue.jpg", "pink.jpg", "red.jpg"];

	$("#random").css({"background-image": "url(images/" + images[Math.floor(Math.random() * images.length)] + ")"});
	
	var images = ["blue2.jpg", "pink2.jpg", "red2.jpg"];

	$("#random2").css({"background-image": "url(images/" + images[Math.floor(Math.random() * images.length)] + ")"});
	

	$('#nav_wrapper').hover(function() { // brings navigation up when hovered on
		$('#nav_wrapper').animate({right: "0px"}, 200);
	});

	$("html").click(function() { // all menus collapse/dissapear when you click outside of the menu area
		$("#one_nav").hide("slide", {direction: "right"}, 200);
		$("#two_nav").hide("slide", {direction: "right"}, 200);
		$("#three_nav").hide("slide", {direction: "right"}, 200);
		$("#four_nav").hide("slide", {direction: "right"}, 200);
		$("#five_nav").hide("slide", {direction: "right"}, 200);
		$("#six_nav").hide("slide", {direction: "right"}, 200);
		$('#nav_wrapper').animate({right: "-500px"}, 200);
	});

	$("#one").hover(function() { // brings up submenu when "one" button is hovered on
		$("#one_nav").show("slide", {direction: "right"}, 200);
		$("#two_nav").hide("slide", {direction: "right"}, 200);
		$("#three_nav").hide("slide", {direction: "right"}, 200);
		$("#four_nav").hide("slide", {direction: "right"}, 200);
		$("#five_nav").hide("slide", {direction: "right"}, 200);
		$("#six_nav").hide("slide", {direction: "right"}, 200);
	});

	$("#two").hover(function() { // brings up submenu when "two" button is hovered on
		$("#one_nav").hide("slide", {direction: "right"}, 300);
		$("#two_nav").show("slide", {direction: "right"}, 300);
		$("#three_nav").hide("slide", {direction: "right"}, 300);
		$("#four_nav").hide("slide", {direction: "right"}, 300);
		$("#five_nav").hide("slide", {direction: "right"}, 300);
		$("#six_nav").hide("slide", {direction: "right"}, 300);
	});

	$("#three").hover(function() { // brings up submenu when "three" button is hovered on
		$("#one_nav").hide("slide", {direction: "right"}, 300);
		$("#two_nav").hide("slide", {direction: "right"}, 300);
		$("#three_nav").show("slide", {direction: "right"}, 300);
		$("#four_nav").hide("slide", {direction: "right"}, 300);
		$("#five_nav").hide("slide", {direction: "right"}, 300);
		$("#six_nav").hide("slide", {direction: "right"}, 300);
	});

	$("#four").hover(function() { // brings up submenu when "three" button is hovered on
		$("#one_nav").hide("slide", {direction: "right"}, 300);
		$("#two_nav").hide("slide", {direction: "right"}, 300);
		$("#three_nav").hide("slide", {direction: "right"}, 300);
		$("#four_nav").show("slide", {direction: "right"}, 300);
		$("#five_nav").hide("slide", {direction: "right"}, 300);
		$("#six_nav").hide("slide", {direction: "right"}, 300);
	});

	$("#five").hover(function() { // brings up submenu when "three" button is hovered on
		$("#one_nav").hide("slide", {direction: "right"}, 300);
		$("#two_nav").hide("slide", {direction: "right"}, 300);
		$("#three_nav").hide("slide", {direction: "right"}, 300);
		$("#four_nav").hide("slide", {direction: "right"}, 300);
		$("#five_nav").show("slide", {direction: "right"}, 300);
		$("#six_nav").hide("slide", {direction: "right"}, 300);
	});

	$("#six").hover(function() { // brings up submenu when "three" button is hovered on
		$("#one_nav").hide("slide", {direction: "right"}, 300);
		$("#two_nav").hide("slide", {direction: "right"}, 300);
		$("#three_nav").hide("slide", {direction: "right"}, 300);
		$("#four_nav").hide("slide", {direction: "right"}, 300);
		$("#five_nav").hide("slide", {direction: "right"}, 300);
		$("#six_nav").show("slide", {direction: "right"}, 300);
	});

	

});