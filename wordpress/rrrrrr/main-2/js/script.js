$(function() {
    var $section = $('.m_section');
    $section.addClass('back').append('<span></span>');
    $section.append('<div class="but"><span></span><span></span><span></span><p class="klic_hide">свернуть</p></div>');
    $('.zakaz_vp').css({
        'margin-top': '0px'
    });
    $(document).scroll(function() {
        $('.zakaz_vp').css({
            'margin-top': '0px'
        });
    });
    $('.but').click(function() {
        var $head = $('.back');
        if ($head.css('width') == '100px') {
            $('.m_section>span').css({
                'opacity': '1',
                'width': '100%'
            });
            $head.stop(true).animate({
                'width': '100%'
            }, 200);
            $('.menu').css({
                'display': 'block'
            });
            $('.klic_hide').fadeIn(2000);
            $('.but span').css({
                'margin-bottom': '2px',
                'height': '2px',
                'opacity': '1'
            }, 500);
            $('.but').css({
                'right': '5px'
            }, 500);
        } else {
            $head.stop(true).animate({
                'width': '100px'
            }, 200);
            $('.menu').css({
                'display': 'none'
            });
            $('.m_section>span').css({
                'opacity': '0.04',
                'width': '0'
            });
            $('.klic_hide').fadeOut(500);
            $('.but span').css({
                'margin-bottom': '4px',
                'height': '4px',
                'opacity': '0.5'
            }, 500);
            $('.but').css({
                'right': '50px'
            }, 500);
        }
        return false
    });
    $(document).ready(function() {
        if ($(window).width() <= '1195') {
            $('.tel .call').css({
                'display': 'none'
            });
            $('.top_menu').append('<div class="tel"><div class="call">с 9 до 23 без выходных!</div></div>');
            $('.top_menu').addClass('call_app');
            $('.top_menu .tel .call').css({
                'display': 'block'
            });
            return this;
        }
    });
    $(window).resize(function() {
        if ($(window).width() <= '1195') {
            $('.call').css({
                'display': 'none'
            });
            $('.top_menu .call').css({
                'display': 'block'
            });
            if ($('.top_menu').is('.call_app')) {} else {
                $('.top_menu').append('<div class="tel"><div class="call">с 9 до 23 без выходных!</div></div>');
            }
        } else {
            $('.call').css({
                'display': 'block'
            });
        }
    });
    $(window).resize(function() {
        $(document).ready(function() {
            if ($(window).width() <= '945') {
                var $ellow = $('.s_oi .opl_dst');
                $('.s_oi .opl_dst .i_adr').css({
                    'z-index': '999'
                });
                $('.s_oi .opl_dst .od').css({
                    'left': '0'
                });
                return this;
            } else {
                $('.ellow_line').css({
                    'display': 'none'
                });
                $('.s_oi .opl_dst .od').css({
                    'left': '578px',
                    'padding-bottom': '5px'
                });
                $('.s_oi .opl_dst .od:first-child').css({
                    'left': '156px',
                    'padding-bottom': '5px'
                });
            }
        });
    });
    $(document).ready(function() {
        if ($(window).width() <= '945') {
            var $ellow = $('.s_oi .opl_dst');
            $('.s_oi .opl_dst .i_adr').css({
                'z-index': '999'
            });
            $('.s_oi .opl_dst .od').css({
                'left': '0',
                'padding-bottom': '15px'
            });
            return this;
        } else {
            $('.ellow_line').css({
                'display': 'none'
            });
            $('.s_oi .opl_dst .od').css({
                'left': '578px',
                'padding-bottom': '5px'
            });
            $('.s_oi .opl_dst .od:first-child').css({
                'left': '156px',
                'padding-bottom': '5px'
            });
        }
    });
    $(document).ready(function() {
        if ($(window).width() <= '1195') {
            $('.button_menu').click(function() {
                var $menu = $('.s-top_menu .top_menu');
                if ($menu.css('display') == 'none') {
                    $menu.css({
                        'display': 'block'
                    });
                    $('.m_section').addClass('dmd').css({
                        'top': '140px'
                    });
                    $('.s-top').css({
                        'height': '135px'
                    });
                } else {
                    $menu.css({
                        'display': 'none'
                    });
                    $('.m_section').css({
                        'top': '70px'
                    });
                    $('.s-top').css({
                        'height': 'auto'
                    });
                }
            });
            return this;
        } else {}
    });
    $(document).ready(function() {
        if ($(window).width() <= '700') {
            $('.button_menu').click(function() {
                var $menu = $('.s-top_menu .top_menu');
                if ($menu.css('display') == 'none') {
                    $menu.css({
                        'display': 'none'
                    });
                    $('.s-top').css({
                        'height': 'auto'
                    });
                    $('.m_section').css({
                        'top': '70px'
                    });
                } else {
                    $menu.css({
                        'display': 'block'
                    });
                    $('.s-top').css({
                        'height': '275px'
                    });
                    $('.m_section').css({
                        'top': '270px'
                    });
                }
            });
            return this;
        } else {}
    });
    $(document).ready(function() {
        if ($(window).width() <= '1220') {
            $('.otz_right .zakaz_vp').css({
                'width': '300px'
            });
            $('.otz_right .zakaz_vp h1').css({
                'font-size': '21px'
            });
            $('.s24 .zakaz_vp .v_name').css({
                'left': '64px',
                'top': '73px',
                'width': '160px'
            });
            $('.s24 .zakaz_vp .v_tel').css({
                'left': '64px',
                'top': '128px',
                'width': '160px'
            });
            $('.s24 .zakaz_vp .v_text').css({
                'left': '20px',
                'top': '184px',
                'width': '255px',
                'height': '130px'
            });
            $('.s24 .zakaz_vp .btn').css({
                'left': '53px',
                'bottom': '189px'
            });
            return this;
        }
    });
    $(document).ready(function() {
        if ($(window).width() <= '880') {
            $('.s_oi .opl_dst .od').css({
                'left': '0px'
            });
            return this;
        }
    });
    $(document).ready(function() {
        if ($(window).width() <= '500') {
            $('.akcii_block').css({
                'padding-top': '40px'
            });
            return this;
        }
    });
    $(window).resize(function() {
        if ($(window).width() >= '795') {
            $('.but').hide();
            if ($('.m_section').is('.dmd')) {
                $('.m_section').css({
                    'top': '70px'
                });
            }
        } else {
            $('.but').show();
        }
        return false
    });
    $(window).resize(function() {
        if ($(window).width() >= '1195') {
            $('.s-top_menu .top_menu').hide(500);
        } else {}
        return false
    });
    $(window).resize(function() {
        if ($(window).width() >= '1195') {
            $('.but').hide();
        } else {
            $('.but').show();
        }
        return false
    });
    var maxH = 0;
    var $columns = $('.s5 .content');
    $columns.each(function() {
        maxH = Math.max(maxH, $(this).height());
    });
    $('.section .s5').each(function() {
        $(this).height(maxH);
    });
    $(window).resize(function() {
        var maxH = 0;
        var $columns = $('.s5 .content');
        $columns.each(function() {
            maxH = Math.max(maxH, $(this).height());
        });
        $('.section .s5').each(function() {
            $(this).height(maxH);
        });
    });
});

