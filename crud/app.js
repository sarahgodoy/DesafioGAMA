/*
Eu sei que não vou passar para o evento final, eu mal consegui terminar o código, não consegui ter tempo para codar...
Dificilmente alguém vai ler isso, e se ler dificilmente vai se importar, mas não custa tentar.
Meu nome é Sarah, tenho 20 anos e estou desempregada, buscando um estágio ou trainee, eu realmente preciso do dinheiro e da experiência.
Há meses procuro uma vaga, mas sempre sou desclassificada por falta de hardskills ou experiência.
Sou uma pessoa que tem sede de coonhecimento e busco sempre aprender, mas parece que ninguém liga pra isso, só querem quem já sabe.
Se você puder me dar uma chance de CONSEGUIR de verdade um estágio que me permita aprender, eu agradeceria muito.
Me esforcei demais pra isso, mas mesmo nas mentorias, não consegui esclarecer minhas dúvidas.
Provavelmente não vai dar em nada... mas caso queira contato, moro no interior de SP.
(19) 98893 1454
Desculpa por gastar seu tempo.
*/



const cursos = require('./database')

const colecaoCursos[]

class Curso {
    constructor(id, titulo, descricao, imagem, professor, aulas){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this. imagem = imagem;
        this.professor = professor;
        this.aulas = aulas;
    }
}

function criarCurso (novoId, novoTitulo, novaDescricao, novaImagem, novoProfessor, novasAulas) {
    const novoId = read.question('Insira o id do novo curso: ')
    const novoTitulo = read.question('Insira o titulo do novo curso: ')
    const novaDescricao = read.question('Insira a descricao do novo curso: ')
    const novaImagem = read.question('Insira o caminho para a imagem do novo curso: ')
    const novoProfessor = read.question('Insira o nome do professor do novo curso: ')
    const novasAulas = read.question('Insira as aulas do novo curso: ')

    let novoCurso = new Curso (novoId, novoTitulo, novaDescricao, novaImagem, novoProfessor, novasAulas)
    colecaoCursos.push(novoCurso)
}

function atualizarCurso (novoId, novoTitulo, novaDescricao, novaImagem, novoProfessor, novasAulas) {
    const novoId = read.question('Insira o id do novo curso: ')
    const novoTitulo = read.question('Insira o titulo do novo curso: ')
    const novaDescricao = read.question('Insira a descricao do novo curso: ')
    const novaImagem = read.question('Insira o caminho para a imagem do novo curso: ')
    const novoProfessor = read.question('Insira o nome do professor do novo curso: ')
    const novasAulas = read.question('Insira as aulas do novo curso: ')

    let cursoAtualizado = Curso (novoId, novoTitulo, novaDescricao, novaImagem, novoProfessor, novasAulas)
    colecaoCursos.push(atualizarCurso)
}

function deletarCurso(id){

}

function exibirCurso(id){
    
}



//input
const read = require('readline-sync')
console.log('Bem vindo/a/e!')
const entrada = read.question('O que deseja fazer?\n[A]Criar um curso\n[B] Exibir um curso\n[C] Atualizar um curso\n[D] Deletar um curso\n[E] Listar cursos\n')

if (entrada.toLocaleUpperCase() === 'A'){
    criarCurso()
} 
else if (entrada.toLocaleUpperCase() === 'B'){
    //exibir curso
    const entradaId = read.question('Insira o id do curso que deseja exibir. ')
    //aqui vc arruma um jeito de mostrar o curso
    exibirCurso()
} 
else if (entrada.toLocaleUpperCase() === 'C'){
    //atualizar curso
    // não faço IDEIA de como fazer isso
    atualizarCurso()
}
else if (entrada.toLocaleUpperCase() === 'D'){
    //deletar curso
    const entradaId2 = read.question('Insira o id do curso que deseja deletar. ')
    //código pra deletar
    deletarCurso();
    console.log('Pronto! O curso selecionado foi deletado.')
}
else if (entrada.toLocaleUpperCase() === 'E'){
    //listar cursos
    /*const cursosOrdenados = cursos.sort((a,b) => a.id - b.id)
    console.log('Esses são todos os cursos disponíveis: ')
    console.table(cursosOrdenados)*/
    console.table(colecaoCursos)
}
else {
    console.log('Por favor, insira uma resposta válida.')
}