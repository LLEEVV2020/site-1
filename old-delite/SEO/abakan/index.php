<?php
header("Content-Type: text/html; charset=utf-8");

$arrHost = explode('.', $_SERVER['HTTP_HOST']);
$city = $arrHost[0];

$mysqli = new mysqli('localhost', 'base', 'cClRgn4a', 'base');
if ($mysqli->connect_errno)
	echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;

//echo $mysqli->host_info . "\n";

/*$mysqli = new mysqli("127.0.0.1", "user", "password", "database", 3306);
if ($mysqli->connect_errno) {
	echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

echo $mysqli->host_info . "\n";
*/

$mysqli->set_charset("utf8");

//$sql = "SELECT * FROM `tab1` WHERE `translit` = 'novosibirsk'";
$sql = "SELECT * FROM `tab1` WHERE `translit` = '$city'";
$res = $mysqli->query($sql);
$row = $res->fetch_assoc();
//var_dump($row);
mysqli_close($mysqli);
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Репетитор в <?=$row['at_city']?> по математике, русскому, английскому и другим предметам!</title>
    <meta name="description" content="Репетиторы в <?=$row['at_city']?> по низким ценам. Математика, русский, английский, физика и химия. Подготовка к ЕГЭ и ГИА. Помощь студентам. Английский с носителем. Цены от 490 рублей за час. Пробный бесплатный урок репетитора в <?=$row['at_city']?>.">
	
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" rel="stylesheet" href="http://static.graddit.com/css/graddit.css"/>
    <link href="http://1repetitory.ru/css/bootstrap.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://1repetitory.ru/css/hosting.css" media="all">
    <link rel="stylesheet" href="http://1repetitory.ru/css/swiper.min.css">
	<link rel="shortcut icon" href="http://1repetitory.ru/favicon.ico" type="image/x-icon">
    <script src="http://1repetitory.ru/js/jquery-1.9.0.min.js"></script>
	<script src="http://1repetitory.ru/js/modernizr.js"></script>
    <script src="http://1repetitory.ru/js/contact_form.js"></script>
    <script src="http://horizon-swiper.sebsauer.de/assets/js/vendor/jquery.min.js"></script>
	<script type="text/javascript" src="http://1repetitory.ru/js/jquery.flexisel.js"></script>
</head>

