//using object literal style for better code readabilitys//
var shoppingApp = {
	//checks if user inputs values other than strings//
	validate: function() {
		var item = $("#newItem").val();
		if ($.trim(item) === "" || $.trim(item) === " " || $.trim(item.length) < 3 || $.trim(item.length) > 15) {
			$('.warning').text("Please enter a valid item");
		} else {
            return item;
		}
	},

	//receives the validated input and adds the item to the new list//
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
			$('.warning').remove();
		}
		else {return false;}
	},

	// on the click of the add button adds the item to the list//
	//submitItem: function(){
		//$('#add').click(shoppingApp.addItem());
	//},

	//deletes items from either lists on click of the delete button//
	deleteItem: function(event) {
		event.preventDefault();
		$(this).parent().remove();
	},

	//switches between new lists and confirmed lists columns on user click on check box//
	switching: function(event) {
		event.preventDefault();
		if($(this).is(':checked')) {
			$(this).parent().appendTo('#confirmedlist');
		} else {
			$(this).parent().appendTo('#newlist')
		}
	},

	//initializes the functions when called//
	initialize: function() {
		$('#add').click(shoppingApp.addItem);
		$('.welcome ul').on('change', 'input[type=checkbox]', shoppingApp.switching);
		$('.welcome ul').on('click', 'button', shoppingApp.deleteItem)
	},

}
$(document).ready(shoppingApp.initialize);