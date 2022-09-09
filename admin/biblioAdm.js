function validaLogin(){
	var objUsuario=document.getElementById('usuario');
	var objSenha=document.getElementById('senha');
	var msg ='';
	
	if(objUsuario.value==''){
		msg+="Informe o usuário\n";
	}
	if(objSenha.value==''){
		msg+="Informa senha\n";
	}
	if(msg!=''){
		alert(msg);
		return false;
	}
	else{
		return true;
	}
}

function autenticar(){
	var ajax=new XMLHttpRequest();
	var objUsuario=document.getElementById('usuario');
	var objSenha=document.getElementById('senha');
	var params="item=autenticar&usuario="+objUsuario.value+"&senha="+objSenha.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{				
				document.location.href='';
				
			}
		}
	}
	ajax.send(params);
}

function sair(){
	var ajax=new XMLHttpRequest();
	var params="item=sair";
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
						
				document.location.href='';
			
		}
	}
	ajax.send(params);
}

function consultarPedidos(){	
	var ajax=new XMLHttpRequest();	
	var objEmail=document.getElementById('email');	
	var objResultado = document.getElementById('resultadoConsulta');
	var params="item=consultarPedidos&email="+objEmail.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!=''){
				objResultado.innerHTML=ajax.responseText;
			}
		}
	}
	ajax.send(params);
}



function excluirPedido(id){	
	if(confirm('Deseja mesmo excluir o pedido id = '+id+' ?')){
		var ajax=new XMLHttpRequest();			
		var params="item=excluirPedido&id="+id;
		ajax.open("POST","pagina.php",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange=function(){
			if (ajax.readyState==4 && ajax.status==200){
				if(ajax.responseText!='ok'){
					alert(ajax.responseText);
				}
				else{
					alert('Pedido excluído com sucesso');
					document.getElementById('frmConsultaPedidos').submit();
				}
			}			
		}
		ajax.send(params);
	}
}

function carregarPedido(id){
	var ajax=new XMLHttpRequest();	
	var objConteudo=document.getElementById('divConteudo');
	var params="item=carregarPedido&id="+id;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
				objConteudo.innerHTML=ajax.responseText;					
		}
	}
	ajax.send(params);
}

function alterarPedido(id){	
	var ajax=new XMLHttpRequest();
	var objEmail=document.getElementById('txtEmail');
	var objPedido=document.getElementById('txtPedido');
	var params="item=alterarPedido&id="+id+"&email="+objEmail.value+"&pedido="+objPedido.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Pedido Gravado Com Sucesso');
				abre('frmConsultaPedidos','divConteudo');
			}
		}
	}
	ajax.send(params);
}

function alterarNovidade(id){	
	var ajax=new XMLHttpRequest();
	var objTitulo=document.getElementById('txtTitulo');
	var objNovidade=document.getElementById('txtNovidade');
	var params="item=alterarNovidade&id="+id+"&titulo="+objTitulo.value+"&novidade="+objNovidade.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Novidade Gravado Com Sucesso');
				abre('frmConsultaNovidades','divConteudo');
			}
		}
	}
	ajax.send(params);
}

function incluirNovidade(){
	var ajax=new XMLHttpRequest();
	var objTitulo=document.getElementById('txtTitulo');
	var objNovidade=document.getElementById('txtNovidade');
	var params="item=incluirNovidade&titulo="+objTitulo.value+"&novidade="+objNovidade.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Novidade Gravada Com Sucesso');
				document.getElementById('frmIncNovidade').reset();
				
			}
		}
	}
	ajax.send(params);
}

function validaNov(){
	var titulo = document.getElementById("txtTitulo");
	var novidade = document.getElementById("txtNovidade");

	if(novidade.value.length == 0 && titulo.value.length == 0){
			alert("todos os campos de pedido devem estar preenchidos");
			titulo.focus();
			return false;
	} 
	else if(novidade.value.length == 0){
			alert("campo de novidade deve estar preenchido");
			return false;
	}
	else if(titulo.value.length == 0){
		alert("campo de titulo deve estar preenchido");
		return false;	
	}
	else{
		return true;
	}
}

function excluirNovidade(id){	
	if(confirm('Deseja mesmo excluir a novidade id = '+id+' ?')){
		var ajax=new XMLHttpRequest();			
		var params="item=excluirNovidade&id="+id;
		ajax.open("POST","pagina.php",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange=function(){
			if (ajax.readyState==4 && ajax.status==200){
				if(ajax.responseText!='ok'){
					alert(ajax.responseText);
				}
				else{
					alert('Novidade excluída com sucesso');
					document.getElementById('frmConsultaNovidade').submit();
				}
			}			
		}
		ajax.send(params);
	}
}

function carregaNovidade(id){
	var ajax=new XMLHttpRequest();	
	var objConteudo=document.getElementById('divConteudo');
	var params="item=carregaNovidade&id="+id;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
				objConteudo.innerHTML=ajax.responseText;					
		}
	}
	ajax.send(params);
}

function consultarNovidades(){	
	var ajax=new XMLHttpRequest();	
	var objTitulo=document.getElementById('titulo');	
	var objResultado = document.getElementById('resultadoConsulta');
	var params="item=consultarNovidades&titulo="+objTitulo.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!=''){
				objResultado.innerHTML=ajax.responseText;
			}
		}
	}
	ajax.send(params);
}