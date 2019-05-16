<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
<title>Обратная связь</title>
</head>
<body>
<?php
include_once("filtr.php");
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['kol'])) {$kol = $_POST['kol'];}
$comagic =  isset($_POST['comagic']) ? 'Название формы: '.$_POST['comagic'].'; ':'';
$utm_source = isset($_COOKIE['utm_source']) ? 'источник: '.$_COOKIE['utm_source'].'; ':'';
$utm_term = isset($_COOKIE['utm_term']) ? 'Ключевое слово: '.$_COOKIE['utm_term'].'; ':'';
$to = "avoshnikov@yandex.ru";
$headers = "Content-type: text/plain; charset = windows-1251";
$subject = "Пластиковые окна ugokno.ru";
$message = "Телефон: $phone \nКоличество окон, которые хотят купить: $kol \n $comagic $utm_source $utm_term";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
?>

<?php
include_once("filtr.php");
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['kol'])) {$kol = $_POST['kol'];}

$to = "okna@l-eve-l.ru";
$headers = "Content-type: text/plain; charset = windows-1251";
$subject = "Пластиковые окна ugokno.ru";
$message = "Телефон: $phone \nКоличество окон, которые хотят купить: $kol \n $comagic $utm_source $utm_term";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
?>


<a href="javascript:javascript:history.go(-1)"style="color:#00FF00; text-decoration:none " ><img src="bg.jpg" alt="Вернуться назад"></a>



</body>
</html>
