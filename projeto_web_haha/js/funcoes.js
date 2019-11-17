/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
 
 //validação de CPF
//---------------------------------------------------------------------------------------verifica cpf
	//Link para validar CPF: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
	function validacaocpf(receberCpf){
	var cpf = receberCpf;
	var Soma;
    var Resto;
    Soma = 0;
	resultadoInvalido = "";	
	
	if (cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")//return false;
	{
		alert("O CPF é inválido, pois está preenchido com " + cpf);
		resultadoInvalido = "inválido";
		return false;
	}
	
	for (i=1; i<=9; i++) 
	{
		Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
	
	}
	Resto = (Soma * 10) % 11;
		
    if ((Resto == 10) || (Resto == 11))  
	{
		Resto = 0;
		return false;
	}
	
	if (Resto != parseInt(cpf.substring(9, 10)) ) //return false;
	{
		alert("O número do CPF é inválido");
		resultadoInvalido = "inválido";
		return false;
	}
   
	Soma = 0;
    for (i = 1; i <= 10; i++){
	Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
	Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))
	{
		Resto = 0;
		return false;
	}
	
    if (Resto != parseInt(cpf.substring(10, 11) ) ) //return false;
    {
		alert("O número do CPF é inválido");
		resultadoInvalido = "inválido";
		return false;
	}
}