$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".near").click(function() {
    $(".grover-near").slideDown();
    $(".grover-far").slideUp();
  });

  $(".far").click(function() {
    $(".grover-near").slideUp();
    $(".grover-far").slideDown();
  });

  $("#frog").click(function() {
    $("#frog, #frog-phrase").hide();
    $("#prince, #kiss-lyrics").show();
  });
});
