
const dbmsQuestions = [
    {
        question: "What is DBMS?",
        answer: "Database Management System",
        explanation: "DBMS is software used to store, organize, manage, and retrieve data in a database."
    },
    {
        question: "What is Primary Key?",
        answer: "Unique Key",
        explanation: "A Primary Key uniquely identifies each record in a database table. It cannot contain duplicate or NULL values."
    },
    {
        question: "What is Foreign Key?",
        answer: "Key used to connect two tables",
        explanation: "A Foreign Key connects two tables by referring to a key in another table. It helps maintain relationships between tables."
    },
    {
        question: "What is SQL?",
        answer: "Structured Query Language",
        explanation: "SQL is used to create, retrieve, update, and delete data in relational databases."
    },
    {
        question: "What is Normalization?",
        answer: "Process of reducing data redundancy",
        explanation: "Normalization organizes database tables to reduce duplicate data and improve data consistency."
    }
];
// ===============================
// DBMS EASY QUESTIONS
// ===============================

const dbmsEasyQuestions = [

    {
        question: "What is DBMS?",
        answer: "Database Management System",
        explanation: "DBMS is software used to store, organize, manage, and retrieve data."
    },

    {
        question: "What is a database?",
        answer: "Collection of Data",
        explanation: "A database is an organized collection of related data."
    },

    {
        question: "What is SQL?",
        answer: "Structured Query Language",
        explanation: "SQL is used to create, retrieve, update, and delete data in databases."
    },

    {
        question: "What is Primary Key?",
        answer: "Unique Key",
        explanation: "A Primary Key uniquely identifies each record in a table."
    },

    {
        question: "What is a table?",
        answer: "Collection of Rows and Columns",
        explanation: "A table stores data in rows and columns."
    }
];


// ===============================
// DBMS MEDIUM QUESTIONS
// ===============================

const dbmsMediumQuestions = [

    {
        question: "What is Foreign Key?",
        answer: "Key used to connect two tables",
        explanation: "A Foreign Key connects two tables by referring to a key in another table."
    },

    {
        question: "What is Normalization?",
        answer: "Process of reducing data redundancy",
        explanation: "Normalization organizes tables to reduce duplicate data and improve consistency."
    },

    {
        question: "What is a candidate key?",
        answer: "Possible Primary Key",
        explanation: "A candidate key is a column or set of columns that can uniquely identify a record."
    },

    {
        question: "What is a relationship in DBMS?",
        answer: "Connection between tables",
        explanation: "A relationship represents the connection between two or more tables."
    },

    {
        question: "What is a transaction?",
        answer: "Logical Unit of Work",
        explanation: "A transaction is a sequence of database operations treated as one logical unit of work."
    }
];


// ===============================
// DBMS HARD QUESTIONS
// ===============================

const dbmsHardQuestions = [

    {
        question: "What is ACID property?",
        answer: "Atomicity Consistency Isolation Durability",
        explanation: "ACID properties ensure reliable database transactions through Atomicity, Consistency, Isolation, and Durability."
    },

    {
        question: "What is indexing?",
        answer: "Technique to speed up data retrieval",
        explanation: "Indexing creates a data structure that helps the database retrieve records faster."
    },

    {
        question: "What is a deadlock?",
        answer: "Situation where transactions wait for each other",
        explanation: "A deadlock occurs when two or more transactions wait for resources held by each other."
    },

    {
        question: "What is a view?",
        answer: "Virtual Table",
        explanation: "A view is a virtual table created from the result of a SQL query."
    },

    {
        question: "What is functional dependency?",
        answer: "Relationship between attributes",
        explanation: "Functional dependency describes how one attribute determines another attribute in a relation."
    }
];


const pythonQuestions = [
    {
        question: "What is Python?",
        answer: "Programming Language",
        explanation: "Python is a high-level programming language used for web development, automation, data science, and AI."
    },
    {
        question: "What is List?",
        answer: "Collection of items",
        explanation: "A list stores multiple items in one variable. Lists are ordered and can be modified."
    },
    {
        question: "What is Tuple?",
        answer: "Immutable Collection",
        explanation: "A tuple stores multiple items in one variable. Once created, its items cannot be changed."
    },
    {
        question: "What is Dictionary?",
        answer: "Key Value Pair",
        explanation: "A dictionary stores data as key-value pairs. Each key is used to access its corresponding value."
    },
    {
        question: "What is Function?",
        answer: "Reusable Block of Code",
        explanation: "A function is a reusable block of code that performs a specific task whenever it is called."
    }
];
// ===============================
// PYTHON EASY QUESTIONS
// ===============================

