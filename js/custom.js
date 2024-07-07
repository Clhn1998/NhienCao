// JavaScript Document
$(document).ready(function(){
  $("#btn-toggle").click(function(){
    $(".menu").slideToggle("slow");
	$(".icon-menu").slideToggle("slow");
  });
	
	$("#btn-1").click(function(){
    	$("#drop-1").slideToggle();
		$("#drop-2").slideUp();
		$("#drop-3").slideUp();
	 });
	
		$("#btn-2").click(function(){
    	$("#drop-2").slideToggle();
		$("#drop-1").slideUp();
		$("#drop-3").slideUp();
	 });
	$("#btn-3").click(function(){
    	$("#drop-3").slideToggle();
		$("#drop-1").slideUp();
		$("#drop-2").slideUp();
	 });
	
});





