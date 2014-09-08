  var toAdd;
  var toMove;
    $('#addItem').click(function () {
    	event.preventDefault();
    	toAdd = $('#input').val();
    	if (toAdd === '' || toAdd ===  ' ' || toAdd === '  ') {
    		$('.validInput').append('<p>Enter a valid item name</p>');
    	} 
    		else {
		    	$('.h3').remove();
		    	$('.p').remove();
		    	$('.p2').remove();
		        $('#list').append('<li><input name="checkItem" class="checkbox" type="checkbox">' + toAdd + 
		        					'        <button id="del">Delete</button></li>');
		        $('#input').val('').focus();

    		}
    			$('.checkbox').on('click', function () {
				$('#list2').append('<li><input name="checkItem" class="checkbox" type="checkbox">' + toAdd + 
		        					'        <button id="del">Delete</button></li>');
				$('#list').remove();
				});

		        $('#del').on('click', function() {
					$('#list2').remove();
				});
    });

   

    
