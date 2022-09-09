<?php
if(isset($id)){
$sql = "
		select titulo,novidade,id from novidades
		where id = $id
	";
	if($result=$db->query($sql)){
		$novidade=$result->fetch_array()
	?>
	
<form name='frmAltNovidade' id='frmAltNovidade'  method='POST' action="javascript:alterarNovidade(<?php echo $novidade[2] ?>);" onSubmit="return validaNov();" >
	<fieldset><legend>Novidade</legend>
	Titulo da Novidade:<input type='text' name='txtTitulo' id='txtTitulo' size='10' value='<?php echo $novidade[0] ?>'><br>
	Novidade<br>
	<textarea name='txtNovidade' id='txtNovidade' cols='90' rows='15' ><?php echo $novidade[1] ?></textarea>
		<fieldset>
			<input type='submit' name='grv' id='grv' value='enviar'><input type='reset' name='lmp' id='lmp' value='limpar'>
		</fieldset>
	</fieldset>	
</form>
	<?php
	}
}
?>