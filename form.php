<?php
$formData = $_POST;

$mail = mail('sebastian.vuye@gmail.com', 'Contactformulier Backstory', $formData['client-comment']);
if ($mail) {
    include "contact.html";
}