$('.tel .call').click(function(){
	$('.popup1 .pop_type').val('call');
	$('.popup1 .header').html('МЫ ПЕРЕЗВОНИМ ЧЕРЕЗ 3 МИНУТЫ!');
	$('#hide-layout, #popup1').fadeIn(300);
})

$('.vyzov .zam a').click(function(){
	$('.popup1 .pop_type').val('zamer');
	$('.popup1 .header').html('ЗАПИСЬ НА <span class="yellow">БЕСПЛАТНЫЙ</span> ЗАМЕР!');
	$('#hide-layout, #popup1').fadeIn(300);
})

var a=0;

		$(window).scroll(function() {
			if (($(this).scrollTop() > 500) && ($(this).scrollTop() < $(document).height()-1000) ) {
			//if (($(this).scrollTop() > 500)) {
				if (a==0){
				$('.scroll').animate({right:15});
				a=1;
				}
			} else {
				if (a==1)
				{
					$('.scroll').animate({right:-200});
					a=0;
				}
			}
		});

var b=0;

		$(window).scroll(function() {
			if (($(this).scrollTop() > 500) && ($(this).scrollTop() < $(document).height()-1000) ) {
			//if (($(this).scrollTop() > 500)) {
				if (b==0){
				$('.toptop').animate({left:15});
				b=1;
				}
			} else {
				if (b==1)
				{
					$('.toptop').animate({left:-200});
					b=0;
				}
			}
		});


