$(document).ready(function() {
  $("#content-slider").lightSlider({
      loop:false,
      keyPress:true
  });
});

function extraDetails(name){
  $(".speaker").hide();
  $("." + name).show();
  document.getElementById('content-'+name).scrollIntoView(false);
}
