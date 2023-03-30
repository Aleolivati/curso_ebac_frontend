const form = document.getElementById('form-validador');


function validaNumero (number){
    return number == ''
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const alerta = document.querySelector('.alert') ;

    let validaNumeroA = false
    let validaNumeroB = false

    validaNumeroA = validaNumero(numeroA.value)
    validaNumeroB = validaNumero(numeroB.value)

    if (!validaNumeroA && !validaNumeroB) {
        if (numeroB.value>numeroA.value) {
            const success = document.querySelector('.success') ;
            success.classList.remove('almost-style') ;
            success.classList.add('success-style') ;
            success.innerHTML = `Números validados com Sucesso! ${numeroB.value} > ${numeroA.value}`;
            numeroA.value = "" ;
            numeroB.value = "" ;
            alerta.classList.remove('alert-style')
            numeroA.classList.remove('alert-box') ;
            numeroB.classList.remove('alert-box') ;
        } else {
            const almost = document.querySelector('.success') ;
            almost.classList.remove('success-style')
            almost.classList.add('almost-style')
            almost.innerHTML = `Favor inserir um número B maior do que o número A! ${numeroB.value} <= ${numeroA.value}`;
            alerta.classList.remove('alert-style')
            numeroA.classList.remove('alert-box') ;
            numeroB.classList.remove('alert-box') ;
        } 
    } else if (validaNumeroA && validaNumeroB) {
        const success = document.querySelector('.success') ;
        success.classList.remove('success-style') ;
        success.classList.remove('almost-style') ;
        alerta.classList.add('alert-style')
        alerta.innerHTML = 'Favor inserir os números nos campos A e B!' ;
        numeroA.classList.add('alert-box') ;
        numeroB.classList.add('alert-box') ;
    } else if (validaNumeroA) {
        const success = document.querySelector('.success') ;
        success.classList.remove('success-style') ;
        success.classList.remove('almost-style') ;
        alerta.classList.add('alert-style')
        alerta.innerHTML = 'Favor inserir o número no campo A!' ;
        numeroA.classList.add('alert-box') ;
        numeroB.classList.remove('alert-box') ;
    } else {
        const success = document.querySelector('.success') ;
        success.classList.remove('success-style') ;
        success.classList.remove('almost-style') ;
        alerta.classList.add('alert-style')
        alerta.innerHTML = 'Favor inserir o número no campo B!' ;
        numeroB.classList.add('alert-box') ;
        numeroA.classList.remove('alert-box') ;
    }
})




//     if (numeroA.value<numeroB.value) {
//         const success = document.getElementById('success') ;
//         success.style.display = "block";
//         success.innerHTML = `Núremos validados com Sucesso! ${numeroB.value} > ${numeroA.value}`;
//         numeroA.value = "" ;
//         numeroB.value = "" ;
//         alert.style.display = "none" ;
//         numeroA.classList.remove('alert-style') ;
//         numeroB.classList.remove('alert-style') ;
//     } else {
//         document.getElementById('success').style.display = "none;"
//         alert.style.display = "block";
//         if (numeroA.value == "" && numeroB.value == "") {
//             alert.innerHTML = 'Favor inserir os números nos campos A e B!' ;
//             numeroA.classList.add('alert-style') ;
//             numeroB.classList.add('alert-style') ;
//         } else if (numeroA == "") {
//             alert.innerHTML = 'Favor inserir os números no campo A!' ;
//             numeroA.classList.add('alert-style') ;
//             numeroB.classList.remove('alert-style') ;
//         } else {
//             alert.innerHTML == 'Favor inserir os números no campo B!' ;
//             numeroB.classList.add('alert-style') ;
//             numeroA.classList.remove('alert-style') ;
//         }
//     }
// })