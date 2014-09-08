
var shoppingApp = {

	validate: function() {
		var item = $("#newItem").val();
		if ($.trim(item) === "" && $.trim(item) === " " && $.trim(item) === 'number') {
			alert("Please enter a valid item");
		} else {
            return item;
		}
	},

	addItem: function() {
		var item = $("#newItem").val();
		var checkbox = ('<input type="checkbox">');
		var del = ('<button id="delete">Delete</button>')
		if(shoppingApp.validate()) {
			$('#newlist').append('<li>' + checkbox + " " + item + " " + del + '</li>');
			$('#newItem').val('');
			$('.h3').remove();
			$('.p').remove();
			$('.p2').remove();
		}
		return false;
	},

	submitItem: function(){
		$('#add').click(shoppingApp.addItem());
	},

	deleteItem: function(event) {
		event.preventDefault();
		$(this).parent().remove();
	},

	switching: function(event) {
		event.preventDefault();
		if($(this).is(':checked')) {
			$(this).parent().appendTo('#confirmedlist');
		} else {
			$(this).parent().appendTo('#newlist')
		}
	},

	initialize: function() {
		$('#add').click(shoppingApp.addItem);
		$('.welcome ul').on('change', 'input[type=checkbox]', shoppingApp.switching);
		$('.welcome ul').on('click', 'button', shoppingApp.deleteItem)
	},

}
$(document).ready(shoppingApp.initialize);