$(document).ready(function() {

	$('ul.tabs li').click(function() {
    	var tab_id = $(this).attr('data-tab');

    	$('ul.tabs li').removeClass('current');
    	$('.tab-content').removeClass('current');

    	$(this).addClass('current');
    	$("#" + tab_id).addClass('current');
    	$(this).css('background-color', '');
    });

	$('#stuff').click(function() {
		$('#more-content').toggle();
	});

	$('div.tab-content img').click(function() {
		var caption_id = $(this).attr('capt');
		$('#' + caption_id).toggle();
		$(this).toggleClass('big');
		$('.spread:not(.big)').toggle();
		$(this).show();
	});
	

})