function exerc1(){

    alert("EXERCICIO 1");
    alert("Faz a comparação de 2 numeros, verificando qual é o maior entre eles");
    let number1 = parseInt(prompt("Insira o primeiro número"));
    let number2 = parseInt(prompt("Insira o segundo número"));

    if(number1 > number2){

        return(document.write ("O primeiro número" + "(" + number1 + ") " + "é maior do que o segundo número" + "(" + number2 + ")"));

    }else{

        return(document.write("O segundo número" + "(" + number1 + ")" + "é maior que o primeiro número" + "(" + number1 + ")"));
    }
}

function exerc2(){
    
    alert("EXERCICIO 2");
    alert("Verfica se um número é positivo, negativo ou zero");
    let number = parseInt(prompt("Insira um número"));

    if(number > 0){

        return(document.write(number + ", é positivo"));

    }else if(number < 0){

        return(document.write(number + ", é negativo"));

    }else{

        return(document.write(number + ", é nulo"));

    }
}


function exerc3(){

    alert("EXERCICIO 3");
    alert("Recebe 3 numeros e verifica o maior entre eles");

    let number1 = parseInt(prompt("Insira o 1º número"));
    let number2 = parseInt(prompt("Insira o 2º número"));
    let number3 = parseInt(prompt("Insira o 3º número"));

    if(number1 > number2 && number1 > number3){

        return(document.write("O 1º número"  + "(" + number1 +")" + ", é o maior dentre os 3 números"));

    }

    if(number2 > number1 && number2 > number3){
        
        return(document.write("O 2º número" + "(" + number2 + ")" + ", é o maior dentre os 3 números"));

    }

    if(number3 > number1 && number3 > number2){

        return(document.write("O 3º número" + "(" + number3 + ")" + ", é o maior dentre os 3 números"));

    }
}

function exerc4(){
    
    alert("EXERCICIO 4");
    alert("Recebe 3 números e efetua a soma do 2 maiores números");

    let number1 = parseInt(prompt("Insira o 1º número"));
    let number2 = parseInt(prompt("Insira o 2º número"));
    let number3 = parseInt(prompt("Insira o 3º número"));

    if(number1 > number2 && number1 > number3){
        if(number2 > number3){

            let soma = number1 + number2;
            return(document.write("A soma dos dois maiores números é: " + soma));

        }
    }

    if(number2 > number1 && number2 > number3){
        if(number1 > number3){

            let soma = number2 + number1;
            return(document.write("A soma dos dois maiores números é: " + soma));

        }
    }

    if(number2 > number1 && number2 > number3){
        if(number3 > number1){

            let soma = number2 + number3;
            return(document.write("A soma dos dois maiores números é: " + soma));

        }
    }

    if(number3 > number1 && number3 > number2){
        if(number1 > number2){

            let soma = number3 + number1;
            return(document.write("A soma dos dois maiores números é: " + soma));

        }
    }

    if(number3 > number2 && number3 > number1){
        if(number2 > number1){

            let soma = number3 + number2;
            return(document.write("A soma dos dois maiores números é: " + soma));

        }
    }

    if(number1 > number2 && number1 > number3){
        if(number3 > number2){

            let soma = number1 + number3;
            return(document.write("A soma dos dois maiores números é: " + soma));

        }
    }
}

function exerc5(){

    alert("EXERCICIO 5");
    alert("Recebe 6 números e verifica a média aritmética deles");

    let number1 = parseInt(prompt("Insira o 1º número"));
    let number2 = parseInt(prompt("Insira o 2º número"));
    let number3 = parseInt(prompt("Insira o 3º número"));
    let number4 = parseInt(prompt("Insira o 4º número"));
    let number5 = parseInt(prompt("Insira o 5º número"));
    let number6 = parseInt(prompt("Insira o 6º número"));

    let media = (number1 + number2 + number3 + number4 + number5 + number6) / 6;

    return(document.write("A média artimética dos números recebidos é: " + media));
}

