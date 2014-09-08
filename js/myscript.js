

	//var toAdd;
	//var toMove;
    //$('#addItem').click(function () {
    	
    	//toAdd = $('#newItem').val();
    	//if (toAdd === '' || toAdd ===  ' ' || toAdd === '  ') {
    		//$('.validInput').text('Enter a valid item name');
    	//} 
    		//else {
		    	//$('.h3').remove();
		    	//$('.p').remove();
		    	//$('.p2').remove();
		        //$('#newlist').append('<li class="listitem"><input name="checkItem" class="checkbox" type="checkbox">' + toAdd + 
		        					//'        <button class="delete">Delete</button></li>');
		        //$('#newItem').val('').focus();

		        //$('#newlist').on('click', 'li.listitem', function () {
				//$('#confirmedlist').append();
				//});
    		//}
    			//$('#newlist').on('click', 'li.listitem', checkoff);
    			
    			//$('#list').on('click', 'button.del', deleteItem);
		        //$('.delete').on('click', function() {
					//$('#list2').remove();
				//});
    //});

var shoppingApp = {

	validate: function() {
		var item = $("#newItem").val();
		if ($.trim(item) === "") {
			alert("Please enter something");
		} else {
            return item;
		}
	},

	addItem: function() {
		var item = $("#newItem").val();
		var checkbox = ('<input type="checkbox">');
		var del = ('<button id="delete">Delete</button>')
		if(shoppingApp.validate()) {
			$('#newlist').append('<li>' + checkbox + " " + newItem + " " + del + '</li>');
			$('#newItem').val('');
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