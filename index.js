$( document ).ready(function() {
  $("#b").hide();
  $(".Register-block").hide();
    $("#a").click(function(){
       $(".login-block").hide('slow').delay(500);
       $(".Register-block").show('slow').delay(500);
       $("#b").show('slow').delay(500);
       $("#a").hide('slow').delay(500);
    });
    $("#b").click(function(){
       $(".login-block").show('slow').delay(500);
       $(".Register-block").hide('slow').delay(500);
       $('#a').show('slow').delay(500);
       $('#b').hide('slow').delay(500);
    });
});


