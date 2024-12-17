const readline = require("readline-sync"); // Biblioteca para entrada de dados

const operadores = ["+", "-", "*", "/", "%"]; // Operadores disponíveis
const opcoesMenu = [
    "1. Soma (+)",
    "2. Subtração (-)",
    "3. Multiplicação (*)",
    "4. Divisão (/)",
    "5. Módulo (%)"
];

let operacao, num1, num2;

// Função para realizar o cálculo
function realizarCalculo() {
    while (true) {
        // Verifica divisão ou módulo por zero
        if ((operacao === "/" || operacao === "%") && num2 === 0) {
            console.log("Divisão por zero não é permitida.");
            num2 = parseFloat(readline.question("Digite um segundo número válido (diferente de 0): "));
            continue;
        }

        let resultado;

        // Realiza a operação escolhida
        switch (operacao) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                resultado = num1 / num2;
                break;
            case "%":
                resultado = num1 % num2;
                break;
            default:
                console.log("Operação inválida!");
                return false;
        }

        console.log(`Resultado: ${resultado}`);

        // Opções após o cálculo
        const proximaAcao = readline.question(
            "O que deseja fazer a seguir?\n" +
            "6. Refazer cálculo com os mesmos números, mas outra operação\n" +
            "7. Usar a mesma operação com outros números\n" +
            "8. Nova operação com novos números\n" +
            "0. Sair\n" +
            "Escolha uma opção: "
        );

        switch (proximaAcao) {
            case "6":
                const novaOp = parseInt(readline.question("Escolha a nova operação (1-5): "));
                if (novaOp >= 1 && novaOp <= 5) {
                    operacao = operadores[novaOp - 1];
                } else {
                    console.log("Opção de operação inválida.");
                }
                break;
            case "7":
                num1 = parseFloat(readline.question("Digite o primeiro número: "));
                num2 = parseFloat(readline.question("Digite o segundo número: "));
                break;
            case "8":
                const outraOp = parseInt(readline.question("Escolha a operação (1-5): "));
                if (outraOp >= 1 && outraOp <= 5) {
                    operacao = operadores[outraOp - 1];
                } else {
                    console.log("Opção de operação inválida.");
                }
                num1 = parseFloat(readline.question("Digite o primeiro número: "));
                num2 = parseFloat(readline.question("Digite o segundo número: "));
                break;
            case "0":
                return false;
            default:
                console.log("Opção inválida!");
                return false;
        }
    }
}

// Loop principal do programa
while (true) {
    console.log("\nEscolha uma operação:");
    opcoesMenu.forEach(op => console.log(op));

    const escolha = readline.question("Digite o número da opção: ");
    if (["1", "2", "3", "4", "5"].includes(escolha)) {
        operacao = operadores[parseInt(escolha) - 1];
        num1 = parseFloat(readline.question("Digite o primeiro número: "));
        num2 = parseFloat(readline.question("Digite o segundo número: "));
        if (realizarCalculo() === false) break;
    } else {
        console.log("Opção inválida! Por favor, escolha um número entre 1 e 5.");
    }
}

console.log("Até mais! ");
