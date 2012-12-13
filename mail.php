<?php

if (count($_POST) > 0) {
    foreach ($_POST as $key => $value) {
        $_POST[$key] = htmlspecialchars(trim($value));
    }
}

$to = "oleg.smirnov85@gmail.com";
$totest = "kulish.dp@gmail.com";
$from = "b2b@eflowers5.com";
$title = "Заказ";
$headers = "From: " . $from . "\n";
$headers .= "Content-type: text/plain; charset=utf-8\n";

$name = $_POST['name'];
$bqname = $_POST['bqname'];
$phone = $_POST['phone'];
$mail = $_POST['email'];
$form_id = $_POST['form_id'];
if (isset($_POST['callback'])) {
    $phone = $_POST['callback'];
}


$message = "Букет № " . $form_id . " - " . $bqname . "\n" . "Имя заказчика: " . $name . "\n" . "Телефон: " . $phone . "\n" . "Почта заказчика: " . $mail;

//@mail($to, $title, $message, $headers);
@mail($totest, $title, $message, $headers);

echo '1';

?>