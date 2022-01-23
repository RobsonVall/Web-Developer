function calculadora() {
    const OPERACAO = Number(prompt('Escolha a operação desejada:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão Real (/)\n5 - Divisão Inteira (%)\n6 - Potenciação (**)'));

    if (!OPERACAO || OPERACAO >= 7){
        alert(`Erro - Operação Inválida!`)
        calculadora();
    } else {
        let num1 = Number(prompt('Insira o primeiro valor: '));
        let num2 = Number(prompt('insira o segundo valor: '));
        let resultado;

        if (!num1 || !num2) {
            alert(`ERRO - Parâmetros inválidos!`);
            calculadora();
        } else {
            function soma() {
                resultado = num1 + num2;
                alert(`${num1} + ${num2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = num1 - num2;
                alert(`${num1} - ${num2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = num1 * num2;
                alert(`${num1} * ${num2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoReal() {
                resultado = num1 / num2;
                alert(`${num1} / ${num2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoInteira() {
                resultado = num1 % num2;
                alert(`O resto da divisão entre ${num1} e ${num2} é igual a ${resultado}`);
                novaOperacao();
            }
    
            function potenciacao() {
                resultado = num1 ** num2;
                alert(`${num1} elevado a ${num2}ª é igual a ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = Number(prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não'))
    
                if (opcao == 1) {
                    calculadora();
                } else if (opcao ==2) {
                    alert(`Até mais !!!!`)
                } else {
                    alert(`Digitie uma opção válida!`)
                    novaOperacao();
                }
            }

        }

        /*if (OPERACAO == 1) {
            soma();
        }else if (OPERACAO == 2){
            subtracao();
        }else if (OPERACAO == 3){
            multiplicacao();
        }else if (OPERACAO == 4) {
            divisaoReal();
        }else if (OPERACAO == 5) {
            divisaoInteira();
        }else if (OPERACAO == 6) {
            potenciacao();
        }*/

        switch (OPERACAO){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

calculadora();
