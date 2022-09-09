<?php
if(isset($titulo) && isset($novidade)){	
	$sql = "insert into novidades(
			titulo,
			novidade
		)
		values(
			
			'".$db->real_escape_string($titulo)."',
			'".$db->real_escape_string($novidade)."'
		)		"; 
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "erro ao incluir o novidade";
	}
}
?>