//simple quiz game

let questions=[
    {
        question: 'what is the capital of india?',
        option: ['delhi', 'mumbai','bihar','kerala'],
        answer: 1,
    },
    {
        question:'which is the national animal of india?',
        option: ['lion', 'tiger','cow','dog'],
        answer: 2,
    },
    {
        question: 'which is the national language of india?',
        option:['hindi','english','malayalam', 'none'],
        answer: 4,
    },
    {
        question: 'which is the national anthem of india?',
        option: ['jai ho', 'vande mataram','jan-gan-man', 'teri mitti'],
        answer: 3,
    },
];
let score=0
for(let i=0; i<questions.length; i++){
    let q=questions[i]
    let userInput = prompt(`${q.question}\n1. ${q.option[0]}\n2. ${q.option[1]}\n3. ${q.option[2]}\n4. ${q.option[3]}\nEnter option number:`);
     userInput = parseInt(userInput);
    if( userInput===q.answer){
        console.log('you have choosed correct answer');
    }
    else{
        console.log('you have choosed wrong answer', `Correct answer is: ${q.option[q.answer - 1]}`);
    }
}
alert(`🎉 Quiz finished! Your score is ${score}/${questions.length}`);