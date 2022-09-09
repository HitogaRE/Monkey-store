<form name='frmConsultaPedidos' id='frmConsultaPedidos' method='POST' action="javascript:consultarPedidos();" >
	<fieldset><legend>Consulta Pedidos</legend>
		e-mail:<input type='text' name='email' id='email' size='10'><br>
	</fieldset>
	<fieldset>
		<input type='submit' name='con' value='consultar'>
		<input type='reset' name='lmp' value='limpar'>
	</fieldset>
</form>
<div id='resultadoConsulta'></div>