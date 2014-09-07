

  var toAdd;
  var toMove;
  var toRemove;

    $('#addItem').click(function () {
    	toAdd = $('#input').val();
    	
        $('#list').append('<li><input name="checkItem" class="checkbox" type="checkbox">' + toAdd + 
        					'        <button id="del">Delete</button></li>');
        $('#input').val('').focus();
        $('.cart').removeClass('welcome').addClass('newItems')
    });

    $('.checkbox').click(function () {
    	 alert("fghghfh");
        toMove = $('#list').val();
        $("#list2").append('<li><input name="checkItem" class="checkbox" type="checkbox">' + toRemove + 
        					'        <button id="del">Delete</button></li>');
    });

    $('#list').on('change','input[type=checkbox]',function(evt){
    var checkbox = $(evt.target),
        toAdd = checkbox.parent().next('input[type=text]');

    toAdd.css('text-decoration', checkbox.is(':checked') ? 'line-through' : 'none');
});