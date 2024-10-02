// Davi Natanael e Diego Augusto

const readlineSync = require('readline-sync') // Importa a biblioteca readline-sync para entrada de dados do usuário
const cadrasto = [] // Inicializa um array vazio para armazenar os registros de doadores
const COLORS = { // Define um objeto para armazenar os códigos de cor ANSI para a saída no console
    RESET: "\x1b[0m",    // Cor reset
    BLUE: "\x1b[36m",    // Cor ciano
    GREEN: "\x1b[32m",   // Cor verde
    YELLOW: "\x1b[33m",  // Cor amarela
    RED: "\x1b[31m",     // Cor vermelha
    CYAN: "\x1b[36m"     // Cor ciano (duplicada)
}
function isValidName(name) { // Função para validar se o nome contém apenas letras e espaços
    return /^[a-zA-Z\s]+$/.test(name) // Testa a regex para o formato válido do nome
}
function isValidNumber(input) { // Função para validar se o que o usuario colocar contém apenas letras e espaços
    return /^[0-9]+$/.test(input) // Testa a regex para o formato válido do número
}
function cadrastarNovoDoador() { // Função para cadastrar um novo doador
    console.clear() // Limpa o console
    let nome; // Inicializa variável para o nome do doador
    do {
        nome = readlineSync.question('Digite seu nome: ') // Solicita o nome do doador
        if (!isValidName(nome)) { // Verifica se o nome é válido
            console.log("Nome invalido. Insira apenas letras.") // Mensagem de erro para nome inválido
        }
    } while (!isValidName(nome)); // Repete até que um nome válido seja inserido
    let idade; // Inicializa variável para a idade do doador
    do {
        idade = readlineSync.question('Digite sua idade: ') // Solicita a idade do doador
        if (!isValidNumber(idade)) { // Verifica se a idade é válida
            console.log("Idade invalida. Insira apenas numeros.") // Mensagem de erro para idade inválida
        }
    } while (!isValidNumber(idade)); // Repete até que uma idade válida seja inserida
    let peso; // Inicializa variável para o peso do doador
    do {
        peso = readlineSync.question('Digite seu Peso: ') // Solicita o peso do doador
        if (!isValidNumber(peso)) { // Verifica se o peso é válido
            console.log("Peso invalido. Insira apenas numeros.") // Mensagem de erro para peso inválido
        }
    } while (!isValidNumber(peso)); // Repete até que um peso válido seja inserido
    let tipoSanguineo = readlineSync.question('Qual seu tipo Sanguineo? ').toUpperCase() // Solicita o tipo sanguíneo e converte para maiúsculas
    let dia; // Inicializa variável para o dia da doação
    do {
        dia = readlineSync.question('Digite o dia da doacao (dd): ') // Solicita o dia da doação
        if (!isValidNumber(dia)) { // Verifica se o dia é válido
            console.log("Dia invalido. Insira apenas numeros.") // Mensagem de erro para dia inválido
        }
    } while (!isValidNumber(dia)); // Repete até que um dia válido seja inserido
    let mes; // Inicializa variável para o mês da doação
    do {
        mes = readlineSync.question('Digite o mes da doacao (mm): ') // Solicita o mês da doação
        if (!isValidNumber(mes)) { // Verifica se o mês é válido
            console.log("Mes invalido. Insira apenas numeros.") // Mensagem de erro para mês inválido
        }
    } while (!isValidNumber(mes)); // Repete até que um mês válido seja inserido
    let ano; // Inicializa variável para o ano da doação
    do {
        ano = readlineSync.question('Digite o ano da doacao (aaaa): ') // Solicita o ano da doação
        if (!isValidNumber(ano)) { // Verifica se o ano é válido
            console.log("Ano invalido. Insira apenas numeros.") // Mensagem de erro para ano inválido
        }
    } while (!isValidNumber(ano)); // Repete até que um ano válido seja inserido
    const doador = {// Cria um objeto doador com os dados coletados
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        data: { dia, mes, ano }
    };
    cadrasto.push(doador); // Adiciona o doador ao cadastro
    console.log('Doador cadastrado com sucesso!'); // Mensagem de sucesso
    readlineSync.question('\nPressione Enter para voltar ao menu...'); // Aguarda o usuário pressionar Enter
    console.clear() // Limpa o console
}
function listardoadores() { // Função para listar todos os doadores cadastrados
    console.clear() // Limpa o console
    console.log(`${COLORS.CYAN}--------------------`); // Exibe cabeçalho da listagem
    console.log("LISTAGEM DE DOADORES:");
    console.log("--------------------" + COLORS.RESET);
    console.log(`${COLORS.CYAN}NOME             | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO`);
    console.log("-----------------------------------------------------------------" + COLORS.RESET);
    for (const doador of cadrasto) { // Itera sobre cada doador cadastrado
        const dataDoador = `${doador.data.dia}/${doador.data.mes}/${doador.data.ano}`; // Formata a data do doador
        const linha = `${doador.nome.padEnd(16)} |  ${doador.idade.padStart(3)}   |  ${doador.peso.padStart(3)}  |      ${doador.tipoSanguineo.padEnd(2)}       |   ${dataDoador.padStart(10)}`; // Prepara a linha de saída
        console.log(`${COLORS.CYAN}${linha}${COLORS.RESET}`); // Exibe a linha formatada
    }
    console.log(`${COLORS.CYAN}-----------------------------------------------------------------${COLORS.RESET}`); // Exibe a linha final
    readlineSync.question('\nPressione Enter para voltar ao menu...'); // Aguarda o usuário pressionar Enter
    console.clear() // Limpa o console
}
function listartipoSanguineo() { // Função para listar doadores por tipo sanguíneo
    console.clear() // Limpa o console
    let tipoBuscado = readlineSync.question('Digite o tipo sanguineo desejado: ').toUpperCase(); // Solicita o tipo sanguíneo desejado
    // Filtra doadores pelo tipo sanguíneo
    const doadoresEncontrados = cadrasto.filter(doador => doador.tipoSanguineo === tipoBuscado);
    if (doadoresEncontrados.length > 0) { // Verifica se encontrou doadores
        console.log(`${COLORS.RED}------------------------`); // Exibe cabeçalho da busca
        console.log("RESULTADO DA BUSCA:");
        console.log("------------------------" + COLORS.RESET);
        console.log(`${COLORS.RED}NOME             | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO`);
        console.log("-----------------------------------------------------------------" + COLORS.RESET);
        for (const doador of doadoresEncontrados) { // Itera sobre os doadores encontrados
            const dataDoador = `${doador.data.dia}/${doador.data.mes}/${doador.data.ano}`; // Formata a data do doador
            const linha = `${doador.nome.padEnd(16)} |  ${doador.idade.padStart(3)}   |  ${doador.peso.padStart(3)}  |      ${doador.tipoSanguineo.padEnd(2)}       |   ${dataDoador.padStart(10)}`; // Prepara a linha de saída
            console.log(`${COLORS.RED}${linha}${COLORS.RESET}`); // Exibe a linha formatada
        }
        console.log(`${COLORS.RED}-----------------------------------------------------------------${COLORS.RESET}`); // Exibe a linha final
    } else {
        console.log(`${COLORS.RED}Nenhum doador encontrado com esse tipo sanguineo.${COLORS.RESET}`); // Mensagem caso não encontre doadores
    }
    readlineSync.question('\nPressione Enter para voltar ao menu...'); // Aguarda o usuário pressionar Enter
    console.clear() // Limpa o console
}
function listarpordata() { // Função que lista por data
    console.clear() // Limpa o console
    let dataBusca = readlineSync.question('Digite a data desejada (dd/mm/aaaa): '); // Solicita a data desejada
    const [diaBusca, mesBusca, anoBusca] = dataBusca.split('/'); // Divide a data em dia, mês e ano
    const dataBuscaFormatada = { dia: parseInt(diaBusca), mes: parseInt(mesBusca), ano: parseInt(anoBusca) }; // Cria objeto com a data formatada
    const doadoresFiltrados = cadrasto.filter(doador => { // Filtra doadores cuja data da última doação é anterior ou igual à data buscada
        const dataDoador = { dia: parseInt(doador.data.dia), mes: parseInt(doador.data.mes), ano: parseInt(doador.data.ano) }; // Formata a data do doador
        return (dataDoador.ano < dataBuscaFormatada.ano) || // Verifica se o ano é anterior
            (dataDoador.ano === dataBuscaFormatada.ano && dataDoador.mes < dataBuscaFormatada.mes) || // Verifica se o mês é anterior
            (dataDoador.ano === dataBuscaFormatada.ano && dataDoador.mes === dataBuscaFormatada.mes && dataDoador.dia <= dataBuscaFormatada.dia); // Verifica se o dia é anterior ou igual
    });
    if (doadoresFiltrados.length > 0) { // Verifica se encontrou doadores
        console.log(`${COLORS.YELLOW}------------------------`); // Exibe cabeçalho da busca
        console.log("RESULTADO DA BUSCA:");
        console.log("------------------------" + COLORS.RESET);
        console.log(`${COLORS.YELLOW}NOME             | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO`);
        console.log("-----------------------------------------------------------------" + COLORS.RESET);
        for (const doador of doadoresFiltrados) { // Itera sobre os doadores filtrados
            const dataDoador = `${doador.data.dia}/${doador.data.mes}/${doador.data.ano}`; // Formata a data do doador
            const linha = `${doador.nome.padEnd(16)} |  ${doador.idade.padStart(3)}   |  ${doador.peso.padStart(3)}  |      ${doador.tipoSanguineo.padEnd(2)}       |   ${dataDoador.padStart(10)}`; // Prepara a linha de saída
            console.log(`${COLORS.YELLOW}${linha}${COLORS.RESET}`); // Exibe a linha formatada
        }
        console.log(`${COLORS.YELLOW}-----------------------------------------------------------------${COLORS.RESET}`); // Exibe a linha final
    } else {
        console.log(`${COLORS.YELLOW}Nenhum doador encontrado com ultima doacao em ou antes de ${dataBusca}.${COLORS.RESET}`); // Mensagem caso não encontre doadores
    }
    readlineSync.question('\nPressione Enter para voltar ao menu...'); // Aguarda o usuário pressionar Enter
    console.clear() // Limpa o console
}
function menu() { // Função que exibe o menu principal
    let opcao; // Inicializa variável para a opção escolhida
    do {
        console.clear() // Limpa o console
        console.log(`${COLORS.GREEN}===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====${COLORS.RESET}`); // Exibe o cabeçalho do menu
        console.log("\n" + COLORS.YELLOW + "Escolha uma opcao:" + COLORS.RESET); // Solicita a escolha da opção
        console.log(COLORS.GREEN + "{1}" + COLORS.RESET + ". Cadastrar doador"); // Opção para cadastrar doador
        console.log(COLORS.GREEN + "{2}" + COLORS.RESET + ". Listar doadores"); // Opção para listar doadores
        console.log(COLORS.GREEN + "{3}" + COLORS.RESET + ". Buscar doador por tipo sanguineo"); // Opção para buscar por tipo sanguíneo
        console.log(COLORS.GREEN + "{4}" + COLORS.RESET + ". Buscar doador por data"); // Opção para buscar por data
        console.log(COLORS.GREEN + "{0}" + COLORS.RESET + ". Sair"); // Opção para sair
        opcao = readlineSync.question('\nDigite a opcao desejada: '); // Solicita a opção desejada
        switch (opcao) {
            case '1':  cadrastarNovoDoador();  break;/* Chama a função para cadastrar novo doador */
            case '2': listardoadores();  break; /* Chama a função para listar doadores */
            case '3': listartipoSanguineo(); break; /* Chama a função para buscar doador por tipo sanguíneo */
            case '4': listarpordata(); break; /* Chama a função para buscar doador por data*/
            case '0': console.log("Saindo do sistema...");  break; /* Mensagem de saída */
            default:
                console.log("Opcao invalida!"); /* Mensagem de opção inválida */
                readlineSync.question('\nPressione Enter para tentar novamente...'); // Aguarda o usuário pressionar Enter
        }
    } while (opcao !== '0'); // Repete até que o usuário escolha sair
}
// Chama a função do menu para iniciar o programa
menu();