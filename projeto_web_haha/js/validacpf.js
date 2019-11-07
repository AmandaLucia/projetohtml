function TestaCPF(strCPF) {
  //Link para validar CPF: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
	var Soma;
    var Resto;
    Soma = 0;
	resultadoInvalido = "";
	if (document.form.strCPF.value == "00000000000")//return false;
	{
		Alert("CPF é inválido, pois está preenchido com 00000000000");
		resultadoInvalido = "inválido";
	}
     
	for (i=1; i<=9; i++) 
	{
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	
	}
	Resto = (Soma * 10) % 11;
		
    if ((Resto == 10) || (Resto == 11))  
	{
		Resto = 0;
    }
	
	if (Resto != parseInt(strCPF.substring(9, 10)) ) //return false;
	{
		alert("O número do CPF é inválido");
		resultadoInvalido = "inválido";
	}
   
	Soma = 0;
    for (i = 1; i <= 10; i++){
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    }
	Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))
	{
		Resto = 0;
	}
	
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) //return false;
    {
		alert("O número do CPF é inválido");
		resultadoInvalido = "inválido";
	}
	/*if (resultadoInvalido != "inválido")
	{
		alert("O número do CPF é VÁLIDO");//return true;
	}*/
	
	if (document.form.strCPF.length != 11){
		alert("Preencha o CPF corretamente");
		document.form.strCPF.focus();
		erro = false;
	}
	
}
//var strCPF = "12345678909";
//alert(TestaCPF(strCPF));