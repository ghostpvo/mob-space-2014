<?php 
	ini_set('display_error','on');
	error_reporting(E_ALL);
	require 'phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->FromName = 'docs';
	$mail->From = 'docs@localhost';
	$mail->CharSet = 'utf-8';
	$mail->addAddress('info@mobiledimension.ru');  
	$mail->setLanguage('ru');
	$name = htmlspecialchars($_POST["user_name"]);
	$phone = htmlspecialchars($_POST["user_phone"]);
	$mail_ = htmlspecialchars($_POST["user_mail"]);
	$check1 = htmlspecialchars($_POST["check1"]);
	$check2 = htmlspecialchars($_POST["check2"]);
	$check3 = htmlspecialchars($_POST["check3"]);
	$user_coment = htmlspecialchars($_POST["user_coment"]);
	$subject = "Заявка с сайта";
	$message = "Имя: $name; <br />Телефон: $phone; <br />Mail: $mail_; <br />Операционная система: $check1 $check2 $check3; <br />Коментарий: $user_coment; <br />";
    $mail->isHTML(true);                              

	$mail->Subject = $subject;
	$mail->Body    = $message;

	$mail->addAttachment($_FILES['file_request_details']['tmp_name'],$_FILES['file_request_details']['name']);  

	$mail->send();

/*	$name = htmlspecialchars($_POST["user_name"]);
	$phone = htmlspecialchars($_POST["user_phone"]);
	$mail = htmlspecialchars($_POST["user_mail"]);
	$check1 = htmlspecialchars($_POST["check1"]);
	$check2 = htmlspecialchars($_POST["check2"]);
	$check3 = htmlspecialchars($_POST["check3"]);
	$user_coment = htmlspecialchars($_POST["user_coment"]);
	$file = htmlspecialchars($_POST["file_request_details"]);
	$headers = "Content-type: text/plain; charset=\"utf-8\"";
	$to_mail .= "info@mobiledimension.ru";
	$from = "docs";
	$subject = "Заявка с сайта";
	$message = "Имя: $name; \nТелефон: $phone; \nMail: $mail; \nОперационная система: $check1 $check2 $check3; \nКоментарий: $user_coment; \nФайл: $file";
	mail($to_mail, $subject, $message, $headers);*/
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>Mobile apps</title>
	<link href="css/main.css" rel="stylesheet" type="text/css">
	<link href="css/valid.css" rel="stylesheet" type="text/css">
	<link href="css/lightbox.css" rel="stylesheet" media="screen"/>
	<link href="css/animate.css" rel="stylesheet" media="screen"/>
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<link rel="icon" href="/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
	<div class="firts-dspl">
		<div class="little-header">
			<div class="wrap">
				<nav class="main-menu">
					<ul>
						<li><a class="a-animate" href="index.html#projects">Проекты</a></li>
						<li><a class="a-animate" href="index.html#development-stages">Этапы разработки</a></li>
						<li><a class="a-animate" href="index.html#guaranties">Гарантии</a></li>
						<li><a class="a-animate" href="index.html#contacts">Контакты</a></li>
					</ul>
				</nav>
				<a href="http://www.mobiledimension.ru/">Enterprise</a>
			</div>
		</div>
		<header class="page-header">
			<div class="wrap">
				<a href="index.html" class="logotype">logo</a>
				<p class="telephone"><i class="i-phone1"></i> 8-800-555-67-13</p>
			</div>
		</header>
		<div class="thanks-page-offer">
			<div class="wrap">
				<h1>Спасибо за вашу заявку</h1>
				<div>
					<p class="header-dscr">Мы свяжемся с вами в ближайшее время</p>
				</div>
			</div>
		</div>
	</div>

	<!--[if IE]>
		<script type="text/javascript" src="js/ie.js"></script>
	<![endif]-->
	<!-- //end// JAVASCRIPT CODES -->
</body>
</html>