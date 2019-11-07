function validacao(){
	
	var nome = formCadastro.nome.value;
	var cpf = formCadastro.strCPF.value;
	var email = formCadastro.email.value;
	var comentario = formCadastro.comentario.value;
  	
//---------------------------------------------------------------------------------------verifica nome	
	if (nome == ""){
		alert("Preencha o nome completo");
		formCadastro.nome.focus();
		return false;
	}	
		
//---------------------------------------------------------------------------------------verifica cpf
	//Link para validar CPF: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
	
	var Soma;
    var Resto;
    Soma = 0;
	resultadoInvalido = "";	
	
	if (cpf == ""){
		alert("Favor preencher o campo CPF");
		resultadoInvalido = "invalido";
		return false;
		formCadastro.strCPF.focus();
	}
	
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
		alert("CPF é inválido, pois está preenchido com " + cpf);
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
	/*if (resultadoInvalido != "inválido")
	{
		alert("O número do CPF é VÁLIDO");//return true;
	}*/
	//var strCPF = "12345678909";
	//alert(TestaCPF(strCPF));

//---------------------------------------------------------------------------------------verifica e-mail	
	if(email == "" || email.indexOf('@') == -1 ){
		alert("Campo e-mail invalido, digite seu e-mail corretamente");
		formCadastro.email.focus();
		return false;
	}

//---------------------------------------------------------------------------------------verifica comentario	
	if (comentario.length < 5){
		alert("Digite pelo menos 5 caracteres");
		formCadastro.comentario.focus();
		return false;
	}
}