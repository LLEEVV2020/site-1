<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
<title>�������� �����</title>
</head>
<body>
<?php
include_once("filtr.php");
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['kol'])) {$kol = $_POST['kol'];}
$comagic =  isset($_POST['comagic']) ? '�������� �����: '.$_POST['comagic'].'; ':'';
$utm_source = isset($_COOKIE['utm_source']) ? '��������: '.$_COOKIE['utm_source'].'; ':'';
$utm_term = isset($_COOKIE['utm_term']) ? '�������� �����: '.$_COOKIE['utm_term'].'; ':'';
$to = "avoshnikov@yandex.ru";
$headers = "Content-type: text/plain; charset = windows-1251";
$subject = "����������� ���� ugokno.ru";
$message = "�������: $phone \n���������� ����, ������� ����� ������: $kol \n $comagic $utm_source $utm_term";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
?>

<?php
include_once("filtr.php");
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['kol'])) {$kol = $_POST['kol'];}

$to = "okna@l-eve-l.ru";
$headers = "Content-type: text/plain; charset = windows-1251";
$subject = "����������� ���� ugokno.ru";
$message = "�������: $phone \n���������� ����, ������� ����� ������: $kol \n $comagic $utm_source $utm_term";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
?>


<a href="javascript:javascript:history.go(-1)"style="color:#00FF00; text-decoration:none " ><img src="bg.jpg" alt="��������� �����"></a>



</body>
</html>
