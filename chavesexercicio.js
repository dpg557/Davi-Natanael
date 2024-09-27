// comando que permite fazer escolhas atraves do terminal pelo usuario, e a array de moradores, e as arrays de objetos Roubados o dos historico de Roubos
const readlineSync = require('readline-sync')
let moradores = [
    { nome: 'Chaves' },
    { nome: 'Seu Madruga' },
    { nome: 'Dona Florinda' },
    { nome: 'Quico' },
    { nome: 'Professor Girafales' },
    { nome: 'Chiquinha' },
    { nome: 'Senhor Barriga' }
]
let objetosRoubados = []
let  = []

// Função que escolhe aleatoriamente um morador para ser o ladrão
function escolherLadrao() {
    const index = Math.floor(Math.random() * moradores.length)
    return moradores[index]
}

// Função que cadastra um novo morador na vila, verificando se o nome já existe
function cadastrarMorador() {
    const nome = readlineSync.question('Digite o nome do novo morador: ')
    const existe = moradores.some(morador => morador.nome.toLowerCase() === nome.toLowerCase())
    if (existe) {
        console.log(`O morador ${nome} já está morando na vila.`)
    } else {
        moradores.push({ nome })
        console.log(`Morador ${nome} adicionado.`)
    }
}

// Função que remove um morador da vila, solicitando o índice do morador a ser retirado
function retirarMorador() {
    visualizarMoradores()
    const indice = readlineSync.questionInt('Digite o número do morador que deseja retirar: ') - 1
    if (indice >= 0 && indice < moradores.length) {
        const moradorRemovido = moradores.splice(indice, 1)
        console.log(`Morador ${moradorRemovido[0].nome} retirado da vila.`)
    } else {
        console.log('Número inválido. Tente novamente.')
    }
}

// Função que exibe todos os moradores da vila com seus respectivos índices
function visualizarMoradores() {
    console.log("Moradores da vila:")
    moradores.forEach((morador, index) => {
        console.log(`${index + 1}. ${morador.nome}`)
    })
}

// Função que adiciona um novo objeto roubado à lista de objetos
function adicionarObjetoRoubado() {
    const objeto = readlineSync.question('Digite o nome do novo objeto roubado: ')
    objetosRoubados.push(objeto)
    console.log(`Objeto ${objeto} adicionado à lista de objetos roubados.`)
}

// Função que exibe todos os objetos que foram roubados até o momento
function visualizarObjetosRoubados() {
    if (objetosRoubados.length === 0) {
        console.log('Nenhum objeto foi roubado ainda.')
    } else {
        console.log('Objetos roubados:')
        objetosRoubados.forEach((objeto, index) => {
            console.log(`${index + 1}. ${objeto}`)
        })
    }
}

// Função que exibe o histórico de roubos, mostrando ladrões e objetos roubados
function visualizarHistoricoRoubos() {
    if (historicoRoubos.length === 0) {
        console.log('Nenhum roubo registrado ainda.')
    } else {
        console.log('Histórico de roubos:')
        historicoRoubos.forEach((registro, index) => {
            console.log(`${index + 1}. Ladrão: ${registro.ladrao}, Objeto: ${registro.objeto}`)
        })
    }
}

// Função que investiga um ladrão escolhido aleatoriamente e registra o objeto que ele roubou
function investigarLadrao() {
    const ladrao = escolherLadrao()
    if (objetosRoubados.length === 0) {
        console.log("\x1b[32mNão há nenhum ladrão na vila do Chaves\x1b[0m")
    } else {
        const objetoRoubado = objetosRoubados.pop()
        historicoRoubos.push({ ladrao: ladrao.nome, objeto: objetoRoubado })
        console.log(`Após uma investigação detalhada descobriu-se que o ladrão é: ${ladrao.nome}!`)
        console.log(`${ladrao.nome} roubou: ${objetoRoubado}.`)
    }
}

// Função que exibe o menu principal com as opções disponíveis
function menu() {
    let opcao
    do {
        console.clear()
        console.log("\x1b[34m***********************************\x1b[0m")
        console.log("\x1b[32m      MISTÉRIO NA VILA DO CHAVES     \x1b[0m")
        console.log("\x1b[34m***********************************\x1b[0m")
        console.log("\n\x1b[33mEscolha uma opção:\x1b[0m")
        console.log("\x1b[32m{1}\x1b[0m. Investigar o ladrão")
        console.log("\x1b[32m{2}\x1b[0m. Cadastrar novo morador")
        console.log("\x1b[32m{3}\x1b[0m. Retirar um morador")
        console.log("\x1b[32m{4}\x1b[0m. Visualizar todos os moradores")
        console.log("\x1b[32m{5}\x1b[0m. Adicionar um novo objeto roubado")
        console.log("\x1b[32m{6}\x1b[0m. Visualizar todos os objetos roubados")
        console.log("\x1b[32m{7}\x1b[0m. Visualizar histórico de roubos")
        console.log("\x1b[32m{0}\x1b[0m. Sair")
// comando que concerta erros no terminal
        try {
            opcao = readlineSync.questionInt('Escolha uma opção: ')
        } catch (error) {
            console.log("Entrada inválida. Digite um número.")
            opcao = -1
        }
// comando que faz o menu de escolher a opção funcionar
        switch (opcao) {
            case 1: investigarLadrao(); break
            case 2: cadastrarMorador(); break
            case 3: retirarMorador(); break
            case 4: visualizarMoradores(); break
            case 5: adicionarObjetoRoubado(); break
            case 6: visualizarObjetosRoubados(); break
            case 7: visualizarHistoricoRoubos(); break
            case 0: console.log('Você saiu da vila do Chaves'); console.log("Créditos: Davi Natanael Cruz"); break
            default: console.log('Opção inválida. Tente novamente.')
        }
        readlineSync.question('\nPressione Enter para continuar...')
    } while (opcao !== 0)
}
// chama o menu
menu()
