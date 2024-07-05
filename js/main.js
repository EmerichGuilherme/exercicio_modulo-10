$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        });

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder:'CPF: 000.000.000-00'
})

$('#cep').mask('00000-000', {
    placeholder:'CEP: 00000-000'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages:{
        nome: 'Insira seu nome',
        email: 'Insira seu email',
        telefone: 'Insira seu telefone',
        endereco: 'Insira seu endereco',
        cep: "insira seu CEP",
        cpf: 'Insira seu CPF'
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
})
