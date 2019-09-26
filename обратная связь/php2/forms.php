<?php

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")){
    
    $to = $_POST['hiddenphone']; 
    $subject = $_SERVER['HTTP_HOST']; //Загаловок сообщения
    $message = ' 
        <p>Имя: '.$_POST['name'].'</p>
        <p>Телефон: '.$_POST['tel'].'</p>
        <p>Форма: '.$_POST['f'].'</p> 						
        '; //Текст нашего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <mail@yumaguloff-emil.myjino.ru>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    mail('avoshnikov@yandex.ru', $subject, $message, $headers); 
    
    echo 'ok';
}


?>