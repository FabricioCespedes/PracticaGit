
function mostrarSuma(){
    if ($('#num1S').val() !== '' && $('#num2S').val() !== '') {
        let num1 = parseInt($('#num1S').val());
        let num2 = parseInt($('#num2S').val());

        let resultado = (num1 + num2);
        console.log(resultado)
        $('#suma').html(resultado)
    }
}


function mostrarDividi(){
    if ($('#num1D').val() !== '' && $('#num2D').val() !== '') {
        let num1 = parseInt($('#num1D').val());
        let num2 = parseInt($('#num2D').val());
        let resultado = num1/num2

        if (!isFinite(resultado)) { //si el resultado no es un numero finito entonces muestra el mensaje sino entonces procede a escribir el resultado
            $('#dividir').html('No se puede dividir entre 0')
        }else{
            $('#dividir').html(resultado)
        }
    }
}

function mostrarMulti(){
    if ($('#num1M').val() !== '' && $('#num2M').val() !== '') {
        let num1 = parseInt($('#num1M').val());
        let num2 = parseInt($('#num2M').val());

        let resultado = (num1 * num2);
        console.log(resultado)
        $('#multiplicacion').html(resultado)
    }
}
