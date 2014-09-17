/**
 * jQuery Easy Collapsible
 * V. 0.1
 * (c) 2013 Federico Flecchia
 */
(function($) {
	$.fn.collapsible=function() {
		$(this).children('h3').each(function(index, element) {
			if($(element).nextUntil('h3').length > 0) {
				$(element).addClass('collapsed');
				$(element).nextUntil('h3').hide();
			}
         });
            
		 $(this).children('h3').click(function() {
			if($(this).hasClass('collapsed')) {
				$(this).nextUntil('h3').show('fast');
				$(this).removeClass('collapsed');
				$(this).addClass('expanded');
			} else if($(this).hasClass('expanded')) {
				$(this).nextUntil('h3').hide('fast');
				$(this).removeClass('expanded');
				$(this).addClass('collapsed');
			}
		 });
	};
        
	$('.collapsible').collapsible();
}(jQuery));