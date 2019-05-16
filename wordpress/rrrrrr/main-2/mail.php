<?
 header('Refresh: 5; URL=/');
  echo '';
  //exit;
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
	
        $to = 'avoshnikov@yandex.ru, lleevv2020@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка с сайта http://anapa.okna-level.ru'; //Загаловок сообщения
		$from = 'mail@'.$_SERVER['SERVER_NAME'];
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: anapa@okna-level.ru <$from>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
		
}
echo '
<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
</head>
<body>
<div class="sp-wrapp">
	<div class="sp-title">Спасибо! Ваша заявка принята.</div>
	<div class="sp-text">Мы перезвоним вам в ближайшее время.</div>
</div>
<!--
<center><img style=" width: 100%; max-width: 500px; margin-top: 30px; " src="/img/spasibo-2.jpg"></center>
-->
</body></html>';
?>

<?php
 /* header('Refresh: 3; URL=/index.html');
  echo '';
  exit;*/
?>
<style>
.sp-wrapp {
	max-width: 600px;
	margin: 15% auto 0;
	text-align: center;
	font-size: 22px;
}
.sp-title{
	font-size: 36px;
}
</style>
