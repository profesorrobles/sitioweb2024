// JavaScript Document
$(document).on("ready",main);
	

function main(){
	$("#menu a").on("click",IrA);
	}	
	
function IrA(){
	var seccion=$(this).attr("href");
	$("body,html").animate({
		scrollTop: $(seccion).offset().top -130
		},800);
		return false;
	}	
