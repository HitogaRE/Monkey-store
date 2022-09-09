<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" href="tordo.css">
		<script language='javascript' src='biblio.js'></script>
	</head>
	<body>

		<div id="divTitulo"><img src='baboon-money.gif'> <h1>LOVE MONKES</h1> <span id='spanTitulo'></span><br>
		<div id='divAdmin'><a href='/cafe/admin'>Área Administrativa</a></div></div>

		<div id="divMenu"><ul>
            <li><a href="javascript:abreMenu('Sobre');">Sobre</a></li>
            <li><a href="javascript:abreMenu('Produtos');">Produtos</a>
                <ul id='subMenuProdutos'>
                    <li><a href="javascript:abreSubMenu('divSubMenuProdutos');">Produtos</a></li>
                    <li><a href="javascript:abreSubMenu('divSubMenuPedidos');">Pedidos</a></li>
                </ul>
            </li>
            <li><a href="javascript:abreMenu('Ofertas');">Ofertas</a></li>
			<li><a href="javascript:abreMenu('exibirNovidades');">Novidades</a></li>
            <li><a href="javascript:abreMenu('Contato');">Contato</a></li>
        </ul>

        </div>
		<div id="divConteudo"></div>	
		<div id="divRodape"><span id='telefone'> 4520-20 </span><span id='email'> macaco@monkemail.com</span></div>
        <script language='javascript'>
			abre('Sobre','divConteudo');
		</script>
	
	</body>
</html>