function exerc6(){

    alert("EXERCICIO 6");
    alert("Recebe 4 valores e verifica qual é o primeiro, o segundo e o maior de todos");

    let number1 = parseInt(prompt("Insira o 1º número"));
    let number2 = parseInt(prompt("Insira o 2º número"));
    let number3 = parseInt(prompt("Insira o 3º número"));
    let number4 = parseInt(prompt("Insira o 4º número"));

    if(number1 > number2 && number1 > number3 && number1 > number4){

        return(document.write("O primeiro número é: " + number1 + "/ O último número é: " + number4 + "/ O maior número é: " + number1));

    }

    if(number2 > number1 && number2 > number3 && number2 > number4){

        return(document.write("O primeiro número é: " + number1 + "/ O último número é: " + number4 + "/ O maior número é: " + number2));

    }

    if(number3 > number1 && number3 > number2 && number3 > number4){

        return(document.write("O primeiro número é: " + number1 + "/ O último número é: " + number4 + " / O maior número é: " + number3)); 

    }

    if(number4 > number1 && number4 > number2 && number4 > number3){

        return(document.write("O primeiro número é: " + number1 + "/ O último número é: " + number4 + "/ O maior número é: " + number4));

    }
}

function exerc7(){

    alert("EXERCICIO 7");
    alert("Recebe 6 números e soma todos os números com valor abaixo de 72");

    let number1 = parseInt(prompt("Insira o 1º número"));
    let number2 = parseInt(prompt("Insira o 2º número"));
    let number3 = parseInt(prompt("Insira o 3º número"));
    let number4 = parseInt(prompt("Insira o 4º número"));
    let number5 = parseInt(prompt("Insira o 5º número"));
    let number6 = parseInt(prompt("Insira o 6º número"));
    let soma = 0;

    

    if(number1 < 72){

        soma += number1;

    }

    if(number2 < 72){

        soma += number2;

    }

    if(number3 < 72){

        soma += number3;

    }

    if(number4< 72){

        soma += number4;

    }

    if(number5 < 72){

        soma += number5;

    }

    if(number6 < 72){

        soma += number6;

    }


    return(document.write("Os numeros informados foram: " + number1 + "," + number2 + "," + number3 + "," + number4 + "," + number5 + "," + number6 + "," + "  A soma dos valores inferiores a 72 deu: " + soma));

}

function exerc8(){

    alert("EXERCICIO 8");
    alert("Calcula a média de 4 valores informados pelo o usuario e lhe dá um resultado");

    let number1 = parseInt(prompt("Insira a 1º Nota"));
    let number2 = parseInt(prompt("Insira a 2º Nota"));
    let number3 = parseInt(prompt("Insira a 3º Nota"));       
    let number4 = parseInt(prompt("Insira a 4º Nota")); 
    let soma = 0;

    if(number1 > 0 && number1 < 10){

        soma += number1;

    }

    if(number2 > 0 && number2 < 10){

        soma += number2;

    }

    if(number3 > 0 && number3 < 10){

        soma += number3;

    }

    if(number4 > 0 && number4 < 10){

        soma += number4;

    }

    if((soma / 4) > 5 ){

        return(document.write("Você passou no Teste"));

    }else{

        return(document.write("Tente Novamente"));

    }

}

function exerc9(){

    alert("EXERCICIO 9");
    alert("Verifica se o usuario pode votar no Ano de 2022");

    let anoDeNascimento = parseInt(prompt("Insira o seu Ano de Nascimento"));

    if((2022 - anoDeNascimento) >= 18){

        return(document.write("Você já é maior de idade, se possuir o Titulo de Eleitor, você pode votar"));

    }

    if((2022 - anoDeNascimento) >= 16 && (2022 - anoDeNascimento) < 18){

        return(document.write("Você possui ou é maior de 16 anos e é possivel votar, caso queria e tenha titulo de eleitor, mas não é obrigatório. A obrigatoriedade é a partir de 18 anos"));

    }
}

