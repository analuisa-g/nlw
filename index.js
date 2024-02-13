const perguntas = [
    {
        pergunta: "Qual é a linguagem de programação mais comum para desenvolvimento web?",
        respostas: [
            "A) Java",
            "B) JavaScript",
            "C) Python",
        ],
        correta: 1
    },
    {
        pergunta: "O que é necessário para declarar uma variável em JavaScript?",
        respostas: [
            "A) let ou var",
            "B) const",
            "C) Todas as opções estão corretas",
        ],
        correta: 2
    },
    {
        pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "A) push()",
            "B) unshift()",
            "C) concat()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é DOM em JavaScript?",
        respostas: [
            "A) Uma linguagem de programação",
            "B) Uma biblioteca para manipulação de datas",
            "C) Uma interface que representa a estrutura de um documento HTML ou XML",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
        respostas: [
            "A) Converte uma string em um número inteiro",
            "B) Converte um número em uma string",
            "C) Retorna um valor booleano indicando se o número é par ou ímpar",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "A) ==",
            "B) ===",
            "C) =",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'forEach()' faz em JavaScript?",
        respostas: [
            "A) Retorna o primeiro elemento de um array",
            "B) Executa uma função uma vez para cada elemento do array",
            "C) Ordena os elementos de um array em ordem alfabética",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
        respostas: [
            "A) /* Este é um comentário */",
            "B) // Este é um comentário",
            "C) <!-- Este é um comentário -->",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "A) Retorna o tipo de dado de uma expressão",
            "B) Verifica se duas variáveis são do mesmo tipo",
            "C) Realiza a concatenação de duas strings",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "A) slice()",
            "B) pop()",
            "C) shift()",
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const TotalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + TotalDePerguntas

//Item vai ser um objeto de cada array
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) =>{
         const certa = event.target.value == item.correta
          
          corretas.delete(item)
          if(certa){
            corretas.add(item)

          }
          mostrarTotal.textContent = corretas.size + 'de' + TotalDePerguntas
        }
        
        
        
        //append sempre no final
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}

/*Forma de acessar a resposta correta de um objeto do array Perguntas: 
alert(perguntas[7].respostas[perguntas[7].correta])*/

/*o Array para o JavaScript também é um objeto*/