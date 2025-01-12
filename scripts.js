// Select all quiz buttons and the instruction section
const startBtns = document.querySelectorAll('.quiz-btn'); 
const inst = document.querySelector('.inst');

// Variable to track the quiz type
let selectedQuiz = '';

// Loop through each button and add event listeners
startBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        inst.classList.add('active'); // Show instructions for the clicked quiz
        // Store the quiz type based on the button clicked
        selectedQuiz = btn.closest('.quiz-card').querySelector('h2').innerText;
    });
});

// Handle the Exit button
const exit = document.querySelector('.btn-exit');
exit.addEventListener('click', () => {
    inst.classList.remove('active'); // Hide instructions when 'Exit' is clicked
});

// Handle the Continue button
document.querySelector('.btn-continue').addEventListener('click', function() {
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');

    const loader = document.createElement('div');
    loader.classList.add('loader');
    loadingScreen.appendChild(loader);

    document.body.appendChild(loadingScreen);

    // Redirect based on the selected quiz
    setTimeout(function() {
        if (selectedQuiz === "Python") {
            window.location.href = "quiz.html"; // Redirect to Python quiz
        } else if (selectedQuiz === "Java") {
            window.location.href = "java_quiz.html"; // Redirect to Java quiz
        } else if (selectedQuiz === "JavaScript") {
            window.location.href = "javascript_quiz.html"; // Redirect to JavaScript quiz
        }
    }, 1000);
});



let questionCount = 0; // Start at the first question
const nextBtn = document.querySelector('.next-btn');

// Show the first question initially
showQuestion(questionCount);

nextBtn.addEventListener('click', () => {
    questionCount++; // Move to the next question
    if (questionCount < questions.length) {
        showQuestion(questionCount); // Show the next question if it exists
    } else {
        alert("You've completed the quiz!"); // Notify that quiz is finished
        // You can also add code here to reset the quiz or navigate to a results page
    }
});

function showQuestion(index) {
    const questionText = document.querySelector('.question-text');
    const optionsList = document.querySelector('.option-list');

    // Update the question text
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    // Clear previous options
    optionsList.innerHTML = '';

    // Add new options
    questions[index].options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `<span>${option}</span>`;
        optionsList.appendChild(optionElement);
        
        // Option click event (optional)
        optionElement.addEventListener('click', () => {
            handleOptionClick(optionElement, option, questions[index].answer);
        });
    });
}