$(".toptop").click(function ()
	{
		$("body,html").animate({
			scrollTop: 0	}, 100);
			return false
	});


$(document).on('click', ".r_color .c_border",function(){
	$('.r_color .c_border').removeClass('selected');
	$(this).addClass('selected');
	var id=$(this).attr("id");
	if (id!="rc")
	{
		$(".okno .plastik").css("background","url('img/r_color/"+id+"_o.png') no-repeat scroll left center");
	}
	else
	{
		$(".okno .plastik").css("background",'none');
	}

})

$(document).on('click', ".r_thing .c_border",function(){
	$('.r_thing .c_border').removeClass('selected');
	$(this).addClass('selected');
	var id=$(this).attr("id");
	if (id!="rc")
	{
		$(".okno .ruchka").css("background","url('img/r_thing/"+id+"_o.png') no-repeat scroll left center");
	}
	else
	{
		$(".okno .ruchka").css("background",'none');
	}

})

//$(".v_tel").inputmask("+7 (999) 999-99-99");
$('#callback-send2').click(function(){
					//var name=$('.name-2').val();
					var tel=$('.v_tell').val();
	//alert(name + ' ' + tel);
				//Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'callback2' }]);
					$.ajax({
						   type: "POST",
						   url: "main-2/send.php",
						   data: "name="+name+"&tel="+tel+'&f=callback2',
						   success: function(data){
							if (data=='ok')
							{

							//	alert ('Заявка успешно отправлена');
								$('.v_name').val('');
								$('.v_tel').val('');
								$('#hide-layout').fadeIn(300);
								$('#spasibo').fadeIn(300);
								SendComagic(name,tel,'callback2','');
							}
							else
							{
									alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
							};

							}
					 });


				});

$(function(){

	var note = $('#note'),
		ts = new Date(2015,11,26),
		newYear = true;

	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}

	$('#countdown1').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

		//	message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}

			note.html(message);
		}
	});

});

