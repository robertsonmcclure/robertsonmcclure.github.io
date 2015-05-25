$(document).ready(function() {

	$('ul.tabs li').click(function() {
    	var tab_id = $(this).attr('data-tab');

    	$('ul.tabs li').removeClass('current');
    	$('.tab-content').removeClass('current');

    	$(this).addClass('current');
    	$("#" + tab_id).addClass('current');
    	$(this).css('background-color', '');
    });
	
	$('ul.posts li').click(function() {
		var post_id = $(this).attr('lnk');
		$('ul.posts li').removeClass('current');
		$('.blog-post').removeClass('current');
		
		$(this).addClass('current');
		$("#" + post_id).addClass('current');
	})

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