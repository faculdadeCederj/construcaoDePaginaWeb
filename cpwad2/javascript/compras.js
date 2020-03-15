
var tipo = ["Fogão", "Forno"];

var info = 	[[0, "Brastemp 4 B. BFO4N", 730],
			[0, "Brastemp 6 B. BFS6N", 784],
			[0, "Electrolux 4 B. 50SBC", 1350],
			[1, "Elétrico Philco 46L", 319],
			[1, "Gás 56 Litros Itajobi", 563]];

function compra(formulario) {
	textarea = formulario.listaPedido;
	select = formulario.selectProduto;
	valor = formulario.valor;


	for (i = 0; i < info.length ; i++) {
		if (select.value == info[i][1]) {
			if (info[i][0] == 0) {
				textarea.value += tipo[0] + " " + select.value + "\n";
			} else {
				textarea.value += tipo[1] + " " + select.value + "\n";
			}
			if (valor.value != 0){
				valor.value = parseFloat(valor.value) + parseFloat(info[i][2]);
			} else {
				valor.value = parseFloat(info[i][2]);
			}
		}
	}

}

