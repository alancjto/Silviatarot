<?phpif(isset($_POST['enviar'])){//si el botón con el name "enviar" es pulsadoif(!empty($_POST['name'])&& !empty($_POST['email'])&&!empty($_POST['msg'])){//si no están vacios los inputs name, email y msg//guardo el contenido de cada campo en variables$nombre=$_POST['name'];$email=$_POST['email'];$asunto="Consulta sobre expediciones";//puedo poner un input asunto o crearlo yo directamente$msg="Nombre: ".$nombre."\n".$_POST['msg'];$header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email$header.="Reply-To: noreply@buraleo.com"."\r\n";//Le mando un no responder o noreply$header.="X-Mailer: PHP/".phpversion();$tuCasilla="prueba.coderhouse29255@gmail.com";
$mail=mail($tuCasilla,$asunto,$msg,$header);//en "tu mail" tenes que colocar tu casilla de email de consultas,es decir, la casilla en la cual vas a recibir las consultas que deja la gente en tu páginaif($mail){// si el email se mando respondo éxito con javascriptecho "<script>alert('Gracias por tu contacto! en breves nos estaremos comunicando');window.location='index.html'</script>";}else{//si no se pudo enviar el email lo notificoecho "<script>alert('Lamentamos decirle que no hemos podido enviar su consulta');window.location='index.html'</script>";}}
else{//si los parámetros están vacios, aunque podemos controlar esto con requiredecho "<script>alert('Error faltan parametros');window.location='index.html'</script>";}}header("Location: contacto.php");?>