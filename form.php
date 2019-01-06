<?php
$formData = $_POST;
$message = "Beste, U heeft een bericht ontvangen op backstory.be van " . $formData['clientName'] . "als bericht: \n " . $formData['clientComment'] . " \n
De overige gegevens zijn: \n
Partner naam:" . $formData['partnerName'] . "\n
Client e-mailadres:" . $formData['clientEmail'] . "\n
";
$mail = mail('sebastian.vuye@gmail.com', 'Contactformulier Backstory', $message);
if ($mail) {
    include "contact_s.html";
}