function exerc10(){
    
    alert("EXERCICIO 10");
    alert("Calcula o Peso ideal para uma pessoa");

    let opcao = parseInt(prompt("Escolha a sua opção que defina seu genêro biológico. 1)Masculino   2)Feminino"));

    switch(opcao){

        case 1:

            let alturaHomem = parseFloat(prompt("Insira a sua Altura(Caso tenha numero quebrado, exemplo: 1,65, utilize ponto ao invés da vírgula(1.65))"));
            let calculoHomem = (72.7 * alturaHomem) - 58;
            return(document.write("O peso ideal para você é: " + calculoHomem));
            break;

        case 2:

            let alturaMulher = parseFloat(prompt("Insira a sua Altura(Caso tenha numero quebrado, exemplo: 1,65, utilize ponto ao invés da vírgula(1.65))"));
            let calculoMulher = (62.1 * alturaMulher) - 44.7;
            return(document.write("O peso ideal para você é: " + calculoMulher));
            break;
    }
}

function exerc11(){

    alert("EXERCICIO 11");
    alert("MicroCalculadora");

    let opcao = parseInt(prompt("Escolha a sua opção de calculo. 1)Adição   2)Subtração  3)Divsão  4)Multiplicação"));

    switch(opcao){

        case 1:

            let number1 = parseInt(prompt("Insira o 1º número"));
            let number2 = parseInt(prompt("Insira o 2º número"));

            while(number1 < 1 || number1 > 4 && number2 < 1 || number2 > 4){
                alert("Insira um número de 1 a 4");
                number1 = parseInt(prompt("Insira o 1º número"));
                number2 = parseInt(prompt("Insira o 2º número"));

            }

            let adicao = number1 + number2;

            return(document.write("O resultado da adição foi: " + adicao));

        case 2:

            let number3 = parseInt(prompt("Insira o 1º número"));
            let number4 = parseInt(prompt("Insira o 2º número"));

            while(number3 < 1 || number3 > 4 && number4 < 1 || number4 > 4){
                alert("Insira um número de 1 a 4");
                number3 = parseInt(prompt("Insira o 1º número"));
                number4 = parseInt(prompt("Insira o 2º número"));

            }

            let subtracao = number3 - number4;

            return(document.write("O resultado da subtração foi: " + subtracao));

        case 3:

            let number5 = parseInt(prompt("Insira o 1º número"));
            let number6 = parseInt(prompt("Insira o 2º número"));

            while(number5 < 1 || number5 > 4 && number6 < 1 || number6 > 4){
                alert("Insira um número de 1 a 4");
                number5 = parseInt(prompt("Insira o 1º número"));
                number6 = parseInt(prompt("Insira o 2º número"));

            }

            let divisao = number5 / number6;

            return(document.write("O resultado da divisão foi: " + divisao));

        case 4: 
             
            let number7 = parseInt(prompt("Insira o 1º número"));
            let number8 = parseInt(prompt("Insira o 2º número"));

            while(number7 < 1 || number7 > 4 && number8 < 1 || number8 > 4){
                alert("Insira um número de 1 a 4");
                number7 = parseInt(prompt("Insira o 1º número"));
                number8 = parseInt(prompt("Insira o 2º número"));

            }

            let multiplicacao = number7 * number8;

            return(document.write("O resultado da multilplicação foi: " + multiplicacao));
            
    }
}

let opcao = parseInt(prompt("Escolha a opcao desejada 1)Exercicio 1   2)Exercicio 2  3)Exercicio 3 4) Exercicio 4   5)Exercicio 5   6)Exercicio 6   7)Exercicio 7   8)Exercicio 8   9)Exercicio 9   10)Exercicio 10  11)Exercicio 11"));

switch(opcao){

    case 1:

        exerc1();
        break;

    case 2:

        exerc2();
        break;

    case 3:

        exerc3();
        break;

    case 4:

        exerc4();
        break;

    case 5:

        exerc5();
        break;

    case 6:

        exerc6();
        break;

    case 7:

        exerc7();
        break;

    case 8:

        exerc8();
        break;

    case 9:

        exerc9();
        break;

    case 10:

        exerc10();
        break;

    case 11:

        exerc11();
        break;
    
    default:

        alert("Opção Inválida, escolha uma opção de 1 a 11");
}