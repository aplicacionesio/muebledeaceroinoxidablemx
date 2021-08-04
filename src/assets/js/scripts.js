$(document).ready(function() {

		$("#enlace-contacto").click(function(e) {
			e.preventDefault();
		    $('html, body').animate({
		        scrollTop: $("#contacto").offset().top
		    }, 2000);
		});
	      

		$('#toggle-menu').on('click', function() {
		$("#menu-principal").slideToggle();
		});

		$('.menu-principal ul li a').on('click', function() {
			$(this).next().stop().slideToggle("fast");
		});
		


		$('.menu-principal2 ul li').hover(function() {
			$(this).find(".submenu").stop().slideToggle();
		});
	      
	      $('.bxslider').bxSlider(
	            {mode: 'horizontal', auto: true, pager: false, pause: 5000}
	        );


	      $('.galeria img').on('hover', function() {
	        $(this).css("opacity", 0.5);
	      });

	      $('.galeria img').on('mouseleave', function() {
	        $(this).css("opacity", 1);
	      });




		$(".galeria .foto").hover(
			function () {
			$(this).find('.lupa').stop(true, true).animate({ top : "0px" }, 300);
			$(this).find('.mifoto').stop(true, true).animate({ width : "200px", opacity : 0.7, top: "-25px", left : "-25px" }, 300);
			}, 
			function () {
			$(this).find('.lupa').stop(true, true).animate({ top : "150px" }, 300);
			$(this).find('.mifoto').stop(true, true).animate({ width : "150px", opacity : 1, top: "0px", left : "0px" }, 300);
			}
		);


		Shadowbox.init({
		// Configura las especificaciones para las ventanas modales que abren los anuncios
		overlayColor: "#000",
		overlayOpacity: "0.6",
		});

});