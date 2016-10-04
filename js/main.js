
$(document).ready(function(){

	var hoja1 = document.getElementById("leaf1-id");
	var hoja2 = document.getElementById("leaf2-id");
	var hoja3 = document.getElementById("leaf3-id");
	var hoja4 = document.getElementById("leaf4-id");
	var hoja5 = document.getElementById("leaf5-id");
	var hoja6 = document.getElementById("leaf6-id");
	var hojaParallax = document.getElementById("about-us-id");

	$(".arrow-one").click(function(){
		hoja1.style.left = "-100%"
		hoja2.style.left = "0%"
	});

	$(".arrow-two").click(function(){
		hoja2.style.left = "-100%"
		hoja3.style.left = "0%"
	});

	$(".down-one").click(function(){
		hoja3.style.top = "-100%"
		hoja4.style.top = "0%"
	});

	$(".down-two").click(function(){
		hoja4.style.top = "-100%"
		hoja5.style.top = "0%"
		hojaParallax.style.top = "35%"

	});

	$(".down-three").click(function(){
		hoja5.style.top = "-100%"
		hojaParallax.style.top = "-100%"
		hoja6.style.top = "0%"
	});



	$(window).scroll(function(){

		var scrolleando = $(window).scrollTop();
		var avance = scrolleando * 0.1;

		$("body").css({
			"background-position": "0px -" + avance + "px"
		});

	});

	var ingresar = document.getElementById("modal-ingresar");

	$(".login-desktop").click(function(){
		ingresar.style.display = "block"
	});



	var registrarse = document.getElementById("modal-registrar");

	$(".link-registrate").click(function(){
		ingresar.style.display = "none"
		registrarse.style.display = "block"
	});


	window.onclick = function(event){
		/*Cuando le doy click al  elemento registrarse este desaparece*/
		if(event.target == registrarse){
			registrarse.style.display = "none"
		}

		/*cuando le doy click al elemento ingresar este desaparece*/
	    if (event.target == ingresar) {
	    	ingresar.style.display = "none"
	    }
	}


	$(".link-login").click(function(){
		registrarse.style.display = "none"
		ingresar.style.display = "block"
	});


});