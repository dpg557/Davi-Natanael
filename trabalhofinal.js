const readlineSync = require('readline-sync');
const cadrasto = [];

function cadrastarNovoDoador() {
    let nome = readlineSync.question('Digite seu nome: ');
    let idade = readlineSync.question('Digite sua idade: ');
    let peso = readlineSync.question('Digite seu Peso: ');
    let tipoSanguineo = readlineSync.question('Qual seu tipo Sanguineo? ');
    let data = readlineSync.question('Qual eh a data que o pessoa esta fazendo a doacao de sangue, Ex: dd/mm/aaaa,Digite aqui: ');
    const doador = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        data: data
        /*
        data: {
            dia,
            mes,
            ano
        }
        */
    };

    cadrasto.push(doador);
    console.log('Doador cadastrado com sucesso!');
}

function listardoadores() {
    console.log("\x1b[36m--------------------");
    console.log("LISTAGEM DE DOADORES:");
    console.log("--------------------\x1b[0m");

    console.log("\x1b[36mNOME             | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO");
    console.log("-----------------------------------------------------------------\x1b[0m");

    cadrasto.forEach((doador, index) => {
        const linha = `${doador.nome.padEnd(16)} |  ${doador.idade.padStart(3)}   |  ${doador.peso.padStart(3)}  |      ${doador.tipoSanguineo.padEnd(2)}       |   ${doador.data.padStart(10)}`;
        console.log(`\x1b[36m${linha}\x1b[0m`);
    }); //for of

    console.log("\x1b[36m-----------------------------------------------------------------\x1b[0m");
}

function listartipoSanguineo() {
    let tipoBuscado = readlineSync.question('Digite o tipo sanguineo desejado: ');

    const doadoresEncontrados = cadrasto.filter(doador => doador.tipoSanguineo.toLowerCase() === tipoBuscado.toLowerCase());

    if (doadoresEncontrados.length > 0) {
        console.log("\x1b[31m------------------------");
        console.log("RESULTADO DA BUSCA:");
        console.log("------------------------\x1b[0m");

        console.log("\x1b[31mNOME             | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO");
        console.log("-----------------------------------------------------------------\x1b[0m");

        doadoresEncontrados.forEach((doador, index) => {
            const linha = `${doador.nome.padEnd(16)} |  ${doador.idade.padStart(3)}   |  ${doador.peso.padStart(3)}  |      ${doador.tipoSanguineo.padEnd(2)}       |   ${doador.data.padStart(10)}`;
            console.log(`\x1b[31m${linha}\x1b[0m`);
        });

        console.log("\x1b[31m-----------------------------------------------------------------\x1b[0m");
    } else {
        console.log("\x1b[31mNenhum doador encontrado com esse tipo sanguineo.\x1b[0m");
    }
}


function listarpordata() {
    let dataBusca = readlineSync.question('Digite a data desejada (dd/mm/aaaa): ');

    const [dia, mes, ano] = dataBusca.split('/');
    const dataBuscaFormatada = new Date(`${ano}-${mes}-${dia}`);

    const doadoresFiltrados = cadrasto.filter(doador => {
        const [diaDoador, mesDoador, anoDoador] = doador.data.split('/');
        const dataDoadorFormatada = new Date(`${anoDoador}-${mesDoador}-${diaDoador}`);
        return dataDoadorFormatada <= dataBuscaFormatada;
    });

    if (doadoresFiltrados.length > 0) {
        console.log("\x1b[33m------------------------");
        console.log("RESULTADO DA BUSCA:");
        console.log("------------------------\x1b[0m");

        console.log("\x1b[33mNOME             | IDADE | PESO | TIPO SANGUINEO | ULTIMA DOACAO");
        console.log("-----------------------------------------------------------------\x1b[0m");

        doadoresFiltrados.forEach(doador => {
            const linha = `${doador.nome.padEnd(16)} |  ${doador.idade.padStart(3)}   |  ${doador.peso.padStart(3)}  |      ${doador.tipoSanguineo.padEnd(2)}       |   ${doador.data.padStart(10)}`;
            console.log(`\x1b[33m${linha}\x1b[0m`);
        });

        console.log("\x1b[33m-----------------------------------------------------------------\x1b[0m");
    } else {
        console.log(`\x1b[33mNenhum doador encontrado com ultima doacao em ou antes de ${dataBusca}.\x1b[0m`);
    }
}


function menu() {
    let opcao;
    do {
        console.clear();
        console.log("\x1b[32m===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\x1b[0m");
        console.log("\n\x1b[33mEscolha uma opcao:\x1b[0m");
        console.log("\x1b[32m{1}\x1b[0m. Cadastrar doador");
        console.log("\x1b[32m{2}\x1b[0m. Listar doadores");
        console.log("\x1b[32m{3}\x1b[0m. Buscar doador por tipo sanguineo");
        console.log("\x1b[32m{4}\x1b[0m. Buscar doador por data da ultima doacao");
        console.log("\x1b[32m{5}\x1b[0m. Sair");

        try {
            opcao = readlineSync.questionInt('Escolha uma opcao: ');
        } catch (error) {
            console.log("Entrada invalida. Digite um numero.");
            opcao = -1;
        }

        switch (opcao) {
            case 1: cadrastarNovoDoador(); break;
            case 2: listardoadores(); break;
            case 3: listartipoSanguineo(); break;
            case 4: listarpordata(); break;
            case 5: console.log('Você saiu do programa'); break;
            default: console.log('Opcao invalida. Tente novamente.');
        }
        readlineSync.question('\nPressione Enter para continuar...');
    } while (opcao !== 5);
}

menu();
