<div class="map-wrapper">
    <div id="BX_YMAP_officemap" class="bx-yandex-map" style="height: 600px; width: 100%;">
        <!--<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
        <script> ymapload(); </script>-->
        <script type="text/javascript" charset="utf-8" async src="<?php if(empty(get_option('karta_adressa')) ){
                                                          echo "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab6294ba8bce8547f36ca542e681f099cfe5338ef5648b27c918aa604e530d95b&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true";
                                                      }
                                                      else{
                                                          echo get_option('karta_adressa'); 
                                                      }  
                                                      ?>"></script>
    </div>
</div>
