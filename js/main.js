$(document).ready(function(){
    
    $('#phone').mask('(00) 0000-0000', {
        placeholder: '(00) 0000-0000'
    })
    
    $('#phone').on('keydown', function() {
        const lengthPhone = $('#phone').val().length
        console.log(lengthPhone)
        if(lengthPhone<=13) {
            $('#phone').mask('(00) 0000-00009', {
                placeholder: '(00) 0000-0000'
            })
        } else {
            $('#phone').mask('(00) 00000-0000', {
                placeholder: '(00) 00000-0000'
            })
        }
    })    
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })
})