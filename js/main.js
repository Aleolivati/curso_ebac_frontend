$(document).ready(function() {

    $('#phone').mask('(00) 0000-0000', {
        placeholder: '(__) ____-____'
    })

    $('#phone').on('keydown', function() {
        const validPhone = $('#phone').val().length

        if (validPhone<=13) {
            $('#phone').mask('(00) 0000-00009', {
                placeholder: '(__) ____-____'
            })
        } else {
            $('#phone').mask('(00) 00000-0000', {
                placeholder: '(__) _____-____'
            })
        }
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            name: 'Favor insirir seu nome',
            email: 'Favor inserir um e-mail válido',
            phone: 'Favor inserir um telefone válido',
            },

        submitHandler: function(form) {
            alert(`Seus dados foram enviados com sucesso!`)
            $('#name').val('')
            $('#email').val('')
            $('#phone').val('')
        }
    })
})