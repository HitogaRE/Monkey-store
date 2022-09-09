<?php
if(isset($id) && isset($titulo) && isset($novidade)){
	
	$sql = "update novidades
		set 
			titulo='".$db->real_escape_string($titulo)."',
			novidade='".$db->real_escape_string($novidade)."'
		where
			id='".$db->real_escape_string($id)."'
		";
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "erro ao alterar a novidade";
	}
}
?>