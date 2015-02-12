$(document).ready(function() {
	$('.checkbox').on('click', function(){
	  
	   if($(this).find('.figure-container div').hasClass('clicked'))
		 {
		   
		   $(this).find('.figure-container div').addClass('face').removeClass('entypo-check clicked').animate('slow'); 
		   
		 }else{
		 
	   $(this).find('.figure-container div').removeClass('face').addClass('entypo-check clicked').animate('slow'); 
		}
	});
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
	

	
});