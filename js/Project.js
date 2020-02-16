$(function () {
			
			var filterList = {
			
				init: function () {
				
					$('#portfoliolist').mixItUp({
						selectors: {
							target: '.portfolio',
							filter: '.filter'	
						},
						load: {
							filter: '.app'  
						}     
					});								
				
				}
	
			};
			
			// Run the show!
			filterList.init();
			
			
		});	
	
			function goToTop()
{

    var t;
    t=setInterval(function() {
        if(window.scrollY>0)
        {window.scrollBy(0, -100)}
        else{clearInterval(t);}
        
    },20)  
}
		$(document).ready(function() {
			$("#content-slider").lightSlider({
				speed:500,
                auto:true,
                loop:true
                
            });
            
		});
				$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
$(document).ready(function(){
	$('.Hide').hide();
	var Hide1=$('.Hide1').html();
	var Hide2=$('.Hide2').html();
	var Hide3=$('.Hide3').html();
	var Hide4=$('.Hide4').html();
	var arr=[Hide1,Hide2,Hide3,Hide4];
	setInterval(function() {
    var i = Math.round((Math.random()) * arr.length);
    if (i == arr.length) --i;
    $(".HomeCenter").html(arr[i]);
}, 5 * 1000);

$('.btn').slideUp();
window.addEventListener("scroll",function() { 
   if(window.scrollY > 120) {
      $('.btn').slideDown();
   }
   else {
      $('.btn').slideUp();
   }
},false);	
});
