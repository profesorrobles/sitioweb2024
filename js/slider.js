// JavaScript Document
var actual=1;

var vueltas=function(){

	if (actual == $("#ContenedorSlider img").size()){
		actual=0;
        $("#ContenedorSlider").animate({
		marginLeft:(-1*actual*$("#ContenedorSlider img").eq(0).width())},120);	
	}
	$("#ContenedorSlider").animate({
		marginLeft:(-1*actual*$("#ContenedorSlider img").eq(0).width())},700);	
	    actual++;
   }
   
  
var bucle=function(){
       vueltas();	   
	   setTimeout("bucle();",3000);
	   } 
   
$(document).ready(function(){
	 bucle();
      });