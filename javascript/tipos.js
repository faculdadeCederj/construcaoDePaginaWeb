var tipoJan = new Array (2);
var fornos = new Array(3);
var fogoes = new Array(2);

tipoJan[0] = ["Fogão", 400, 550];
tipoJan[1] = ["Forno", 380, 500];


var foto = ["imagens/Vazio.jpg",
			"imagens/FogaoBrastemp4b.jpg", 
			"imagens/FogaoBrastemp6b.jpg",
			"imagens/FogaoElectrolux4b.jpg",
			"imagens/FornoEletPhilco46L.jpg", 
			"imagens/FornoGasItajobi56L.jpg"];

var produto = 	["Brastemp 4 Bocas", 
				"Electrolux 6 Bocas", 
				"Brastemp 6 Bocas", 
				"Elétrico Philco 46L", 
				"À gás Itajobi 56L"];

var preco = [730, 784, 1350, 319, 563];


function abreJanela(tipo) {
	janela = window.open("", tipoJan[tipo][0], "location=no, status=no, width=" + tipoJan[tipo][1] + ", height=" + tipoJan[tipo][2] + "");

	if (tipo==0) {
		tipo = [tipoJan[0][0], foto[1], [produto[0], produto[1], produto[2]], [preco[0], preco[1], preco[2]] ];
	} else {
		tipo = [tipoJan[1][0], foto[4], [produto[3], produto[4]], [preco[3], preco[4]] ];
	};

	with (janela.document) {
		write("<!DOCTYPE html>");
		write("<head>");
		write("<title>Rio 200 Graus</title>");
		write("	<meta charset='UTF-8'/>");
		write("	<link rel='stylesheet' type='text/css' href='css/estilos.css'>");
		write("	<link href='https://fonts.googleapis.com/css?family=Stoke' rel='stylesheet'>");
		write("</head>");
		write("<body>");
		write("<div class='apres'>");
		write("<h1>" + tipo[0] + "</h1>");
		write("<img class='imgPopup' src='" + tipo[1] + "'/>");
		write("<ul>");

		for(i = 0; i < tipo[2].length; i++) {
			write("<li>" + tipo[2][i] + " - R$ " + tipo[3][i] + ",00</li>");
			}

		write("</ul>");
		write("<input type='button' value='Fechar' onclick='window.close();' />");
		write("</div>");
		write("<p>Foto meramente ilustrativa...</p>");
		write("</body>");
		write("</html>");
		close();
				};

};