$(document).ready(function() {
    $('#responsive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
  });

$(document).ready(function(){
				$('#otz_carousel').boutique({
				container_width:800,
				front_img_width:164,
				hovergrowth:0,
				autoplay: true,
				autoplay_interval:5000,
				stop_autoplay_on_click: true,
				behind_topmargin:80,
				behind_opacity:1,
				behind_size:0.7,
				back_opacity:1,
				back_size:0.7,
				back_topmargin:120,
				});
			$('#otz_carousel .frame3 img').attr('src','img/otz/'+($('#otz_carousel .frame3 img').attr('id')+'.png'));
			$('#otz_carousel .frame3 .otz_prof').removeClass('hide');
			$('#otz_carousel .frame3 .otz_name').css('color','#000');
			$('.otz .otz1').removeClass('hide');
			});
function pre_move_callback(anchor, instance, framenumber){
			//	alert('Callback example: Frame '+framenumber+', with the link "'+anchor+'", moved forward (in Boutique with an ID of "'+instance+'").');

				var len=$("#otz_carousel > li").length/2;

				for  (var i=1; i<=len; i++){
					$('#otz_carousel .frame'+i+' img').attr('src','img/otz/'+($('#otz_carousel .frame'+i+' img').attr('id')+'_b.png'));
					$('#otz_carousel .frame'+i+' .otz_prof').addClass('hide');
					$('#otz_carousel .frame'+i+' .otz_name').css('color','#999');
					$('.otz .otz'+i+'').addClass('hide');
				}

			}
function move_callback(anchor, instance, framenumber){
				$('#otz_carousel .frame3 img').attr('src','img/otz/'+($('#otz_carousel .frame3 img').attr('id')+'.png'));
				$('#otz_carousel .frame3 .otz_prof').removeClass('hide');
				$('.otz .'+$('#otz_carousel .frame3 img').attr('id')+'').removeClass('hide');
				$('#otz_carousel .frame3 .otz_name').css('color','#000');
			}

 $(document).ready(function(){
	  // $("a[rel^='prettyPhoto']").prettyPhoto();
	    $("div[rel^='prettyPhoto'] a").click(function(){
			return false;

		})
	  $("div[rel^='prettyPhoto'] a").prettyPhoto();
    });

	$(document).on('click','.carousel-button-left',function(){
		//$("a[rel^='prettyPhoto']").prettyPhoto();
		$("div[rel^='prettyPhoto'] a").prettyPhoto();
	});

	$(document).on('click','.carousel-button-right',function(){
		//$("a[rel^='prettyPhoto']").prettyPhoto();
		$("div[rel^='prettyPhoto'] a").prettyPhoto();
	});

$(document).ready(function() {
	// $("body").css("overflow", "hidden");

var wblocks = $('.w_blocks').children();
	wblocks.addClass('hidden');

	var wblocks = $('.stroki').children();
	wblocks.addClass('hidden');
})

$(function() {
		//	$('#popup1').hide();
		//	$('#hide-layout').hide();
			alignCenter($('#popup1'));
			alignCenter($('#spasibo'));
			alignCenter($('#pozdr'));
			$(window).resize(function() {
			alignCenter($('#popup1'));
			alignCenter($('#spasibo'));
			alignCenter($('#pozdr'));
			})



			//$('#btn-close, #hide-layout').click(function() {
			$('#hide-layout').click(function() {

			$('#hide-layout, #popup1').fadeOut(300);

			$('.pop_name').val('Ваше имя');
			$('.pop_tel').val('Телефон');
			})


			$('#callback-spasibo, #hide-layout').click(function() {
			$('#hide-layout, #spasibo').fadeOut(300);
			//$('.pop_name').css('color','#cccccc');
			//$('.pop_tel').css('color','#cccccc');
			$('.pop_name').val('');
			$('.pop_tel').val('');
			})

			function alignCenter(elem) {
			elem.css({
			left: ($(window).width() - elem.width()) / 2 - 10 + 'px',
			top: 50 + 'px'
			})
			}
			})

$(function() {
				/* $('#callback-send1').click(function()
				{

					var name=$('.pop_name').val();
					var tel=$('.pop_tel').val();
					var type=$('.pop_type').val();
					
					

					//Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: type }]);
					$.ajax({
						   type: "POST",
						   url: "main-2/forms.php",
						   data: "name="+name+"&tel="+tel+'&f='+type,
						   success: function(data){
							if (data=='ok')
							{

								//alert ('Заявка успешно отправлена');
								$('#popup1').fadeOut(300);
								$('.pop_name').val('');
								$('.pop_tel').val('');
								$('#spasibo').fadeIn(300);
								SendComagic(name,tel,type,'');

								Comagic.sitePhoneCall( {phone:tel}, function (){} );
							//	alert (callback);
							}
							else
							{
									alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
							};

							}
					 });
					

				}); */


$('#callback-send1').click(function(){

	var name=$('.pop_name').val();
	var tel=$('.pop_tel').val();
	var type=$('.pop_type').val();
if($('.pop_tel').val()=='' || $('.pop_tel').val()=='Телефон'){
		alert('Заполните необходимые поля!');
	} else {
			var name=$('.pop_name').val();
					var tel=$('.pop_tel').val();
					var type=$('.pop_type').val();
					
					

					//Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: type }]);
					$.ajax({
						   type: "POST",
						   url: "main-2/forms.php",
						   data: "name="+name+"&tel="+tel+'&f='+type,
						   success: function(data){
							if (data=='ok')
							{

								//alert ('Заявка успешно отправлена');
								$('#popup1').fadeOut(300);
								$('.pop_name').val('');
								$('.pop_tel').val('');
								$('#spasibo').fadeIn(300);
								SendComagic(name,tel,type,'');

								Comagic.sitePhoneCall( {phone:tel}, function (){} );
							//	alert (callback);
							}
							else
							{
									alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
							};

							}
					 });
	}
	
});// #callback-send1



$('#callback-pozdr').click(function()
				{

					$.cookie('was', true, {
						expires: 1,
						path: '/'
					  });
					var name=$('.pozdr_name').val();
					var tel=$('.pozdr_tel').val();

					//Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'pozdr' }]);
					$.ajax({
						   type: "POST",
						   url: "main-2/forms.php",
						   data: "name="+name+"&tel="+tel+'&f=pozdr',
						   success: function(data){
							if (data=='ok')
							{

							//	alert ('Заявка успешно отправлена');
								$('.pozdr_name').val('');
								$('.pozdr_tel').val('');
								$('#pozdr').fadeOut(300);
								$('#spasibo').fadeIn(300);
								SendComagic(name,tel,'pozdr','');
							}
							else
							{
									alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
							};

							}
					 });


				});



		$('.pop_name').blur(function()
		{
			if 	($('.pop_name').val()=='')
			{
				$('.pop_name').val('Ваше имя');

			}
		});
		$('.pop_tel').blur(function()
		{
			if 	($('.pop_tel').val()=='')
			{
				$('.pop_tel').val('Телефон');

			}
		});



		$('.v_name_').blur(function()
		{
			if 	($('.v_name').val()=='')
			{
				$('.v_name').val('Ваше имя');

			}
		});
		$('.v_tel_').blur(function()
		{
			if 	($('.v_tel').val()=='')
			{
				$('.v_tel').val('Телефон');

			}
		});


	});

$(function(){
	if (!$.cookie('was'))
	{

		$( "#pozdr" ).delay( 30000 ).fadeIn( 400 );
		$( "#hide-layout" ).delay( 30000 ).fadeIn( 400 );


			setTimeout(timer,30000);


	}


})


function timer(){
 var obj=document.getElementById('sec');
 obj.innerHTML--;

 
 if(obj.innerHTML==0){$('.pozdr .f-close').click();}
 else{setTimeout(timer,1000);}
}

function pozdr_close(){
	$('#pozdr .f-close').click(function(){
		$( "#pozdr" ).fadeOut( 400 );
			$( "#hide-layout" ).fadeOut( 400 );

	});
}


$('.popup1 .f-close').click(function(){
	$( "#popup1" ).fadeOut( 400 );
		$( "#hide-layout" ).fadeOut( 400 );

})
spasibo();
function spasibo(){
		$('#results #spasibo').fadeOut(300);
	}
function close_form(){
		$('.hideForm, .popup-section,.popup-section > div').fadeOut(250);
	}

/*!
 * Template-specific ProdesCode.com
 * Copyright Y2015
 */
jQuery(document).ready(function($){
	pozdr_close();
	$('.s_menu_sign').click(function(){
		$('.es_top_menu .menu').slideToggle(500);
	});
	
	$('.iosSlider3').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: false,
					//onSlideComplete: slideComplete3,
					navNextSelector: $('.next3'),
				  navPrevSelector: $('.prev3'),
				});
	
	$('.amodal').click(function(){
		$('.modal-toptel').fadeIn(0);
	});
	
	$('.modal-toptel .closebut').click(function(){
		$('.modal-toptel').fadeOut(0);
	});
	
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

