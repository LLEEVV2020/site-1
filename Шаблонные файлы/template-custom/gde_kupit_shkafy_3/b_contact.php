
        
          <div class="b-contact">
        <div class="container">
            <h2>
                КОГДА ЗАМЕРЩИК МОЖЕТ ПРИЕХАТЬ К ВАМ?
            </h2>

            <div class="b-contact_underzag">
                Если у Вас нет возможности посетить наш офис, наш специалист приедет к вам для консультации и замера абсолютно бесплатно*! В удобные для вас день и время! 
                
                *В радиусе 50 км <?php echo get_option('my_city_ot'); ?>.
            </div>

            <div class="b-contact__cityform">
                <div class="row">

                        <script>
                            var anyCityInInput = "yes";
                        </script>
                                                

                   
                    <div class="col-md-12 flex-container">
                        <div class="b_contact_input_city">
                            <input type="text" id="call_zamershik_name_city" placeholder="Ваш город">
                        </div>
                        <div class="b_contact_but_city"  data-toggle="modal" data-target="#kupitDeshevle">УЗНАТЬ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.b-contact -->

<div class="b-cont-wrap">
    <form action="//<?php echo $_SERVER['SERVER_NAME']; ?>/php/mail.php" method="POST" class="container">
        <input type="hidden" name="lang" value="Бесплатная консультация" />
        <input type="hidden" name="name_my_mail" value="<?php if(empty(get_option('my_mail')) ){
              echo "zakaz@shkaf-tseny.ru";
          }
          else{
              echo get_option('my_mail'); 
          }  ?>" />
        
        
        <h3>Выезд замерщика на Ваш адрес возможен сегодня до 21:00</h3>
        <div class="es13_block">
            <div class="text-wr">
                Введите свой номер телефона. Мы Вам перезвоним для уточнения времени!
            </div>
            <div class=" es13_input form-group">
                <input type="text" class="phonemask" placeholder="Ваш телефон" data-validation="required" id="form_text_9" name="phone" value="" size="0">
            </div>
            <div class="es13_item ">
                <button class="red-pink-button" type="submit">ЖДУ ЗВОНОК</button>
            </div>
        </div>
    </form>
</div>