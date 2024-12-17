// Sistema de Cadastro de Doadores de Sangue
const readline = require('readline-sync'); // Biblioteca para entrada de dados
const cadastro = []; // Lista de doadores

// Cores para formatação no console
const COR = {
    RESET: "\x1b[0m",
    VERDE: "\x1b[32m",
    AMARELO: "\x1b[33m",
    VERMELHO: "\x1b[31m",
    AZUL: "\x1b[36m",
};

// Funções de Validação
const validarNome = (nome) => /^[a-zA-Z\s]+$/.test(nome);
const validarNumero = (num) => /^[0-9]+$/.test(num);

// Função para cadastrar um novo doador
function cadastrarDoador() {
    console.clear();
    console.log(`${COR.AZUL}--- Cadastro de Novo Doador ---${COR.RESET}`);

    let nome;
    do {
        nome = readline.question("Digite seu nome: ");
        if (!validarNome(nome)) console.log(`${COR.VERMELHO}Nome invalido. Use apenas letras.${COR.RESET}`);
    } while (!validarNome(nome));

    let idade;
    do {
        idade = readline.question("Digite sua idade: ");
        if (!validarNumero(idade)) console.log(`${COR.VERMELHO}Idade invalida. Use apenas numeros.${COR.RESET}`);
    } while (!validarNumero(idade));

    let peso;
    do {
        peso = readline.question("Digite seu peso: ");
        if (!validarNumero(peso)) console.log(`${COR.VERMELHO}Peso invalido. Use apenas numeros.${COR.RESET}`);
    } while (!validarNumero(peso));

    const tipoSanguineo = readline.question("Digite seu tipo sanguineo: ").toUpperCase();

    let dia, mes, ano;
    do {
        dia = readline.question("Dia da doacao (dd): ");
        mes = readline.question("Mes da doacao (mm): ");
        ano = readline.question("Ano da doacao (aaaa): ");
        if (!validarNumero(dia) || !validarNumero(mes) || !validarNumero(ano)) {
            console.log(`${COR.VERMELHO}Data invalida. Use apenas numeros.${COR.RESET}`);
        }
    } while (!validarNumero(dia) || !validarNumero(mes) || !validarNumero(ano));

    cadastro.push({ nome, idade, peso, tipoSanguineo, data: `${dia}/${mes}/${ano}` });
    console.log(`${COR.VERDE}Doador cadastrado com sucesso!${COR.RESET}`);
    readline.question("\nPressione Enter para voltar ao menu...");
}

// Função para listar todos os doadores
function listarDoadores() {
    console.clear();
    console.log(`${COR.AZUL}--- Lista de Doadores ---${COR.RESET}`);
    if (cadastro.length === 0) {
        console.log(`${COR.VERMELHO}Nenhum doador cadastrado ainda.${COR.RESET}`);
    } else {
        console.log("NOME\t\tIDADE\tPESO\tTIPO\tDATA");
        console.log("-------------------------------------------------");
        for (const doador of cadastro) {
            console.log(`${doador.nome.padEnd(15)}\t${doador.idade}\t${doador.peso}\t${doador.tipoSanguineo}\t${doador.data}`);
        }
    }
    readline.question("\nPressione Enter para voltar ao menu...");
}

// Menu Principal
function menu() {
    let opcao;
    do {
        console.clear();
        console.log(`${COR.VERDE}=== SISTEMA DE DOADORES DE SANGUE ===${COR.RESET}`);
        console.log("1 - Cadastrar Doador");
        console.log("2 - Listar Doadores");
        console.log("0 - Sair");

        opcao = readline.question("\nEscolha uma opcao: ");
        switch (opcao) {
            case '1':
                cadastrarDoador();
                break;
            case '2':
                listarDoadores();
                break;
            case '0':
                console.log(`${COR.VERDE}Saindo... Ate mais!${COR.RESET}`);
                break;
            default:
                console.log(`${COR.VERMELHO}Opcao invalida. Tente novamente.${COR.RESET}`);
                readline.question("Pressione Enter para continuar...");
        }
    } while (opcao !== '0');
}

menu();

        }
    } while (opcao !== '0'); // Repete até que o usuário escolha sair
}
// Chama a função do menu para iniciar o programa
menu();
