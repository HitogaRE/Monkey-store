<?php
if(isset($usuario) && isset($senha)){	
	if($usuario=='h1' && $senha=='123'){
		$_SESSION['usuario']=$usuario;
		echo 'ok';
	}
	else{
		echo 'Usuário ou senha incorretos';
	}
}
?>