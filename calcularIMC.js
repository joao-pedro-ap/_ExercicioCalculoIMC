function CalcularIMC() {
    let peso = parseFloat(prompt("Digite o seu peso:"));
    let altura = parseFloat(prompt("Digite a sua altura:"));
    let imc = 0;
    let resultado;

    imc = peso / (altura * altura);

    console.log(imc);


    if (imc < 18.5) {
        resultado = "Abaixo do peso"
    }

    if (imc >= 18.5 && imc < 25) {
        resultado = "Peso normal"
    }

    else if (imc >= 25 && imc < 30) {
        resultado = "Sobrepeso"
    }


    else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade"
    }


    else if (imc >= 35 && imc < 40) {
        resultado = "Peso Obesidade 2"
    }

    else {
        resultado = "Peso Obesidade 3"
    }
alert(nome + " possui o imc " + imc + " e está " + resultado);

}

$(document).ready(function () {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.peso').mask("00,00",);
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });
});