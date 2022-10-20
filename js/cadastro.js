/**
 * @author Monique Moura <eumoniqueribeiro@gmail.com>
 */
document.getElementById('submit')
    .addEventListener("click", (e) => {
        e.preventDefault();
        CheckEmail();
        checkPassword();
        checkConfirmPasssword();

    });

function getCep() {
    cep = $('#cep').val().replace(/([^\d])+/gim, '');
    if (cep.length < 8) {
        $('#cepSpan').text('Cep Inválido').removeClass('d-none');
    } else {
        $('#cepSpan').addClass('d-none');
        fetch('https://viacep.com.br/ws/' + cep + '/json/')
            .then((response) => response.json())
            .then(data => {
                $('#rua').val(data.logradouro);
                $('#cidade').val(data.localidade);
                $('#estado').val(data.uf);
                $('#bairro').val(data.bairro);
                $('#complemento').val(data.complemento);
            });
    }
}

function checkPassword() {
    if ($('#senha').val().length <= 7) {
        $('#senhaSpan').text('A senha precisa ter no minimo 7 caracteres.')
            .removeClass('d-none');
        $('#senha').focus();
    } else {
        $('#senhaSpan').text('')
            .addClass('d-none');
    }
}

function checkConfirmPasssword() {
    if ($('#senha').val() !== $('#confirmaSenha').val()) {
        $('#senhaConfirmSpan').text('As senhas precisam ser iguais.')
            .removeClass('d-none');
        $('#confirmaSenha').focus();
    } else {
        $('#senhaConfirmSpan').text('')
            .addClass('d-none');
    }
}

function CheckEmail() {
    var re = /\S+@\S+\.\S+/;
    email = $('#email').val();
    if (!re.test(email)) {
        $('#emailSpan').text('E-mail Inválido')
            .removeClass('d-none');
        $('#email').focus();
    } else {
        $('#emailSpan').text('')
            .addClass('d-none');
    }
}

