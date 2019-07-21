<!--work area-->
<div class="container top_block ">

    <div class="top_block__logo" itemscope itemtype="http://webmaster.yandex.ru/vocabularies/term-def.xml">
       	<?php if ( has_custom_logo() ) : ?>
		    <?php 
                /*если забыли добавить логотип, то вставится по умолчанию логотип*/
                the_custom_logo(); ?>
        <?php else : ?>
            <a href="/" > <img src="//<?php echo $_SERVER['SERVER_NAME']; ?>/img/logo.jpg" alt="Двери цены" /> </a>
	    <?php endif; ?>
        
    </div>
        
    <div class="center-img">
        <img src="//<?php echo $_SERVER['SERVER_NAME']; ?>/img/header-1.png" alt="">
        <img src="//<?php echo $_SERVER['SERVER_NAME']; ?>/img/header-2.png" alt="">
    </div>

    <div class="top_block__item">
        <a class="top_block__tel comagic_phone" href="tel:<?php if(empty(get_option('my_phone')) ){
                                                          echo "8 (495) 106-48-55";
                                                      }
                                                      else{
                                                          echo get_option('my_phone'); 
                                                      } ?>"><?php if(empty(get_option('my_phone')) ){
                                                          echo "8 (495) 106-48-55";
                                                      }
                                                      else{
                                                          echo get_option('my_phone'); 
                                                      } ?></a>
        <div class="top_block__vamperez" data-toggle="modal" data-target="#kupitDeshevle"><span>Вам перезвонить?</span></div>
    </div>

</div>
<!--top_block -->
