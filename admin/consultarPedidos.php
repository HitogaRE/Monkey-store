<?php
if($email){	
	$sql = "
		select email,pedido,id from pedidos
		where email like ('%".$db->real_escape_string($email)."%')
	";
	if($result=$db->query($sql)){
		$res = [];
		while($linha=$result->fetch_array()){$res[]=$linha;}
		if(count($res)==0){
			echo "sua consulta ta uma bosta";
		}
		else{
			echo "<table><tr><th>id</th><th>e-mail</th></tr><tr><th colspan='2'>pedido</th></tr>";
			foreach($res as $memo){
				echo "<tr>
			<td>{$memo[2]}</td>
					<td>{$memo[0]}</td>
			</tr>
			<tr>
					<td colspan='2'><pre>{$memo[1]}</pre></td>
			</tr>
			<tr>
					<td colspan='2'><a href='javascript:excluirPedido({$memo[2]})'>Excluir</a> - <a href='javascript:carregarPedido({$memo[2]})'>Alterar</a></td>
		  	</tr>
		    ";
			}
			echo "</table>";
		}
	}
	else{
		echo "Erro na consulta";
	}
}
?>