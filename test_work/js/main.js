$('input').keyup(function(e){
  var symbol = String.fromCharCode(e);
  if($(this).val().match(/^\d+$/) && !symbol.match(/^\d{4}$/)){
    $(this).val(parseInt($(this).val()));
    if ($(this).val().length == 4) {
    	$(this).next('input').focus();
    }
  }else{
    $(this).val('');
  }
});