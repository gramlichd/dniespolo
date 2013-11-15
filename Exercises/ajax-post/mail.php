<?php

$email = 'gramlichd@macomb.edu';

$from = $_POST['email'];
$headers = 'From: ' . $from;

$subject = $_POST['subject'];
$message = $_POST['message'];

if (
  $subject && $message && $from &&
  mail($email, $subject, $message, $headers)
) {
  echo '<p class="success">Thanks! I\'ve received your e-mail and will get back to you soon!</p>';
} 
else 
{
  echo '<p class="error">Uh-oh, something went wrong and your message could not be sent!</p>';
}