const pythonEasyQuestions = [

    {
        question: "What is Python?",
        answer: "Programming Language",
        explanation: "Python is a high-level programming language used for many applications."
    },

    {
        question: "What is a variable?",
        answer: "Storage for a value",
        explanation: "A variable is used to store a value in a program."
    },

    {
        question: "What is a List?",
        answer: "Collection of items",
        explanation: "A list stores multiple items in a single variable and can be modified."
    },

    {
        question: "What is a Tuple?",
        answer: "Immutable Collection",
        explanation: "A tuple stores multiple values and cannot be changed after creation."
    },

    {
        question: "What is a comment?",
        answer: "Note in the program",
        explanation: "A comment is text written in code to explain the program and is ignored during execution."
    }
];


// ===============================
// PYTHON MEDIUM QUESTIONS
// ===============================

const pythonMediumQuestions = [

    {
        question: "What is a Dictionary?",
        answer: "Key Value Pair",
        explanation: "A dictionary stores data in key-value pairs."
    },

    {
        question: "What is a function?",
        answer: "Reusable Block of Code",
        explanation: "A function is a reusable block of code that performs a specific task."
    },

    {
        question: "What is a module?",
        answer: "Python File",
        explanation: "A module is a Python file containing functions, variables, or classes that can be reused."
    },

    {
        question: "What is inheritance?",
        answer: "Acquiring properties from another class",
        explanation: "Inheritance allows one class to acquire properties and methods from another class."
    },

    {
        question: "What is exception handling?",
        answer: "Handling Runtime Errors",
        explanation: "Exception handling manages runtime errors using mechanisms such as try and except."
    }
];


// ===============================
// PYTHON HARD QUESTIONS
// ===============================

const pythonHardQuestions = [

    {
        question: "What is a decorator?",
        answer: "Function that modifies another function",
        explanation: "A decorator modifies or extends the behavior of another function without changing its source code."
    },

    {
        question: "What is a generator?",
        answer: "Function that yields values",
        explanation: "A generator produces values one at a time using the yield keyword."
    },

    {
        question: "What is lambda function?",
        answer: "Anonymous Function",
        explanation: "A lambda function is a small anonymous function defined using the lambda keyword."
    },

    {
        question: "What is polymorphism?",
        answer: "Ability to use one interface for different forms",
        explanation: "Polymorphism allows the same operation or interface to work with different types of objects."
    },

    {
        question: "What is garbage collection?",
        answer: "Automatic Memory Management",
        explanation: "Garbage collection automatically removes objects that are no longer needed and frees memory."
    }
];

const javaQuestions = [
    {
        question: "What is Java?",
        answer: "Object Oriented Programming Language",
        explanation: "Java is a high-level programming language used to develop applications. It supports object-oriented programming."
    },
    {
        question: "What is JVM?",
        answer: "Java Virtual Machine",
        explanation: "JVM executes Java bytecode and helps Java programs run on different platforms."
    },
    {
        question: "What is JDK?",
        answer: "Java Development Kit",
        explanation: "JDK contains the tools needed to develop, compile, and run Java programs."
    },
    {
        question: "What is JRE?",
        answer: "Java Runtime Environment",
        explanation: "JRE provides the environment and libraries needed to run Java applications."
    },
    {
        question: "What is OOP?",
        answer: "Object Oriented Programming",
        explanation: "OOP organizes programs using classes and objects. Its main concepts include encapsulation, inheritance, polymorphism, and abstraction."
    }
];
// ===============================
// JAVA EASY QUESTIONS
// ===============================

const javaEasyQuestions = [

    {
        question: "What is Java?",
        answer: "Object Oriented Programming Language",
        explanation: "Java is a high-level programming language that supports object-oriented programming."
    },

    {
        question: "What is JVM?",
        answer: "Java Virtual Machine",
        explanation: "JVM executes Java bytecode and helps Java programs run on different platforms."
    },

    {
        question: "What is JDK?",
        answer: "Java Development Kit",
        explanation: "JDK provides the tools required to develop, compile, and run Java programs."
    },

    {
        question: "What is JRE?",
        answer: "Java Runtime Environment",
        explanation: "JRE provides the environment and libraries required to run Java applications."
    },

    {
        question: "What is a class?",
        answer: "Blueprint for Objects",
        explanation: "A class is a blueprint or template used to create objects."
    }
];


