const form =document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComArray =nomeCompleto.split('');
    return nomeComArray.length >= 2;
}

form.addEvetListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();


    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de:  <b>${valorDeposito.value}</b> deposito para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) {
       document.querySelector('success-massage').innerHTML = mensagemSucesso;

       nomeBeneficiario.value = '';
       numeroContaBeneficiario.value = '';
       valorDeposito.value = '';
        
    } else {
         alert("O nome não está comple")
    }
})

console.log(form);