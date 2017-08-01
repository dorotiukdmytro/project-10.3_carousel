// scripts.js

$(function() {
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:-400});
	};
	$('#right').click(function(){
		changeSlide();
	});
	
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

	function changeLeftSlide() {
		carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
	};
	$('#left').click(function(){
		changeLeftSlide();
	});
});