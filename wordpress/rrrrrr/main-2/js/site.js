function ajax() { //Ajax отправка формы
	var msg = $(".hideForm form").serialize();
	$.ajax({
		type: "POST",
		url: "main-2/send.php",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}

function ajax1() { //Ajax отправка формы
	var msg = $(".form-zahvat-1 form").serialize();
	$.ajax({
		type: "POST",
		url: "main-2/send.php",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}
function ajax2() { //Ajax отправка формы
	var msg = $(".form-zahvat-2 form").serialize();
	$.ajax({
		type: "POST",
		url: "main-2/send.php",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}
function ajax3() { //Ajax отправка формы
	var msg = $(".form-zahvat-3 form").serialize();
	$.ajax({
		type: "POST",
		url: "main-2/send.php",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}

function myHide(){
setTimeout(function(){$('.resultsOpen').fadeOut(3000)},3000);  //3000 = 30 секунд
		//$('.hideForm').css('display', 'block');
		//$('.resultsOpen').animate({'opacity':0},1000);
}
function myHide2(){
	var inp1 = $(".form-open-block .name").val();
	var inp2 = $(".form-open-block .phone").val();
	var inp3 = $(".form-open-block .email").val();
	if(inp1=="" || inp2=="" || inp3==""){
		$('.hideForm').css('display','block');
		//$('.foneBg').css('display','block');
	} 
		else {
			setTimeout(function(){$('.resultsOpen').fadeOut(3000)},3000);  //3000 = 30 секунд
			$('.hideForm').fadeOut(300);
			//$('.foneBg').css('display','none');
		}
}

function click_button(){
	$('span.button, a.button').click(function(e){
		e.preventDefault();
		var $goal_popup_form_1 = "yaCounter20563741.reachGoal ('Nazvanie_Identifikatora'); return true;";
		
		var top_form = $(window).scrollTop();
		var form_id = $(this).attr('data-form-id');
		
		var t1 = $(this).attr('data-name');
		var t2 = $(this).attr('data-subname');
		var t2_2 = $(this).attr('data-form');
		
		var data_i = $(this).attr('data-i');
			
		var form = '<form id="'+ form_id +'" method="post" action="javascript:void(0);" onSubmit="ajax();">'+
									'<div class="name_form"></div>'+
									'<div class="subname_form"></div>'+
									'<p class="label col-lg-12"><span class="inpname"><input type="text" name="name" class="name" placeholder="Ваше имя" /></span></p>'+
									'<p class="label col-lg-12"><span class="inpname"><input type="tel" name="tel" class="phone" placeholder="Ваш телефон" /></span></p>'+
									'<input type="hidden" name="input-name-form" value="" class="input-name-form">'+
									'<p class="submit"><button type="submit" onClick="myHide2()"><span>отправить</span></button></p>'+
									'<a href="javascript:void(0);" class="close" onClick="close_form();"></a>'+
								'</form>';
		
		if(data_i == 1){
			form = '<form id="'+ form_id +'" method="post" action="javascript:void(0);" onSubmit="ajax();">'+
									'<div class="name_form"></div>'+
									'<div class="subname_form"></div>'+
									'<p class="label col-12"><span class="inpname"><input type="tel" name="tel" class="phone" placeholder="Ваш телефон" /></span></p>'+
									'<input type="hidden" name="input-name-form" value="" class="input-name-form">'+
									'<p class="submit"><button type="submit" onClick="myHide2()"><span>отправить</span></button></p>'+
									'<a href="javascript:void(0);" class="close" onClick="close_form();"></a>'+
								'</form>';
		}
		
		
		$('.form-open-block').html('');
		$('.form-open-block').html(form);
		
		//mask();
		
		$('.form-open-block .name_form').text(t1);
		$('.form-open-block .input-name-form').val(t2_2);
		$('.form-open-block .subname_form').text(t2);
		
		var height_form = $('.form-open-block form').height();
		var marg_top = $(window).height()/2;
		
		$('.form-open-block').css({'height': $(window).height(),
												'position': 'absolute',
												'top': top_form,
												});
		/*$('.form-open-block form').css({
												'top': $(window).height()/2,
												});*/
		$('.hideForm').css({
												'height':$(document).height(),
											});
		$('.hideForm').fadeIn(250);
		
		
		$(".hideForm button").validation(
		$(".hideForm .name").validate({
			test: "blank name", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					//$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('.name').css('border-color', '#ccc');
						//$(".hideForm .name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".hideForm .email").validate({
			test: "blank email", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите email</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('.email').css('border-color', '#ccc');
						$(".hideForm .email").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".hideForm .phone").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('.phone').css('border-color', '#ccc');
						$(".hideForm .phone").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		
		jQuery.fn.notExists = function() { //Проверка на существование элемента
			return $(this).length==0;
		}
		
		//alert(form_id);
	});
}




var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() >= 400) {
 
$('#toTop').fadeIn(800);
 
} else {
 
$('#toTop').fadeOut(800);
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});



// -------------------------------- document ready ----------------------------------------

$(document).ready(function(e) {
	
	//close_form();
	
	$(".form-zahvat-1 button").validation(
		$(".form-zahvat-1 .name").validate({
			test: "blank letters", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-1 .name").css('border-color', '#ccc');
						$(".form-zahvat-1 .name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".form-zahvat-1 .email").validate({
			test: "blank email", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите e-mail</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('.form-zahvat-1 .email').css('border-color', '#ccc');
						$(".form-zahvat-1 .email").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".form-zahvat-1 .phone").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('.form-zahvat-1 .phone').css('border-color', '#ccc');
						$(".form-zahvat-1 .phone").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		
		$(".form-zahvat-2 button").validation(
		$(".form-zahvat-2 .name").validate({
			test: "blank letters", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-2 .name").css('border-color', '#ccc');
						$(".form-zahvat-2 .name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".form-zahvat-2 .email").validate({
			test: "blank email", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите e-mail</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-2 .email").css('border-color', '#ccc');
						$(".form-zahvat-2 .email").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".form-zahvat-2 .phone").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-2 .phone").css('border-color', '#ccc');
						$(".form-zahvat-2 .phone").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		
		$(".form-zahvat-3 button").validation(
		$(".form-zahvat-3 .name").validate({
			test: "blank letters", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-3 .name").css('border-color', '#ccc');
						$(".form-zahvat-3 .name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".form-zahvat-3 .email").validate({
			test: "blank email", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите e-mail</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-3 .email").css('border-color', '#ccc');
						$(".form-zahvat-3 .email").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".form-zahvat-3 .phone").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".form-zahvat-3 .phone").css('border-color', '#ccc');
						$(".form-zahvat-3 .phone").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		// для форм которые уже стояли на сайте
		$(".modal input[type=image]").validation(
		$(".modal .v_name").validate({
			test: "blank letters", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$(".modal .v_name").css('border-color', '#ccc');
						$(".modal .v_name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$(".modal .v_tel").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('.modal .v_tel').css('border-color', '#ccc');
						$(".modal .v_tel").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		
		$("#callback3-3 button").validation(
		$("#callback3-3 .v_name").validate({
			test: "blank letters", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$("#callback3-3 .v_name").css('border-color', '#ccc');
						$("#callback3-3 .v_name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$("#callback3-3 .v_tel").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('#callback3-3 .v_tel').css('border-color', '#ccc');
						$("#callback3-3 .v_tel").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		
		$("#popup1 #callback-send1").validation(
		$("#popup1 .pop_name").validate({
			test: "blank letters", 
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите корректное имя</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$("#popup1 .pop_name").css('border-color', '#ccc');
						$("#popup1 .pop_name").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		}),
		$("#popup1 .pop_tel").validate({
			test: "blank phone",
			invalid: function(){
				if($(this).nextAll(".error").notExists()) {
					//$(this).after('<div class="error">Введите телефон</div>');
					$(this).css('border-color', '#F00');
					$(this).nextAll(".error").delay(2000).fadeOut("slow");
					setTimeout(function () {
						$('#popup1 .pop_tel').css('border-color', '#ccc');
						$("#popup1 .pop_tel").next(".error").remove();
					}, 2600);
				}
			},
			valid: function(){
				$(this).nextAll(".error").remove();
			}
		})
		);
		
		
		jQuery.fn.notExists = function() { //Проверка на существование элемента
			return $(this).length==0;
		}
	
  click_button();
});
// -------------------------------- end document ready ----------------------------------------