// ===============================
// JAVA MEDIUM QUESTIONS
// ===============================

const javaMediumQuestions = [

    {
        question: "What is an object?",
        answer: "Instance of a Class",
        explanation: "An object is an instance of a class that contains data and behavior."
    },

    {
        question: "What is inheritance?",
        answer: "Acquiring properties from another class",
        explanation: "Inheritance allows one class to acquire properties and methods from another class."
    },

    {
        question: "What is polymorphism?",
        answer: "Ability to take many forms",
        explanation: "Polymorphism allows the same method or interface to behave differently in different situations."
    },

    {
        question: "What is encapsulation?",
        answer: "Wrapping Data and Methods",
        explanation: "Encapsulation combines data and methods into a single unit and protects the data from direct access."
    },

    {
        question: "What is method overloading?",
        answer: "Same Method with Different Parameters",
        explanation: "Method overloading allows multiple methods with the same name but different parameter lists."
    }
];


// ===============================
// JAVA HARD QUESTIONS
// ===============================
// ===============================
// JAVA HARD QUESTIONS
// ===============================

const javaHardQuestions = [

    {
        question: "What is method overriding?",
        answer: "Redefining Parent Class Method",
        explanation: "Method overriding occurs when a child class provides its own implementation of a method inherited from the parent class."
    },

    {
        question: "What is an abstract class?",
        answer: "Class that cannot be instantiated",
        explanation: "An abstract class cannot be directly instantiated and may contain abstract and non-abstract methods."
    },

    {
        question: "What is an interface?",
        answer: "Blueprint of a class",
        explanation: "An interface defines a contract of methods that implementing classes must provide."
    },

    {
        question: "What is exception handling?",
        answer: "Handling Runtime Errors",
        explanation: "Exception handling manages runtime errors using try, catch, finally, throw, and throws."
    },

    {
        question: "What is multithreading?",
        answer: "Executing Multiple Threads",
        explanation: "Multithreading allows multiple threads to execute concurrently within a program."
    }
];


const cQuestions = [
    {
        question: "Who developed C?",
        answer: "Dennis Ritchie",
        explanation: "Dennis Ritchie developed the C programming language at Bell Laboratories in the early 1970s."
    },
    {
        question: "What is Array?",
        answer: "Collection of Similar Data",
        explanation: "An array stores multiple elements of the same data type under one name. Elements are accessed using indexes."
    },
    {
        question: "What is Pointer?",
        answer: "Stores Memory Address",
        explanation: "A pointer is a variable that stores the memory address of another variable or object."
    },
    {
        question: "What is Function?",
        answer: "Reusable Block of Code",
        explanation: "A function is a reusable block of code designed to perform a particular task."
    },
    {
        question: "What is Loop?",
        answer: "Repeats a Block of Code",
        explanation: "A loop repeats a block of code while a condition is satisfied or for a specified number of times."
    }
];
// ===============================
// C PROGRAMMING EASY QUESTIONS
// ===============================

const cEasyQuestions = [

    {
        question: "Who developed C?",
        answer: "Dennis Ritchie",
        explanation: "Dennis Ritchie developed the C programming language at Bell Laboratories."
    },

    {
        question: "What is a variable?",
        answer: "Storage for a value",
        explanation: "A variable is used to store a value in a program."
    },

    {
        question: "What is an array?",
        answer: "Collection of Similar Data",
        explanation: "An array stores multiple elements of the same data type."
    },

    {
        question: "What is a pointer?",
        answer: "Stores Memory Address",
        explanation: "A pointer is a variable that stores the memory address of another variable."
    },

    {
        question: "What is a loop?",
        answer: "Repeats a Block of Code",
        explanation: "A loop repeatedly executes a block of code while a condition is satisfied."
    }
];


