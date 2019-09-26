$(function(){

/*****************/

$('.close-button').click(function(){
    $('.modal-overlay').toggleClass("closed");
    $('.callback_form').addClass("closed");
    $('.callback_day').addClass("closed");
    $('.stars').addClass("closed");
    $('.procent').addClass("closed");

});

$('#s_close, .modal-overlay').click(function(){

    $('.f_spasibo').toggleClass("closed");
    $('.modal-overlay').toggleClass("closed");

});   
    
// Вам перезвонить?
 $('#callback1').click(function(){

        $(".callback_form h2").html('Вам перезвонить?');
        $(".callback_form #send").html('Перезвонить');
        $(".callback_form .sender").html('call');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
	
// Вам перезвонить?
 $('#callback2').click(function(){

        $(".callback_form h2").html('Вам перезвонить?');
        $(".callback_form #send").html('Перезвонить');
        $(".callback_form .sender").html('call');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });


// Замерщик
 $('.zamer_btn1').click(function(){

        $(".callback_form h2").html('Весплатный вызов замерщика!');
        $(".callback_form #send").html('Вызвать замерщика');
        $(".callback_form .sender").html('zamer');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
	
	
// Заказ
 $('.comp_zakaz').click(function(){

        $(".callback_form h2").html('Весплатный вызов замерщика!');
        $(".callback_form #send").html('Вызвать замерщика');
        $(".callback_form .sender").html('dasha_zakaz_opt_cena');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    
// В рассрочку
 $('.rassr_send').click(function(){

        $(".callback_form h2").html('Хотите окно в рассрочку?');
        $(".callback_form #send").html('Узнать условия');
        $(".callback_form .sender").html('o_rassr');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    
// Беседки
 $('.bes_send').click(function(){

        $(".callback_form h2").html('Цены на беседки, веранды, террасы');
        $(".callback_form #send").html('Узнать цену');
        $(".callback_form .sender").html('bes');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    
// Заказать со скидкой
 $('.skidrf_send').click(function(){

        $(".callback_form h2").html('Заказать со скидкой');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('sk');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    
// Заказать мебели по акции
 $('.ac_send').click(function(){

        $(".callback_form h2").html('Заказать по акции');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('ak');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    
// Вызов менеджера
 $('.manager_send').click(function(){

        $(".callback_form h2").html('Выберите удобное время');
        $(".callback_form #send").html('Вызвать менеджера');
        $(".callback_form .sender").html('manager');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    

// Заказать со скидкой
 $('.okno_send').click(function(){

        $(".callback_form h2").html('Заказать со скидкой');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('calc_o');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
    
// Заказать со скидкой
 $('.balkon_send').click(function(){

        $(".callback_form h2").html('Заказать со скидкой');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('calc_b');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    });
  
    
/*1. первая штука формы*/ /*2 поля*/
 $('.price_send2').click(function(ev){

     
    var name=$('#rks_name').val();
    var tel=$('#rks_phone').val();
    var type=$('#rks_price').val();
    var hiddenphone=$('#rks_hidden_tel').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#rks_name').val('');
                $('#rks_phone').val('');

                $('#kupitDeshevle').css({'display' : 'none'});
                $('.modal-backdrop.fade.in').css({'display' : 'none'});
                $('.red-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});    
    
/*2. Письмо директору*/ /*3 поля*/
 $('.ceo_send').click(function(ev){

    var name=$('#ceo_name').val();
    var tel=$('#pismo_directoru_but').val();
    var type=$('#ceo_price').val();
    var hiddenphone=$('#ceo_hidden_tel').val();
    var ceotextarea=$('#ceo_textarea').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms2.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone,
               'ceotextarea' : ceotextarea
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#ceo_name').val('');
                $('#pismo_directoru_but').val('');
                $('#ceo_textarea').val('');

                //$('#kupitDeshevle').css({'display' : 'none'});
                //$('.modal-backdrop.fade.in').css({'display' : 'none'});
                $('.red-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});      

/*3. смс*/    /*1 поле*/
$('.sms_price').click(function(ev){

    var tel=$('#form_text_11').val();
    var type=$('#sms_price').val();
    var hiddenphone=$('#sms_hidden_tel').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms3.php",
       data: { 'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#sms_phone').val('');

                $('.red-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});  

/*4. ДОПОЛНИТЕЛЬНАЯ СКИДКА 5% ПРИ ЗАКАЗЕ ЧЕРЕЗ САЙТ*/ /*2 поля*/
/*ПРИКРЕПИТЬ ФАЙЛ нужно сделать*/
 $('.dopskidka_send').click(function(ev){

     
    var name=$('#dopskidka_name').val();
    var tel=$('#dopskidka_phone').val();
    var type=$('#dopskidka_price').val();
    var hiddenphone=$('#hidden_tel_def').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#dopskidka_name').val('');
                $('#dopskidka_phone').val('');

                
                $('.red-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});   
    
/*5. счётчик*/    /*1 поле*/
$('.chetchik_price').click(function(ev){

    var tel=$('#chetchik_phone').val();
    var type=$('#chetchik_price').val();
    var hiddenphone=$('#hidden_tel_def').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms3.php",
       data: { 'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#chetchik_phone').val('');

                $('.red-pink-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});     
    
    
/*6. бесплатная консультация*/    /*1 поле*/
$('.besplatnaia-konsylt').click(function(ev){

    var tel=$('#besplatkonsylt_phone').val();
    var type=$('#besplatkonsylt_price').val();
    var hiddenphone=$('#hidden_tel_def').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms3.php",
       data: { 'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#besplatkonsylt_phone').val('');

                $('.red-pink-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});   
    
/*7. ЛУЧШИЕ ЦЕНЫ НА БАЛКОНЫ*/    /*1 поле*/
$('.lychie-ceni').click(function(ev){

    var tel=$('#lychie-ceni-phone').val();
    var type=$('#lychie-ceni_price').val();
    var hiddenphone=$('#hidden_tel_def').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms3.php",
       data: { 'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#lychie-ceni-phone').val('');

                $('.red-pink-button').css({'pointer-events' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
}); 
    

/**
 * Модальные окна
 */
/*10. Не уходите без подарка*/ /*2 поля*/
$('.ne_yhodite').click(function(ev){

    var tel=$('#ne_yhodite-phone').val();
    var type=$('#ne_yhodite_price').val();
    var hiddenphone=$('#hidden_tel_def').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms3.php",
       data: { 'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#ne_yhodite-phone').val('');

                $('.red-button').css({'pointer-events' : 'none'});
                $('#gift').css({'display' : 'none'});
                $('.modal-backdrop.fade.in').css({'display' : 'none'});
                
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
}); 

/*11. ПОЗДРАВЛЯЕМ! Вы стали 100 посетителем сайта!*/ /*2 поля*/
$('.vi_stali').click(function(ev){

     
    var name=$('#vi_stali_name').val();
    var tel=$('#vi_stali_phone').val();
    var type=$('#vi_stali_price').val();
    var hiddenphone=$('#hidden_tel_def').val();

    $.ajax({
       type: "POST",
       url: "/php2/forms.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#vi_stali_name').val('');
                $('#vi_stali_phone').val('');

                
                $('.red-button').css({'pointer-events' : 'none'});
                $('#happy').css({'display' : 'none'});
                $('.modal-backdrop.fade.in').css({'display' : 'none'});
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
}); 

$('#send').click(function(ev){

    var name=$('#call_name').val();
    var tel=$('#call_tel').val();
    var type=$('.sender').html();

    $.ajax({
       type: "POST",
       url: "/php2/forms.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type
             },
            success: function(data){ 
            if (data=='ok')
            {

                $('#call_name').val('');
                $('#call_tel').val('');
                $('.callback_form').toggleClass("closed");
                $('.stars').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");
            }
            else
            {

                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
    });
});
    
    
    
    
    
 $('#rks_btn').click(function(ev){

    var name=$('#rks_name').val();
    var tel=$('#rks_phone').val();
    var type='rsk';

    $.ajax({
       type: "POST",
       url: "/php2/forms.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type
             },
            success: function(data){ 
            if (data=='ok')
            {

                $('#rks_name').val('');
                $('#rks_phone').val('');

                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");
            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };

        } 
     });

});
    
 $('.price_send').click(function(ev){

    var name='price';
    var tel=$('#fp_tel').val();
    var type='price';

    $.ajax({
       type: "POST",
       url: "/php2/forms.php",
       data: { 'name' : name,
               'tel': tel,
               'f' : type
             },
       success: function(data){ 
            if (data=='ok')
            {
                $('#rks_name').val('');
                $('#rks_phone').val('');

                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");

            }
            else
            {
                alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
            };
        } 
     });
});


 $('#send_day').click(function(ev){

        var name=$('#d_call_name').val();
        var tel=$('#d_call_tel').val();
        var type='day';

        $.ajax({
           type: "POST",
           url: "/php2/forms.php",
           data: { 'name' : name,
                   'tel': tel,
                   'f' : type
                 },
           success: function(data){ 
                if (data=='ok')
                {

                    $('#d_call_name').val('');
                    $('#d_call_tel').val('');
                    $('.callback_day').toggleClass("closed");
                    $('.procent').toggleClass("closed");
                    $('.f_spasibo').toggleClass("closed");
                }
                else
                {
                    alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                };

            } 
         });
    });
});



