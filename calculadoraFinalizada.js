const ask = require("readline-sync")
const numsei = ["+", "-", "*", "/", "%"]
let operacao, numero1, numero2
const menuOptions = [
    "1. Soma (+)", "2. Subtracao (-)", "3. Multiplicacao (*)", "4. Divisao (/)", "5. Modulo (%)"
]
function calcular() {
    while (true) {
        if ((operacao === "/" && numero2 === 0) || (operacao === "%" && numero2 === 0)) {
            console.log("Divisao por zero nao permitida.")
            numero2 = parseFloat(ask.question("Digite um segundo numero valido (diferente de 0): "))
            continue
        }
        let resultado
        switch (operacao) {
            case "+": resultado = numero1 + numero2; break
            case "-": resultado = numero1 - numero2; break
            case "*": resultado = numero1 * numero2; break
            case "/": resultado = numero1 / numero2; break
            case "%": resultado = numero1 % numero2; break
            default: console.log("Operacao invalida!"); return false
        }
        console.log("Resultado:", resultado)
        switch (ask.question("Escolha o que deseja fazer a seguir:\n6. Refazer calculo com os mesmos numeros mas com outra operacao\n7. Usar a mesma operacao mas com outros numeros\n8. Nova operacao com novos numeros\n0. Sair\nDigite o numero da opcao: ")) {
            case "6": operacao = numsei[+ask.question("Digite o numero da nova operacao (1-5): ") - 1]; break
            case "7": numero1 = parseFloat(ask.question("Digite o primeiro numero: ")); numero2 = parseFloat(ask.question("Digite o segundo numero: ")); break
            case "8": operacao = numsei[+ask.question("Digite o numero da nova operacao (1-5): ") - 1]; numero1 = parseFloat(ask.question("Digite o primeiro numero: ")); numero2 = parseFloat(ask.question("Digite o segundo numero: ")); break
            case "0": return false
            default: console.log("Opcao invalida!"); return false
        }
    }
}
while (true) {
    console.log("Escolha uma operacao:")
    menuOptions.forEach(option => console.log(option))
    const escolha = ask.question("Digite o numero da opcao: ")
    if (["1", "2", "3", "4", "5"].includes(escolha)) {
        operacao = numsei[+escolha - 1]
        numero1 = parseFloat(ask.question("Digite o primeiro numero: "))
        numero2 = parseFloat(ask.question("Digite o segundo numero: "))
        if (calcular() === false) break
    } else {
        console.log("Opcao invalida! Escolha um numero entre 1 e 5.")
    }
}
console.log("Ate Mais ;)")