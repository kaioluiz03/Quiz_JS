const questionarioData =[
    {
        question: "O que é JavaScript?",
        a: "Uma língua falada",
        b: "Uma linguagem de marcação",
        c: "Uma linguagem de programação",
        d: "Uma ferramenta",
        correct: "c",
    },
    {
        question: "Quais das alternativas não é uma linguagem de programação?",
        a: "C++",
        b: "HTML",
        c: "JavaScript",
        d: "PHP",
        correct: "b", 
    },
    {
        question: "Qual das alternativas é o símbolo usado para concatenação(JS)?",
        a: "+",
        b: "*",
        c: "=",
        d: "/",
        correct: "a",
    },
    {
        question: "Qual das alternativas representa a estrutura básica de uma função?",
        a: "function = (nomeDaFunção)",
        b: "function nomedafuncao{} = ()",
        c: "nomeDaFuncao() {}",
        d: "function nomeDaFuncao() {}",
        correct: "d",
    },
    {
        question: "Qual das alternativas não representa uma estrutura de repetição ou loop?",
        a: "For",
        b: "Switch Case",
        c: "Do... While",
        d: "While",
        correct: "b",
    }
];

const questionario = document.getElementById("questionario");
const respostasElements = document.querySelectorAll(".resposta");

const questionElement1 = document.getElementById('question');
const texto_a = document.getElementById("texto_a");
const texto_b = document.getElementById("texto_b");
const texto_c = document.getElementById("texto_c");
const texto_d = document.getElementById("texto_d");
const submitBtm = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

load1Quiz ();

function load1Quiz() {
    desmarcarRespostas();
    const currentQuizDate = questionarioData[currentQuiz];

    questionElement1.innerText = currentQuizDate.question;
    texto_a.innerText = currentQuizDate.a;
    texto_b.innerText = currentQuizDate.b;
    texto_c.innerText = currentQuizDate.c;
    texto_d.innerText = currentQuizDate.d;

}

function getSelected(){
   
    let resposta = undefined;

    respostasElements.forEach((respostaElement) => {
        if(respostaElement.checked){
            resposta = respostaElement.id;
        }
    });

    return resposta;
}

function desmarcarRespostas() {
    respostasElements.forEach((respostaElement) => {
        respostaElement.checked = false;
    });
}

submitBtm.addEventListener("click", () => {
    //checar se vejo a resposta
    const resposta = getSelected()
    //console.log (resposta)

    if(resposta) {
        if(resposta === questionarioData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < questionarioData.length) {
            load1Quiz();
        }
        else {
            questionario.innerHTML = `
            <h2> Você respondeu de forma correta ${score}/${questionarioData.length} questões</h2> 
            <button onclick="location.reload()">Tentar novamente!</button>
            `;
        }
    }
});