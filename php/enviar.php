<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
    $destino = "studiocaroca@gmail.com"
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre:" . $nombre . "\nE-mail: " . $email . "\nTel&eacute;fono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino, $asunto, $contenido);
    // echo "Su mensaje ha sido enviado. Nos comunicaremos a la brevedad. Gracias :)";
    $('input').val("");
}
 ?>