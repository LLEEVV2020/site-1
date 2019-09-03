        <div class="es17_bg">
            <div class="container">
                <div class="es17_girl">
                </div>
                
                
                
                <div class="es17_blockbg">
                    <h3>ХОЧУ ТОЧНЫЙ РАСЧЕТ ШКАФА ПРЯМО СЕЙЧАС!</h3>
                    <div class="phone"><?php if(empty(get_option('my_phone')) ){
                                                          echo "8 (917) 122-28-80";
                                                      }
                                                      else{
                                                          echo get_option('my_phone'); 
                                                      }  ?></div>
                    <span>Оставьте свой номер телефона, и мы перезвоним Вам через 5 минут.</span>
                    <!-- ######### Бесплатная консультация ######### -->
                    <!-- ######### Бесплатная консультация ######### -->
                    <!-- ######### Бесплатная консультация ######### -->
                    <form action="//<?php echo $_SERVER['SERVER_NAME']; ?>/php/mail.php" method="POST">
                        <input type="hidden" name="lang" value="Бесплатная консультация" />
                        <input type="hidden" name="name_my_mail" value="<?php if(empty(get_option('my_mail')) ){
                                                          echo "zakaz@shkaf-tseny.ru";
                                                      }
                                                      else{
                                                          echo get_option('my_mail'); 
                                                      }  ?>" />
                        <div class="form-group_input form-group">
                            <input type="text" placeholder="Ваш телефон" class="phonemask" data-validation="required"
                                id="form_text_10" name="phone" value="" size="0" />
                        </div>
                        <button type="submit" class="red-pink-button">Заказать звонок</button>
                    </form>
                    <!-- ######### Бесплатная консультация ######### -->
                    <!-- ######### Бесплатная консультация ######### -->
                    <!-- ######### Бесплатная консультация ######### -->

                    <p class="agreement ">Оставляя свои контактные данные, вы подтверждаете свое совершеннолетие, соглашаетесь на обработку персональных данных в соответствии с <a href="#legal-info" data-toggle="modal"  data-target="#legal-info">Правовой информацией</a></p>
                </div>
            </div>
        </div>
        <!-- /.es17_bg -->