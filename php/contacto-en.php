<?php

$name = $_POST["name"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$body = "";
$body .= "Name: ";
$body .= $name;
$body .= "<br>";
$body .= "Phone: ";
$body .= $tel;
$body .= "<br>";
$body .= "E-mail: ";
$body .= $email;
$body .= "<br>";
$body .= "Subject: ";
$body .= $subject;
$body .= "<br>";
$body .= "Message: ";
$body .= $message;
$body .= "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false;
    $mail->Port = 25;

    //Recipients
    $mail->setFrom('luis@parapenteagencia.com', $name);
    $mail->addAddress('manager@morganahotel.com');     // Para Manager
    $mail->addBCC('carlos@parapenteagencia.com');     // Para Carlos
    $mail->addBCC('luis@parapenteagencia.com');     // Para mí :v


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contact Morgana Hotel';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "The message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}