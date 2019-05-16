<?

$name = trim(htmlspecialchars(strip_tags($_POST['name'])));

$email   = trim(htmlspecialchars(strip_tags($_POST['email'])));

$tel = trim(htmlspecialchars(strip_tags($_POST['tel'])));

$title = trim(htmlspecialchars(strip_tags($_POST['name-form'])));
$title2 = trim(htmlspecialchars(strip_tags($_POST['input-name-form'])));

$text_mess = trim(htmlspecialchars(strip_tags($_POST['message'])));


/*if (!isset($name) or empty($name)) {
	$error1 = "Имя?<br />";
} else $error1 = NULL;*/

/*if (!isset($email) or empty($email)) {
	$error2 = "Email?<br />";
} else $error2 = NULL;*/

if (!isset($tel) or empty($tel)) {
	$error3 = "Телефон?<br />";
} else $error3 = NULL;



/*if (!isset($_POST['subject']) or empty($_POST['subject'])) {
	$error3 = "Тема?<br />";
} else $error3 = NULL;

if (!isset($_POST['message']) or empty($_POST['message'])) {
	$error4 = "Сообщение?<br />";
} else $error4 = NULL;*/

// Сообщение: {$_POST['message']}<br>

if (empty($error1) and empty($error2) and empty($error3) and empty($error4)) {
	//$subject = $_POST['subject'];
	$subject = 'Заказ с сайта anapa.okna-level.ru';
	
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
	$message = "
<div style='padding:10px; border:1px solid #ccc;'>
	<h3 style='font-size:22px; margin-bottom:20px;'>{$title}{$title2}</h3>
	<p><b>Имя:</b> {$name}</p> 
	<p><b>Телефон:</b> {$tel}</p>
	<p><b>Оправка с формы:</b> {$title}{$title2}</p>
</div>";
	if (mail("avoshnikov@yandex.ru, lleevv2020@yandex.ru", $subject, $message, $headers)) {
		echo '<div id="spasibo" class="spasibo" style="display:block;">
		<div class="header">СПАСИБО!</div>
		<div class="p1_msg">
			Ваша заявка отправлена успешно.
		</div>

		<a id="callback-spasibo" class="btn b_red" onclick="spasibo()">ЗАКРЫТЬ</a>

	</div>';
	} else echo "Ошибка!";
} else {
	echo $error1.$error2.$error3.$error4;
}
?>
