		$(document).ready(function(){
			$('#top-menu').on('click', function(){
				$('.var-menu').toggleClass('show');
			});  

			$('.outer > li').on('click', function(e){
				event.preventDefault();
				$(this).find('.inner').css('display', 'block');
			});
		});

