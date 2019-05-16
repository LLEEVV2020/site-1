<?
//$mess_post = $_POST['mess'];
$mess = $_POST['mess'];
$otzyv = '';
if(!empty($mess)){
	$otzyv = '<p>Сообщение: '.$mess.'</p>';
}

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
//avoshnikov@yandex.ru, lleevv2020@yandex.ru,
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
                        <p>Телефон: '.$_POST['tel'].'</p>'.$otzyv.'
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: anapa@okna-level.ru <$from>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
		echo 'ok';
}
?>
