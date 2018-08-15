$ (function () {
	$('.book').click(function () {
		$('#modal').addClass('show');
	});
	$('.modalmain__overlay').click(function () {
		$('#modal').removeClass('show')
	})
})
