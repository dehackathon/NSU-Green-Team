$(document).ready(function() {
	$('.checkbox').on('click', function()	{

		var target = $(this);
		var associatedId = target.data('associated');
		var associated = $('#' + associatedId);

   	if (target.find('.figure-container div').hasClass('clicked')) {

			target.find('.figure-container div').addClass('face').removeClass('entypo-check clicked').animate('slow');
			associated.css('text-decoration', 'none');

	 	} else {

			target.find('.figure-container div').removeClass('face').addClass('entypo-check clicked').animate('slow');
			associated.css('text-decoration', 'line-through');
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



$(function() {
    $('a[href*=#ar]:not([href=#a])').click(function() {
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
});

function set_status(taskID, taskStatus){
    localStorage.setItem(taskID,taskStatus);
}

function get_status(taskID){
    return localStorage.getItem(taskID);
}
