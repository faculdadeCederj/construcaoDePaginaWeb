function validaTel(tel, tam) {
	campo = tel.value
	if (campo.length != tam) {
		alert("Telefone " + tel.name + " tem de ter " + tam + " dígitos!");
		return false;
	}


	for (i = 0; i < tam; i++) {
		if ((campo[i] < "0") || (campo[i] > "9")) {
			alert("Telefone só pode ter dígitos, caracter " + campo[i] + " inválido!");
			return false;
		}
	}

	return true;
}	