// ===============================
// C PROGRAMMING MEDIUM QUESTIONS
// ===============================
const cMediumQuestions = [
    {
        question: "What is a function?",
        answer: "Reusable Block of Code",
        explanation: "A function is a reusable block of code designed to perform a specific task."
    },
    {
        question: "What is a structure?",
        answer: "Collection of Different Data Types",
        explanation: "A structure groups variables of different data types under one name."
    },
    {
        question: "What is recursion?",
        answer: "Function Calling Itself",
        explanation: "Recursion occurs when a function calls itself to solve a problem."
    },
    {
        question: "What is a string in C?",
        answer: "Array of Characters",
        explanation: "A string in C is a sequence of characters terminated by a null character."
    },
    {
        question: "What is dynamic memory allocation?",
        answer: "Allocating Memory at Runtime",
        explanation: "Dynamic memory allocation allows memory to be allocated during program execution."
    }
];
const cHardQuestions = [
    {
        question: "What is a dangling pointer?",
        answer: "Pointer to Freed Memory",
        explanation: "A dangling pointer points to a memory location that has already been freed or is no longer valid."
    },
    {
        question: "What is a function pointer?",
        answer: "Pointer to a Function",
        explanation: "A function pointer stores the address of a function and can be used to call that function."
    },
    {
        question: "What is memory leak?",
        answer: "Allocated Memory Not Freed",
        explanation: "A memory leak occurs when allocated memory is not released after it is no longer needed."
    },
    {
        question: "What is a preprocessor?",
        answer: "Processes Directives Before Compilation",
        explanation: "The C preprocessor processes directives such as #include and #define before compilation."
    },
    {
        question: "What is a segmentation fault?",
        answer: "Invalid Memory Access",
        explanation: "A segmentation fault occurs when a program tries to access an invalid or restricted memory location."
    }
];


const hrQuestions = [
    {
        question: "Tell me about yourself.",
        answer: "Introduce Yourself",
        explanation: "Give a short introduction including your name, education, technical skills, interests, and career goal."
    },
    {
        question: "What are your strengths?",
        answer: "Hardworking",
        explanation: "Mention genuine strengths such as being hardworking, adaptable, responsible, or a quick learner. Give a simple example."
    },
    {
        question: "Why should we hire you?",
        answer: "I am a quick learner",
        explanation: "Explain how your skills, willingness to learn, teamwork, and dedication can help the organization."
    },
    {
        question: "What is your weakness?",
        answer: "I overthink sometimes",
        explanation: "Mention a genuine weakness and explain what steps you are taking to improve it."
    },
    {
        question: "Where do you see yourself in 5 years?",
        answer: "Successful Software Engineer",
        explanation: "Describe your goal of improving your technical skills, gaining experience, and growing in your career."
    }
];
const hrEasyQuestions = [
    {
        question: "Tell me about yourself.",
        answer: "Introduce Yourself",
        explanation: "Give a short introduction including your name, education, skills, interests, and career goal."
    },
    {
        question: "What are your strengths?",
        answer: "Hardworking",
        explanation: "Mention your genuine strengths such as hardworking, quick learning, teamwork, or adaptability."
    },
    {
        question: "What is your career goal?",
        answer: "Become a Successful Software Engineer",
        explanation: "Explain your career goal and how you plan to improve your technical and professional skills."
    },
    {
        question: "Are you a team player?",
        answer: "Yes, I am a team player",
        explanation: "Explain that you can cooperate with team members, communicate clearly, and complete tasks together."
    },
    {
        question: "Why should we hire you?",
        answer: "I am a quick learner",
        explanation: "Explain how your skills, dedication, willingness to learn, and teamwork can benefit the company."
    }
];
const hrMediumQuestions = [
    {
        question: "What is your biggest achievement?",
        answer: "My Biggest Achievement",
        explanation: "Talk about an achievement from your studies, projects, internship, or other activities and explain what you learned."
    },
    {
        question: "How do you handle pressure?",
        answer: "I Stay Calm and Manage My Work",
        explanation: "Explain how you stay calm, prioritize tasks, and complete your work step by step."
    },
    {
        question: "Why do you want to join our company?",
        answer: "To Learn and Grow",
        explanation: "Explain that you want to learn new skills, gain experience, and contribute to the organization."
    },
    {
        question: "How do you handle failure?",
        answer: "I Learn from My Mistakes",
        explanation: "Explain that you analyze the mistake, learn from it, and try to improve your future performance."
    },
    {
        question: "What motivates you?",
        answer: "Learning and Growth",
        explanation: "Mention what motivates you, such as learning new things, achieving goals, improving skills, or taking responsibility."
    }
];
const hrHardQuestions = [
    {
        question: "Describe a challenging situation you faced and how you solved it.",
        answer: "I Solved the Problem Step by Step",
        explanation: "Explain the situation, what problem you faced, what action you took, and what result you achieved."
    },
    {
        question: "How would you handle a conflict with a team member?",
        answer: "I Would Communicate and Solve the Problem",
        explanation: "Explain that you would communicate calmly, understand the other person's view, and work together to find a solution."
    },
    {
        question: "Where do you see yourself in 5 years?",
        answer: "Successful Software Engineer",
        explanation: "Describe your goal of becoming a skilled professional, gaining experience, taking responsibilities, and growing in your career."
    },
    {
        question: "What would you do if you disagreed with your manager?",
        answer: "I Would Respectfully Discuss My View",
        explanation: "Explain that you would respectfully share your opinion, listen to your manager, and follow the final decision professionally."
    },
    {
        question: "Why should we choose you over other candidates?",
        answer: "I am Dedicated and Willing to Learn",
        explanation: "Highlight your relevant skills, willingness to learn, dedication, adaptability, and how you can contribute to the company."
    }
];
 


