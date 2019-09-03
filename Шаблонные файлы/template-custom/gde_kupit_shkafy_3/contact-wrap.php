<div class="contact-wrap">
            <div class="container">
                <h1>РАБОТАЕМ <?php echo get_option('my_city_po'); ?>:</h1>
                
                <div class="flex-container vcard">
                    <div class="block-item">
                        <div class="block-img">
                            <img src="//<?php echo $_SERVER['SERVER_NAME']; ?>/img/contact-time.png" alt="">
                        </div>
                        <div class="item" style=" font-weight: 500; font-size: 18px; line-height: 22px;">
                        <?php
                        if(empty(get_option('my_adress_1'))){
                            echo "пр. им. газеты Красноярский<br> рабочий, 24, пом. 25";
                        }
                        else{
                            $adress_array=array(
                                "адрес 1"=>"my_adress_1",
                                "адрес 2"=>"my_adress_2");
    
                            foreach($adress_array as $adress_item) {
                                echo "<p>";
                                echo get_option($adress_item);
                                echo "</p>";
                            }
                        }

                        

                        ?>


                            
                        </div>
                    </div>
                    <div class="block-item">
                        <div class="block-img">
                            <img src="//<?php echo $_SERVER['SERVER_NAME']; ?>/img/contact-tel.png" alt="">
                        </div>
                        <div class="item">
                            <div class="tel"> <abbr class="value" title="8 (917) 122-28-80"><?php if(empty(get_option('my_phone')) ){
                                                          echo "8 (917) 122-28-80";
                                                      }
                                                      else{
                                                          echo get_option('my_phone'); 
                                                      } ?></abbr></div>
                            <!--<p class="email"><?php if(empty(get_option('my_mail')) ){
                                                          echo "zakaz@shkaf-tseny.ru";
                                                      }
                                                      else{
                                                          echo get_option('my_mail'); 
                                                      } ?></p>-->
                            
                            
                            <p class="workhours">Звоните с 8:00 до 23:00</p>
                            
                        </div>
                    </div>
                </div>


            </div>
        </div>

<style>
    .contact-wrap .block-item .item p{
        margin: 5px 0;
    }
    .contact-wrap .block-item .item p + p{
        margin-top: 15px;
    }
    .contact-wrap .flex-container .block-item{
        -webkit-box-flex: 0;
    -ms-flex: 0;
        flex: 0;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
    }
</style>