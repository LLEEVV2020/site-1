<?php
if (isset($_POST['lang'])) {$lang = $_POST['lang'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}

$to = "stroy@l-eve-l.ru"; /*Укажите ваш адрес электоронной почты*/
$headers = "Content-type: text/plain; charset = utf-8";
$subject = "anapa.remont-level.ru";
$message = "Название формы: $lang \nТелефон: $phone";
$utm_source = isset($_COOKIE['utm_source']) ? 'источник: '.$_COOKIE['utm_source'].'; ':'';
$utm_term = isset($_COOKIE['utm_term']) ? 'Ключевое слово: '.$_COOKIE['utm_term'].'; ':'';
$message .= " \n $utm_source $utm_term";
$send = mail ($to, $subject, $message, $headers);

if ($send == 'true')
{
echo "<b><p>";
echo "";
}
else 
{
echo "<p><b>Ошибка. Сообщение не отправлено!";
}

?>

<?php
if (isset($_POST['lang'])) {$lang = $_POST['lang'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}

$to = "avoshnikov@yandex.ru"; /*Укажите ваш адрес электоронной почты*/
$headers = "Content-type: text/plain; charset = utf-8";
$subject = "anapa.remont-level.ru";
$message = "Название формы: $lang \nТелефон: $phone";
$message .= " \n $utm_source $utm_term";
$send = mail ($to, $subject, $message, $headers);

if ($send == 'true')
{
echo "<b><p>";
echo "";
}
else 
{
echo "<p><b>Ошибка. Сообщение не отправлено!";
}

?>

<?php 
/* AMO.CRM */
$url_delivery_amo = 'https://apicrm.ru/amo/domain/anapa.remont-level.ru/send.php';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url_delivery_amo);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $_REQUEST);
curl_setopt($curl,CURLOPT_HEADER,false);
curl_exec($curl);
curl_close($curl); #Заверашем сеанс cURL
/* /AMO.CRM */
 ?>


<center><a onclick="javascript:history.back(); return false;"><img src="bg.png"></a></center>
