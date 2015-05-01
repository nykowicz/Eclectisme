<?php
if(isset($_POST) && isset($_POST['email']) && isset($_POST['lien']) && isset($_POST['debut']) && isset($_POST['fin'])){
	if(!empty($_POST['email']) && !empty($_POST['lien']) && !empty($_POST['debut']) && isset($_POST['fin'])){
		$destinataire = "nicolas.sychowicz@gmail.com";
		$sujet = "Nouveau sample à poster !";
		$message = "Lien : ".$_POST['lien']."\r\n"."Début du sample : ".$_POST['debut']."\nFin du sample : ".$_POST['fin']."\r\n";
		$entete = 'From: '.$_POST['email']."\r\n".
        	'Reply-To: '.$_POST['email']."\r\n".
		'X-Mailer: PHP/'.phpversion();
		if (mail($destinataire,$sujet,$message,$entete)){	
			header('Location: http://www.samplement.fr');
 			exit();
		} else {
 			echo "Une erreur est survenue lors de l'envoi du formulaire par email";
		}
	}
}
?>