// ===============================
// VARIABLES
// ===============================

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 30;
let timer;
let reviewAnswers = [];


// ===============================
// START INTERVIEW
// ===============================

function startInterview() {
  let n = document.getElementById("name").value;
    let s = document.getElementById("subject").value;
    let d = document.getElementById("difficulty").value;

    if (n.trim() === "") {
        alert("Enter your name");
        return;
    }

    if (s === "") {
        alert("Select subject");
        return;
    }
    if (d === "") {
    alert("Select difficulty");
    return;
}

    // Save user details
    localStorage.setItem("userName", n);
    localStorage.setItem("subject", s);
    localStorage.setItem("difficulty", d);

    // Remove old data
    localStorage.removeItem("questions");
    localStorage.removeItem("score");

    // Select questions
    if (s === "DBMS") {

    if (d === "Easy") {

        questions = dbmsEasyQuestions;

    }
    else if (d === "Medium") {

        questions = dbmsMediumQuestions;

    }
    else if (d === "Hard") {

        questions = dbmsHardQuestions;

    }

}
    else if (s === "Python") {

    if (d === "Easy") {

        questions = pythonEasyQuestions;

    }
    else if (d === "Medium") {

        questions = pythonMediumQuestions;

    }
    else if (d === "Hard") {

        questions = pythonHardQuestions;

    }

}
    else if (s === "Java") {

    if (d === "Easy") {

        questions = javaEasyQuestions;

    }
    else if (d === "Medium") {

        questions = javaMediumQuestions;

    }
    else if (d === "Hard") {

        questions = javaHardQuestions;

    }

}
    else if (s === "C Programming") {

    if (d === "Easy") {

        questions = cEasyQuestions;

    }
    else if (d === "Medium") {

        questions = cMediumQuestions;

    }
    else if (d === "Hard") {

        questions = cHardQuestions;

    }

}
    else if (s === "HR") {

    if (d === "Easy") {

        questions = hrEasyQuestions;

    }
    else if (d === "Medium") {

        questions = hrMediumQuestions;

    }
    else if (d === "Hard") {

        questions = hrHardQuestions;

    }

}

    // Save questions
    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );

    // Go to interview page
    window.location.href = "interview.html";
}


// ===============================
// LOAD QUESTIONS
// ===============================

let savedQuestions =
    localStorage.getItem("questions");

