

  var toAdd;
  var toMove;


    
    $('#addItem').click(function () {
    	toAdd = $('#input').val();
    	if (toAdd === '' && ' ' && '  ') {
    		$('.validInput').append('<p>Enter a valid item name</p>');
    	} 
    		else {

		    	$('.h3').remove();
		    	$('.p').remove();
		    	$('.p2').remove();

		        $('#list').append('<li><input name="checkItem" class="checkbox" type="checkbox">' + toAdd + 
		        					'        <button id="del">Delete</button></li>');

		        $('.checkbox').click(function () {
		        toMove = $('#input').val();
		        $("#list2").append('<li><input name="checkItem" class="checkbox" type="checkbox">' + toMove + 
		        					'        <button id="del">Delete</button></li>');
		    	});

		    	$('#del').click(function() {
		    		alert("dfgnkdfg");
		    		$()
		   		 });
    		}


    });


