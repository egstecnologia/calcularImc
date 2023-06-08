/*
Abaixo de 17 muito baixo
Entre 17 e 18,49 abaixo do peso
Entre 18.5 e 24,99 peso normal
Entre 25 e 29,99 Acima do peso
Acima de 30 Obesidade mobirda
*/

function calcular(event){
    event.preventDefault(); //Para não limpar o formulario apos qualquer ação

    peso    = document.getElementById('peso').value;
    altura  = document.getElementById('altura').value;
    imc = peso / (altura * altura);
    //está la na div para apresentar o resultado, poderia ser repetido em cada if mas assim fica mais cleanCode
    resultado = document.getElementById('resultado'); 

    if(imc < 17 ){
        //O .innerHTMl vai escrever na div do formulario p resultado la no html
        //O .toFixed(2) limita a quantidade de casa decimais apos a virgula do resultado
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) +
                                '<br> Cuidado você está muito abaixo do peso';
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) +
        '<br> Você está abaixo do peso';
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) +
    '<br> Parabéns seu peso está normal'
    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) +
        '<br> Cuidado você acima do peso'
    } else if(imc >= 30){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) +
        '<br> Cuidado obesidade'
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

    
}