if (savedQuestions) {

    questions = JSON.parse(savedQuestions);

}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    let questionElement =
        document.getElementById("question");

    let questionNumberElement =
        document.getElementById("questionNumber");

    let timerElement =
        document.getElementById("timer");


    if (
        questionElement &&
        questionNumberElement &&
        timerElement &&
        questions.length > 0
    ) {

        questionNumberElement.innerHTML =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;


        questionElement.innerHTML =
            questions[currentQuestion].question;
            // Update progress bar
let progressBar =
    document.getElementById("progress-bar");

let progressText =
    document.getElementById("progress-text");

let progress =
    ((currentQuestion + 1) / questions.length) * 100;
    

if (progressBar) {
    progressBar.style.transform =
    "scaleX(" + (progress / 100) + ")";
}

if (progressText) {
    progressText.innerHTML =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;
}
            let explanationElement =
    document.getElementById("explanation");

if (explanationElement) {
    explanationElement.innerHTML = "";
}


        // Reset timer
        timeLeft = 30;

        clearInterval(timer);


        timerElement.innerHTML =
            "⏱️ Time Left: " +
            timeLeft +
            " seconds";


        timer = setInterval(function () {

            timeLeft--;


            timerElement.innerHTML =
                "⏱️ Time Left: " +
                timeLeft +
                " seconds";


            if (timeLeft <= 0) {

                clearInterval(timer);

                alert("⏰ Time's Up!");

                answered = true;

                nextQuestion();

            }

        }, 1000);

    }
}


// ===============================
// CHECK ANSWER
// ===============================

// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer() {

    let answerElement = document.getElementById("answer");

    let userAnswer = answerElement.value.trim();

    let subject = localStorage.getItem("subject");

    if (answered) {
        alert("Already submitted. Click Next.");
        return;
    }

    if (userAnswer === "") {
        alert("Please enter your answer.");
        return;
    }

    let isCorrect = false;

    if (subject === "HR") {

        if (userAnswer.length >= 10) {
            isCorrect = true;
        }

    } else {

        const normalizeAnswer = (text) => {
            return text
                .toLowerCase()
                .replace(/[.,!?;:'"()]/g, "")
                .replace(/\s+/g, " ")
                .trim();
        };

        let correctAnswer =
            normalizeAnswer(questions[currentQuestion].answer);

        let cleanedUserAnswer =
            normalizeAnswer(userAnswer);

        if (
    cleanedUserAnswer === correctAnswer ||
    cleanedUserAnswer.includes(correctAnswer) ||
    correctAnswer.includes(cleanedUserAnswer)
) {
    isCorrect = true;
}
    }

    reviewAnswers[currentQuestion] = {
        question: questions[currentQuestion].question,
        yourAnswer: userAnswer,
        correctAnswer: questions[currentQuestion].answer,
        isCorrect: isCorrect
    };

    answered = true;

    let explanationElement =
        document.getElementById("explanation");

    if (explanationElement) {
        explanationElement.innerHTML =
            "<b>Explanation:</b> " +
            (questions[currentQuestion].explanation ||
            "Explanation will be added soon.");
    }

    if (isCorrect) {

        score = score + 1;

        alert(
            "✅ Correct!\n\n" +
            "Current Score: " +
            score +
            "/" +
            questions.length
        );

    } else {

        alert(
            "❌ Wrong!\n\n" +
            "Correct Answer: " +
            questions[currentQuestion].answer +
            "\n\nCurrent Score: " +
            score +
            "/" +
            questions.length
        );
    }
}
// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    if (!answered) {

        alert(
            "Please submit your answer first."
        );

        return;
    }


    currentQuestion++;

    answered = false;


    let answerElement =
        document.getElementById("answer");

    if (answerElement) {

        answerElement.value = "";

    }


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        clearInterval(timer);


        alert(
            "🎉 Interview Finished"
        );


        // Get saved user details
        let userName =
            localStorage.getItem("userName");

        let subject =
            localStorage.getItem("subject");


        // Create final score
        let finalScore =
            score + "/" + questions.length;
            localStorage.setItem(
    "reviewAnswers",
    JSON.stringify(reviewAnswers)
);


        // Save final result
        localStorage.setItem(
            "userName",
            userName
        );

        localStorage.setItem(
            "subject",
            subject
        );

        localStorage.setItem(
            "score",
            finalScore
        );


        // Go to result page
        window.location.href =
            "result.html";

    }

}


// ===============================
// RESTART INTERVIEW
// ===============================

function restartInterview() {

    localStorage.removeItem("userName");
localStorage.removeItem("subject");
localStorage.removeItem("difficulty");
localStorage.removeItem("questions");
localStorage.removeItem("currentQuestion");
localStorage.removeItem("score");
localStorage.removeItem("reviewAnswers");
localStorage.removeItem("historySavedFor");

    window.location.href =
        "index.html";

}