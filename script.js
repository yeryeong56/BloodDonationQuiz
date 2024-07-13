document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            question: "1. 다음 글에서 OO에 들어갈 숫자로 알맞은 것은 무엇일까요?\n ‘헌혈은 크게 개인 헌혈과 단체 헌혈로 분류할 수 있다. 단체헌혈은 헌혈지원자가 OO명 이상인 단체를 중심으로 이루어지는데 헌혈을 희망하는 단체에서 해당 지역 혈액원 기획팀과 협의하여 헌혈 일정을 결정한 후 헌혈버스 또는 별도로 마련된 임시 헌혈공간에서 헌혈에 참여하게 된다.’",
            choices: ["a. 50", "b. 60", "c. 70"],
            answer: 'a',
            explanation: "해설: 단체헌혈은 헌혈지원자가 50명 이상인 단체를 중심으로 이루어집니다."
        },
        {
            question: "2. 헌혈의 종류에는 몇가지가 있을까요?",
            choices: ["a. 1가지", "b. 2가지", "c. 5가지"],
            answer: 'b',
            explanation: "해설: 헌혈의 종류에는 전혈헌혈과 성분헌혈로 2가지 종류가 있습니다. 전혈헌혈이란, 혈액의 모든성분(적혈구, 백혈구, 혈장, 혈소판)을 헌혈하는 것이고, 성분헌혈이란, 혈액의 특정성분만을 헌혈하는 것입니다."
        },
        {
            question: "3. 다음 글을 읽고 물음에 답하시오.\n ‘만 16세인 민수는 헌혈을 하기 위해 헌혈의 집을 방문했다. 헌혈의 집에서 간호사는 민수에게 만 16세는 (a) (b)헌혈이 가능하다고 했다.'\n 이때, (a)와 (b)에 들어갈 말로 알맞은 것을 고르시오.",
            choices: ["a. (a):혈소판, (b):성분", "b. (a):혈장, (b):성분", "c. (a):320mL, (b):전혈", "d. (a):360mL, (b):성분", "e. (a):400mL, (b):전혈"],
            answer: 'c',
            explanation: "해설: 만 16세는 320mL 전혈 헌혈만 가능합니다. 만 17세 이상부터는 모든 전혈헌혈 및 성분헌혈이 가능합니다."
        },
        {
            question: "4. 400mL 전혈헌혈을 하기 위해서 넘어야 하는 체중은?",
            choices: ["a. 40kg", "b. 45kg", "c. 50kg"],
            answer: 'c',
            explanation: "해설: 400mL 전혈헌혈은 다른 헌혈과는 달리, 남자 여자 모두 50kg 이상이어야 합니다. 그 외 헌혈 가능 체중 기준은 남자 50kg 이상, 여자 45kg 이상이어야 합니다."
        },
        {
            question: "5. 다음 글을 읽고 물음에 답하시오.\n ‘전혈헌혈을 하였을 때 다음 헌혈 가능일은 헌혈일로부터 p개월 후이고, 성분헌혈을 하였을 때 다음 헌혈 가능일은 헌혈일로부터 q일 후이다.\n 이때, q-p의 값으로 알맞은 것은?",
            choices: ["a. 12", "b. 13", "c. 14"],
            answer: 'a',
            explanation: "해설: 전혈헌혈을 하였을 때 다음 헌혈 가능일은 헌혈일로부터 2개월 후이고, 성분헌혈을 하였을 때 다음 헌혈 가능일은 헌혈일로부터 14일 후입니다."
        },
        {
            question: "6. 헌혈자에 대한 부작용은 헌혈자의 약 몇퍼센트에서 나타나는가?",
            choices: ["a. 2~4%", "b. 4~6%", "c. 6~8%"],
            answer: 'a',
            explanation: "해설: 헌혈자에 대한 부작용은 약 2~4%에서 나타납니다."
        },
        {
            question: "7. 1회 400cc(400mL)의 헌혈로 몇명의 생명을 살릴 수 있을까요?",
            choices: ["a. 1명", "b. 2명", "c. 3명"],
            answer: 'c',
            explanation: "해설: 1회 400cc(400mL)의 헌혈로 3명의 생명을 살릴 수 있습니다!"
        },
        {
            question: "8. 헌혈 후 받을 수 있는 헌혈 기념품으로 옳지 않은 것은?",
            choices: ["a. 문화상품권", "b. 영화관람권", "c. 편의점교환권", "d. 커피교환권", "e. 대한적십자사 인형"],
            answer: 'e',
            explanation: "해설: 헌혈 후 받을 수 있는 헌혈 기념품의 종류에는 문화상품권, 영화관람권, 편의점교환권, 커피교환권 그리고 멀티모바일 문화상품권 등이 있습니다."
        },
        {
            question: "9. 헌혈을 하면 빈혈에 걸린다? (o/x)",
            choices: ["o", "x"],
            answer: 'x',
            explanation: "해설: 개인의 몸 상태에 따라서 일시적인 빈혈증세가 나타날 수는 있으나, 헌혈로 인해 무조건 빈혈에 걸린다는 말은 틀렸습니다."
        },
        {
            question: "10. 헌혈이 심장마비를 감소시킨다? (o/x)",
            choices: ["o", "x"],
            answer: 'o',
            explanation: "해설: 핀란드 쿠오피오에 있는 공중보건연구소는 영국 의학전문지〈브리티시 메디컬저널〉최신호에 \"2682명의 중년남자를 대상으로 조사한 결과, 헌혈 경험이 있는 사람이 그렇지 않은 사람에 비해 심장마비에 걸릴 확률이 80%나 낮다.\"라고 발표했습니다."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const scoreElement = document.getElementById('score');
    const additionalInfoElement = document.getElementById('additional-info');

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setNextQuestion();
        } else {
            showResults();
        }
    });

    function startQuiz() {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(questions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(choice.charAt(0), question.answer, question.explanation));
            choicesElement.appendChild(button);
        });
    }

    function resetState() {
        nextBtn.style.display = 'none';
        while (choicesElement.firstChild) {
            choicesElement.removeChild(choicesElement.firstChild);
        }
    }

    function selectAnswer(selectedChoice, correctAnswer, explanation) {
        if (selectedChoice === correctAnswer) {
            score += 10; // 점수를 10점씩 올림
        }
        nextBtn.style.display = 'block';
    }

    function showResults() {
        quizScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        scoreElement.innerText = `당신의 점수는 ${score}점 입니다.`;
        if (score === 100) {
            additionalInfoElement.innerText = '축하합니다! 당신은 헌혈에 대해 잘 알고 계십니다.';
        } else {
            additionalInfoElement.innerText = '더 공부해보세요!';
        }
    }
});
