const ask = require("readline-sync")

const numsei = ["+", "-", "*", "/", "%"]
let continuar = true

while (continuar) {
    const operacao = ask.question("Operacoes: + (adicao), - (subtracao), / (divisao), * (multiplicacao), % (modulo). Escolha: ")
    const numero1 = parseFloat(ask.question("Digite o primeiro numero: "))
    const numero2 = parseFloat(ask.question("Digite o segundo numero: "))
    let resultado;

    if (operacao === "/" && numero2 === 0 || operacao === "%" && numero2 === 0) {
        console.log("Divisao por zero nao permitida.")
        continue
    }

    switch (operacao) {
        case "+": resultado = numero1 + numero2; break
        case "-": resultado = numero1 - numero2; break
        case "*": resultado = numero1 * numero2; break
        case "/": resultado = numero1 / numero2; break
        case "%": resultado = numero1 % numero2; break
        default: 
            console.log("Operação invalida!")
            continue
    }

    console.log("Resultado:", resultado)

    if (ask.question("Outro calculo? (s/n): ").toLowerCase() !== "s") {
        continuar = false
    }
}

console.log("Ate Mais :)")