		$(document).ready(function(){

			var cart =3;
			$('.cart span').html(cart);
			$('.item .btn ').on('click', function(e){
			e.preventDefault();

			cart += parseFloat($(this).siblings('.price').text());
			$('.cart span').html(cart.toFixed(2));


			});

			// $( " input#shipping:checked" )

			    $(".fs").click(function () {
      			$(".qq img").toggleClass("fa-spin");
    				});


			$('#vasya-menu').on('click', function(){
				$('.hide').toggleClass('show');
			});  

			$('#vasya-menu').on('click', function(e){
				event.preventDefault();
				$(this).find('.hide').css('display', 'block');
			});
		});

