function abre(item,alvo){
	var ajax=new XMLHttpRequest();
	var params="item="+item;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById(alvo).innerHTML=ajax.responseText;
		}
	}
	ajax.send(params);
}

function abrePagina(pagina,alvo){
	var ajax=new XMLHttpRequest();
	
	ajax.open("GET",pagina,true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById(alvo).innerHTML=ajax.responseText;
		}
	}
	ajax.send();
}

function mudaTitulo(titulo){
	abrePagina('titulo.php?titulo='+titulo,'spanTitulo');
}

function abreMenu(titulo){
    switch(titulo){
		case "Produtos":
			apareceDesaparece('subMenuProdutos');
		break; 
 		default:
			document.getElementById('subMenuProdutos').style.display='none';
		break;

	}
	mudaTitulo(titulo);
	abre(titulo,'divConteudo');
}

function apareceDesaparece(id){
	var obj=document.getElementById(id);
	if(obj.style.display!='block'){
		obj.style.display='block';
		return 'block';
	}
	else{
		obj.style.display='none';
		return 'none';
	}
}

function abreSubMenu(id){
    if(apareceDesaparece(id)=='block'){
       abre(id,id);
    }
}

function valida(){
	var email = document.getElementById("txtEmail");
	var pedido = document.getElementById("txtPedido");

	if(pedido.value.length == 0 && email.value.length == 0){
			alert("todos os campos de pedido devem estar preenchidos");
			email.focus();
			return false;
	} 
	else if(pedido.value.length == 0){
			alert("campo de pedido deve estar preenchido");
			return false;
	}
	else if(email.value.length == 0){
		alert("campo de email deve estar preenchido");
		return false;	
	}
	else if(email.value.search("@")==-1){
		alert("email invalido");
		return false;
	}
	else{
		return true;
	}
}

function validaPedido(){
	var objEmail=document.getElementById('txtEmail');
	var objPedido=document.getElementById('txtPedido');
	var msg ='';
	
	if(objEmail.value=='' || objEmail.value.search('@')==-1){
		msg+="E-mail inválido!\n";
	}
	if(objPedido.value==''){
		msg+="Por favor preecha seu pedido\n";
	}
	if(msg!=''){
		alert(msg);
		return false;
	}
	else{
		return true;
	}
}

function gravaPedido(){
	var ajax=new XMLHttpRequest();
	var objEmail=document.getElementById('txtEmail');
	var objPedido=document.getElementById('txtPedido');
	var params="item=incluiPedido&email="+objEmail.value+"&pedido="+objPedido.value;
	ajax.open("POST","pagina.php",true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Pedido Gravado Com Sucesso');
				document.getElementById('frmIncPedido').reset();
				
			}
		}
	}
	ajax.send(params);
}
