/*!
 * Template-specific ProdesCode.com
 * Copyright Y2015
 */
jQuery(document).ready(function(){
	 
	$(".amodal").click(function () { 
		$('.tel').parent().removeClass('animated'); 
		$('.tel').parent().removeClass('shake'); 
		$('.es1_inpname').addClass('noshake'); 
	});	
	
	$('body').on('hidden.bs.modal', '.modal', function () {
		$('.es1_inpname').removeClass('noshake');
	});
	
	
								$(".pop_butzakazat").click(function () { 
							      $('.tel').parent().removeClass('animated'); 
							      $('.tel').parent().removeClass('shake'); 
							      $('.es1_inpname').stop(); 
							    });

								$(".es1_but").click(function () { 
							      $('.es1_inpname').removeClass('animated'); 
							      $('.es1_inpname').removeClass('shake'); 
							    });
							    
							    $(".es3_form_but").click(function () { 
							      $('.es3_form_input_tel').removeClass('animated'); 
							      $('.es3_form_input_tel').removeClass('shake'); 
							    });
							    
							    $(".es8_form_but").click(function () { 
							      $('.es8_input').removeClass('animated'); 
							      $('.es8_input').removeClass('shake'); 
							    });
							    
							    $(".es10_form_but").click(function () { 
							      $('.es10_input').removeClass('animated'); 
							      $('.es10_input').removeClass('shake'); 
							    });
	
	
	
	
	$(".es3_b_but_hot").click(function () { 
	  $(".es3_bg_balc1").css("display","block");
	  $(".es3_bg_balc2").css("display","none");
      $(".es3_b_but_cold").removeClass("es3_hot_actbut_cold");
      $(this).addClass("es3_hot_actbut_hot");
      $(".es3_cost_balc1").css("display","block");
	  $(".es3_cost_balc2").css("display","none");      
    });
    
    $(".es3_b_but_cold").click(function () { 
	  $(".es3_bg_balc2").css("display","block");
	  $(".es3_bg_balc1").css("display","none");
      $(".es3_b_but_hot").removeClass("es3_hot_actbut_hot");
      $(this).addClass("es3_hot_actbut_cold");
      $(".es3_cost_balc2").css("display","block");
	  $(".es3_cost_balc1").css("display","none");
    });
	
	

 
	
});