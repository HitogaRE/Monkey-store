<?php
if($titulo){	
	$sql = "
		select titulo,novidade,id from novidades
		where titulo like ('%".$db->real_escape_string($titulo)."%')
	";
	if($result=$db->query($sql)){
		$res = [];
		while($linha=$result->fetch_array()){$res[]=$linha;}
		if(count($res)==0){
			echo "sua consulta ta uma bosta";
		}
		else{
			echo "<table><tr><th>id</th><th>titulo</th></tr><tr><th colspan='2'>novidade</th></tr>";
			foreach($res as $memo){
				echo "<tr>
			<td>{$memo[2]}</td>
					<td>{$memo[0]}</td>
			</tr>
			<tr>
					<td colspan='2'><pre>{$memo[1]}</pre></td>
			</tr>
			<tr>
					<td colspan='2'><a href='javascript:excluirNovidade({$memo[2]})'>Excluir</a> - <a href='javascript:carregaNovidade({$memo[2]})'>Alterar</a></td>
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