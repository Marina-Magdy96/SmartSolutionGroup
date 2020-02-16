
$(document).ready(function(){
	$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
	$('.Hide').hide();
	var Hide1=$('.Hide1').html();
	var Hide2=$('.Hide2').html();
	var Hide3=$('.Hide3').html();
	var Hide4=$('.Hide4').html();
	var arr=[Hide1,Hide2,Hide3,Hide4];
	var i=0;
    setInterval(swapText(),500);
    function swapText(){
		
	$('.HomeCenter').html("");
	$('.HomeCenter').html(i);
	i++;
    }
});