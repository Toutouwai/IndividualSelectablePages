(function($) {

	$(document).ready(function() {

		$('.ProcessField #Inputfield__individual_pages').change(function() {
			var value = $(this).val().replace(/,/g, '|');
			if(value) value = 'id=' + value;
			$('#Inputfield_findPagesSelector').val(value);
		});

	});

}(jQuery));
