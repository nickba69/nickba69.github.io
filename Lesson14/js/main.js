		$(document).ready(function(){

			var cart =3;
			$('span.cart1').html(cart);
			$('i.star').on('click', function(e){
			e.preventDefault();

			cart += parseFloat($(this).siblings('span.mark1').text());
			$(' span.cart1').html(cart.toFixed(2));


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