<body id="home" data-spy="scroll" data-target=".navbar-collapse" data-offset="100">
    <div class="container">
        <div class="row mainFeatures" id="features">
            <div class="col-sm-6 col-md-3">
                <div class="navbar-brand">1-е Репетиторы Ру</div>
            </div>
            <div class="col-sm-6 col-md-4  hidden-sm hidden-xs">
                <div class="img-thumbnail">
                    <div class="caption">
                        <p>Репетиторы в <?=$row['at_city']?> по всем предметам</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-5 col-sm-offset-3 col-md-offset-0">
                <div class="img-thumbnail">
                    <div class="caption">
                        <div itemscope itemtype="http://schema.org/Organization">
                            <div itemprop="name" style="display: none;">1repetitory.ru <?=$row['city']?></div>
								<p><span itemprop="telephone">8 800 869-12-44</span></p>
								<p><span itemprop="email"><?=$row['translit']?>@1repetitory.ru</span></p>
                            <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
								<span itemprop="postalCode"><?=$row['post_index']?></span>, 
								<span itemprop="addressLocality"><?=$row['city']?></span>, 
								<span itemprop="streetAddress"><?=$row['adress']?></span> 
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container2">
        <div class="jumbotron masthead" style="background-image:url(http://1repetitory.ru/images/city/<?=$row['fon']?>)">
            <div class="container">
                <div class="bg-j">
                    <div class="gerb col-md-2"><img src="http://1repetitory.ru/images/gerb/<?=$row['gerb']?>"></i>
                    </div>
                    <div class="h1-t col-md-10">
                        <h1>Репетиторы в <?=$row['at_city']?> по математике, русскому и английскому</h1>
					</div>
						<p class="txt-1">Репетиторы в <?=$row['at_city']?> по низким ценам. Математика, русский, английский, физика и химия. Подготовка к ЕГЭ и ГИА. Помощь студентам. Английский с носителем и подготовка к Toefl и IELTS. Цены от 490 рублей за час. Пробный бесплатный урок репетитора в <?=$row['at_city']?>.</p>
                    <div class="txt-2">
                        <p class="t-2 col-md-6"> <i class="fa fa-check"></i><span>C 2009 года провели 86930 занятий c 8697 учениками</span></p>
                        <p class="t-2 col-md-6"> <i class="fa fa-check"></i><span>Онлайн занятия дешевле обычных минимум в 3 раза</span></p>
                        <p class="t-2 col-md-6"> <i class="fa fa-check"></i><span>Школьная программа с 1 по 11 класс, подготовка к ЕГЭ и ГИА</span></p>
                        <p class="t-2 col-md-6"> <i class="fa fa-check"></i><span>Сотни реальных отзывов довольных учеников</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
		
 	<div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Низкие цены на уроки - от 490 рублей</h2> </div>
        </div>
		<p align="center">ЕГЭ, ГИА, ОГЭ, Подготовка к олимпиадам, Помощь при выполнении домашнего задания, Устранение пробелов, Решение задач, Повышение успеваемости, Подготовка к экзаменам.</p>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList hidden-sm reviews1">
                <div class="container1">
                    <img src="http://1repetitory.ru/images/lessons.png" class="img" />
                </div>            		
            </div>
        </div>
    </div>
 
    </div>
	
	<div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Отзывы клиентов, заказавших курсовики</h2> 
			</div>
        </div>
        <p align="center">Некоторые отзывы клиентов из <?=$row['at_city']?> (<?=$row['population']?> жителей).</p>
        <div class="row ComparePlans-reviews">
            <div class="col-md-12 CompareList reviews1 otzv-r">
                <!-- Swiper -->
				
				
				<ul id="flexiselDemo1"> 
					<li>
						<div class="swiper-slide"><span><h3>Высокий балл</h3>Спасибо огромное! Обратился на данный сайт по совету друга, он уже занимается с репетитором оттуда. Отзывчивые, а главное очень грамотные преподаватели, легко доносят материал, в доступной форме. Я ходил на русский язык, математику и историю. Кстати, мои результаты стали одними из лучших в нашем классе, и я поступил на бюджет. Самое главное, что учитель разбирал вместе с нами тестовые задания по ЕГЭ, а не какие-то абстрактные примеры. Благодаря вам я теперь студент престижного ВУЗа, как и мечтал. Со своими баллами поступил сразу в три университета, так что еще и выбирать пришлось.</span> </div>
					</li>
					<li>
						<div class="swiper-slide"><span><h3>Подтянул физику</h3>Хотелось бы выразить огромное спасибо преподавателю физики. Мой сын долгое время лежал в больнице и пропустил часть занятий. Надо было нагонять программу, а наш учитель не мог заниматься дополнительно. По совету подруги обратилась в эту компанию, у нее дочь здесь занималась. На занятия сын ходил с удовольствием, говорит учитель классный, все понятно и интересно объясняет. Задачи стал решать гораздо лучше и быстрее. Теперь у нас по физике твердая четверка, хотя раньше обычно тройки были. Спасибо вам большое, успехов и процветания.</span> </div>
					</li>
					<li>
						<div class="swiper-slide"><span><h3>Интересный русский</h3>Хотелось бы поблагодарить репетитора по русскому. Поступив в университет не ожидал, что моих школьных знаний по языку не хватит для хорошей оценки. Учусь на бюджете и хорошие оценки влияют на получение стипендии. ВУЗ не профильный, но требования у преподавателя по русскому высокие. Обратился, чтобы подтянуть грамматику. Уже после нескольких занятий стал гораздо лучше разбираться в правилах пунктуации. Как результат – хорошая оценка на экзамене. Теперь и стипендию повышенную получаю. Объясняют все понятно и доступно. Еще раз спасибо, вы молодцы.</span> </div>
					</li>
					<li>
						<div class="swiper-slide"><span><h3>Английский с носителем</h3>Я счастлива! Спасибо вам огромнейшее! Мечтала поступить в лингвистический университет, и моя мечта сбылась! Занималась языком всегда усиленно, но знала, что школьной программы недостаточно для поступления в языковой ВУЗ. Мама меня записала к вам, узнав, что репетитором по языку здесь работает настоящий англичанин, хорошо говорящий по-русски. Учитель – супер. Добрый, внимательный, веселый. А учить с ним английский очень легко, я сильно подтянула свой разговорный и грамматику. На ЕГЭ получила высший балл, и легко поступила. Желаю вам удачи, буду всем советовать.</span> </div>
					</li>
					<li>
						<div class="swiper-slide"><span><h3>Хорошие учителя</h3>Хотелось бы поблагодарить учителей биологии и естествознания. Они очень помогли мне подготовиться к ЕГЭ. Объясняют все доступно и легко, на каждое следующее занятие хочется идти. А еще они очень добрые и понимающие. Заниматься начали немного позднее, чем требовалось, но я брала по несколько уроков в день. Мои репетиторы смогли так составить план занятий и систематизировать материал, что я его легко усвоила. Темы, которые казались сложными, теперь знаю очень хорошо. Спасибо вам, мои учителя. Кстати, по ЕГЭ я получила высокий балл.</span> </div>
					</li>
					<li>
						<div class="swiper-slide"><span><h3>Родители довольны</h3>Хотелось бы поблагодарить весь коллектив компании, а особенно преподавателя по французскому языку. Моя дочь раньше не любила этот предмет, не повезло нам в школе с учителем. Так как мы часто бываем во Франции и думаем со временем туда переехать, отдали ее с мужем к вам для дополнительных занятий. Девочка буквально переменилась. Каждый день в захлеб рассказывает, как интересно было на уроке, а в школе стала получать отличные отметки. На каникулах ездили в Париж, так она там со всеми легко общалась. А знакомые нам сказали, что уровень ее сильно подрос. Думаем, что продолжим занятия у вас. Спасибо большое.</span> </div>
					</li>
				</ul>
				
            </div>
        </div>
    </div>
	<div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Как проходит занятие</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList hidden-sm reviews1">
                <div class="container1">
                    <img src="http://1repetitory.ru/images/class-room.png" class="img" />
                </div>                
            </div>
        </div>
    </div>
    <!--Container Closed-->
    <div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Результаты наших учеников</h2> </div>
        </div>
        <div class="row ComparePlans-reviews">
            <div class="col-md-12 CompareList reviews1 rez-r">
                <!-- Swiper -->
				
				<ul id="flexiselDemo2"> 
					<li>
						<div class="swiper-slide"><span><h3>Доступная математика</h3>С математикой у меня всегда были проблемы, не мое это. Но ЕГЭ сдавать надо, причем желательно на высокий балл. Поступить то очень хочется. Родители записали меня к репетитору в эту компанию по совету коллеги отца. Его дети занимались здесь с репетитором, и успешно сдали ЕГЭ. Я не питал особых иллюзий, но пришел на первое занятие. Учитель меня сразу заинтересовал, сразу стало понятно, что он знает и любит математику, хотя по возрасту еще молодой. Через 15 занятий я знал больше, чем за 2 последних года в школе. Вот что значит умение хорошо объяснять. Кстати, по ЕГЭ у меня хороший балл и я жду зачисления в университет.</span> </div></li>
					<li>
						<div class="swiper-slide"><span><h3>Работа в Америке</h3>Собрались мы с подругой работать в Америку. Ее знакомая предложила должности менеджеров в гостинице с хорошей зарплатой. Но главное требование было хорошо сдать IELTS. Для несведущих поясню – языковой экзамен по английскому, для лиц, собирающихся работать или учиться за рубежом. Моих знаний языка явно не хватало, для успешной сдачи, но предложение было заманчивое. Порывшись в интернете, я нашла эту компанию и записалась к репетитору. Моему удивлению не было предела, когда учить нас пришел настоящий англичанин. К чему это я, да к тому, что через неделю мы улетаем работать в Америку! IELTS сдан успешно.</span> </div></li>
					<li> 
						<div class="swiper-slide"><span><h3>Знаю русский</h3>Я сам, гражданин Китая. Всегда интересовался русской культурой, учил язык еще в школе. Приехал учиться в университет в Россию. Мне здесь очень нравится. Наверное, после учебы останусь здесь работать. Но сначала я чувствовал, что не совсем правильно говорю по-русски и трудно писать без ошибок. Мне друг из общежития посоветовал хорошего учителя из этой фирмы. Я занимаюсь уже полгода и очень хорошо стал писать и говорить на русском языке. Учитель понятно все рассказывает и подробно объясняет, если я не сразу все понял. Мне интересно ходить на уроки. Теперь и учиться в университете стало легче.</span> </div></li>
					<li>
						<div class="swiper-slide"><span><h3>Спасибо химику</h3>Учусь я довольно хорошо, но по химии у меня твердая тройка. Не нравится мне этот предмет, да и не понимаю я его. Родителей подобная ситуация вообще не устраивает, да и я стал задумываться, что неплохо бы подтянуть оценку. Записались к репетитору через этот сайт, мама нашла его в интернете. На первом же занятии учитель химии настроил на доброжелательное к себе отношение. Он молодой и понимающий, предмет свой преподнес так, что мне даже интересно стало, что и как там происходит. Позанимавшись всего два месяца, я удивил свою химичку в школе. Теперь у меня по химии заслуженная пятерка. Спасибо химику!</span> </div></li>
					<li>
						<div class="swiper-slide"><span><h3>Университетская физика</h3>В школе я всегда неплохо учился и считал, что хорошо знаю физику. Поступив в университет на физико-математический факультет, с удивлением обнаружил, что для успешной учебы моих знаний явно не хватает. А преподаватели опирались в основном на тех, кто поступил из школ с уклоном. Объясняли предмет так, как будто мы все хорошо знаем некоторые темы. А мы их в школе даже не затрагивали. Пришлось мне обращаться к репетитору, не хотелось быть неуспевающим. По совету друга выбрал вашу фирму, и не пожалел. Физик меня так натаскал, что теперь я еще и нашему старосте подсказываю. А он в группе самым умным считается.</span> </div></li>
					<li>
						<div class="swiper-slide"><span><h3>Студент колледжа</h3>Мой сын не хотел идти в 10 класс, а четко решил пойти в колледж, чтобы раньше начать работать. Я его одна растила, поэтому с финансами не всегда хорошо у нас в семье. Чтобы поступить в колледж, который выбрал сын, нужен был хороший балл ГИА по математике. А вот с ней у него, как раз не очень. На работе одна коллега посоветовала репетитора из вашей компании. Решили с сыном, что он обязательно будет стараться, хоть и не любит предмет. После первого занятия, он сказал, что учитель просто супер. Добрая и хорошо объясняет. На уроки ходил с удовольствием. Теперь он студент колледжа, ждет начала занятий. Спасибо вам.</span> </div></li>
				</ul>
				
				
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Способы оплаты уроков с репетитором</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList oplata-blc">
                <div class="nash-cl"><img src="http://1repetitory.ru/images/visa.png" /> </div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/mc.png" /> </div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/yd.png" /> </div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/wm.png" /> </div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/qiwi.png" /> </div>
                <div class="nash-cl" style="margin-right: 0;"><img src="http://1repetitory.ru/images/beznal.png" /> </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Наши репетиторы</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList employees-blc">
                <div class="nash-cl"><img src="http://1repetitory.ru/images/prepod1.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/prepod2.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/prepod3.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/prepod4.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/prepod5.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/prepod6.jpg" /></div>
                <div class="nash-cl" style="margin-right: 0;"><img src="http://1repetitory.ru/images/prepod7.jpg" /></div>
            </div>
        </div>
    </div>
	<div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>С чего начать</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList hidden-sm reviews1">
                <div class="container1">
                    <img src="http://1repetitory.ru/images/first-step.png" class="img" />
                </div>                
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>СМИ о нашей компании</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList nash-blc">
                <div class="nash-cl"><img src="http://1repetitory.ru/images/cossa.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/dk.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/metro.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/rbk.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/regnum.jpg" /></div>
                <div class="nash-cl"><img src="http://1repetitory.ru/images/vc.jpg" /></div>
                <div class="nash-cl" style="margin-right: 0;"><img src="http://1repetitory.ru/images/village.jpg" /></div>
            </div>
        </div>
    </div>
	<div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Репетиторы города <?=$row['at_city']?> (<?=$row['subject']?>)</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList hidden-sm reviews1">
                <div class="video-blc">
					<iframe width="420" height="315" src="https://www.youtube.com/embed/n0o8dhiyJOg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><br>
                    <?=$row['ytube']?><br>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/RP14hvZNmNA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
                </div>                
            </div>
        </div>
    </div>
	<div class="container">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Бесплатный первый урок с репетитором</h2> </div>
        </div>
        <div class="row ComparePlans-rwn">
            <div class="col-md-12 CompareList hidden-sm reviews1">
                <div class="container1">
                    <img src="http://1repetitory.ru/images/sale.png" class="img" />
                </div>                
            </div>
        </div>
    </div>
    <div class="container" id="contact">
        <div class="row PageHead">
            <div class="col-md-12">
                <h2>Наши контакты в <?=$row['at_city']?></h2>
            </div>
        </div>
        <div class="row ContactUs">
            <div class="col-xs-6 col-md-6">
                <div class="row">
                    <div class="col-md-12 mapwrap">
                        <?=$row['ymap']?>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-md-6">
                <div class="row">
                    <div class="col-md-12 mapwrap"> 
                        <? if ( !($row['panorame'] == '') ): ?>
	                        <img src="http://1repetitory.ru/images/build/<?=$row['panorame']?>" alt="" /> 
                        <? endif; ?>
					</div>
                </div>
            </div>
        </div>
    </div>
	
    <div class="footer">
        <div class="container">
            <div class="row footerlinks">
                <div itemscope itemtype="http://schema.org/Organization">
                    <div itemprop="name" style="display: none;"><strong>1repetitory.ru <?=$row['city']?></strong> </div>
                    <div class="col-sm-4 col-md-3">
                        <p>Телефон</p> 
						<span itemprop="telephone">8 800 869-12-44</span> </div>
                    <div class="col-sm-4 col-md-3">
                        <p>Время работы</p> 
						<span>09:00 - 21:00 (ежедневно)</span> </div>
                    <div class="col-sm-4 col-md-3">
                        <p>Эл. почта</p> 
                        <span itemprop="email"><?=$row['translit']?>@1repetitory.ru</span> </div>
                    <div class="col-sm-4 col-md-3">
                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                            <p>Адрес</p> <span itamprop="postalCode"><?=$row['post_index']?></span>, 
							<span itemprop="addressLocality"><?=$row['city']?></span>, 
							<span itemprop="streetAddress"><?=$row['adress']?></span>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--===Back to top======-->
	<a href="#" class="scrollup" style="z-index: 100;">Вверх</a>
    <!--==============QUERY LIBRARY=================-->
    <script src="http://1repetitory.ru/js/jquery.easing.1.2.js"></script>
    <!--==============BOOTSTRAP JS=================-->
    <script src="http://1repetitory.ru/js/bootstrap.min.js"></script>
    <!--==========ONE PAGE SCROLLING SCRIPTS STARTS===============-->
	<script type="text/javascript">

$(window).load(function() {

    $("#flexiselDemo1").flexisel({
        visibleItems: 2,
        animationSpeed: 500,
        autoPlay: false,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 1
            },
            tablet: { 
                changePoint:768,
                visibleItems: 1
            }
        }
    });
    $("#flexiselDemo2").flexisel({
        visibleItems: 2,
        animationSpeed: 500,
        autoPlay: false,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 1
            },
            tablet: { 
                changePoint:768,
                visibleItems: 1
            }
        }
    });
});
</script>
    <script>
        $(function() {
            $('a.topLink').bind('click', function(event) {
                var $anchor2 = $(this).parent();
                var $anchor = $(this);
                $('.nav  li').removeClass('active');
                $anchor2.addClass('active');
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 80
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });
    </script>
    <!--=============ONE PAGE SCROLLING SCRIPTS ENDS============-->
    <!-- Swiper JS -->
    <script src="http://1repetitory.ru/js/swiper.min.js"></script>  
    <!--=============BACK TO TOP STARTS============-->
</body>
</html>