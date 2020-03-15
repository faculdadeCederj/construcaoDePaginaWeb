var foto_preco = 	[["imagens/FogaoBrastemp4b.jpg", 730],
					["imagens/FogaoBrastemp6b.jpg", 784],
					["imagens/FogaoElectrolux4b.jpg", 1350],
					["imagens/FornoEletPhilco46L.jpg", 319],
					["imagens/FornoGasItajobi56L.jpg", 563],
					["imagens/Vazio.jpg", 0]];

function trocaImagem (arg) {
	foto = document.getElementById("fotoFogao");
	foto.src = foto_preco[arg][0];
	preco = document.getElementById("precoFogao");
	preco.innerHTML = "R$ " + foto_preco[arg][1] + ",00" ;
}