/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const backgroundMusic =
    document.getElementById("bgMusic");

function startBackgroundMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.volume = 0.35;

    backgroundMusic.play().catch(() => {
        console.log("Music waiting for user interaction...");
    });
}

document.addEventListener(
    "click",
    () => {
        startBackgroundMusic();
    },
    { once: true }
);

/* =====================================================
   RAKSHA BANDHAN WEBSITE
   STEP 1 → STEP 5
===================================================== */


/* =====================================================
   SCREEN ELEMENTS
===================================================== */

const loadingScreen = document.getElementById("loadingScreen");
const loaderProgress = document.getElementById("loaderProgress");
const loadingPercent = document.getElementById("loadingPercent");

const welcomeScreen = document.getElementById("welcomeScreen");
const rakhiScreen = document.getElementById("rakhiScreen");
const memoriesScreen = document.getElementById("memoriesScreen");
const missScreen = document.getElementById("missScreen");


/* =====================================================
   STEP 1 - LOADING SCREEN
===================================================== */

let progress = 0;

const loadingInterval = setInterval(() => {

    progress++;

    if (loaderProgress) {
        loaderProgress.style.width = progress + "%";
    }

    if (loadingPercent) {
        loadingPercent.textContent = progress + "%";
    }

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            if (loadingScreen) {
                loadingScreen.classList.add("hide");
            }

            if (welcomeScreen) {
                welcomeScreen.classList.add("show");
            }

        }, 700);
    }

}, 35);


/* =====================================================
   STEP 2 - WELCOME SCREEN
===================================================== */

const openGiftBtn =
    document.getElementById("openGiftBtn");

if (openGiftBtn) {

    openGiftBtn.addEventListener("click", () => {

        createHeartExplosion();

        setTimeout(() => {

            if (welcomeScreen) {
                welcomeScreen.classList.remove("show");
            }

            setTimeout(() => {

                if (rakhiScreen) {
                    rakhiScreen.classList.add("show");
                }

            }, 500);

        }, 900);

    });

}


/* =====================================================
   HEART EXPLOSION
===================================================== */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "♡",
        "💖"
    ];

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("span");

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.zIndex = "99999";
        heart.style.pointerEvents = "none";
        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 180;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 0
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.2)`,
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x * 1.4}px),
                            calc(-50% + ${y * 1.4}px)
                        ) scale(0.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1300);
    }
}


/* =====================================================
   STEP 3 - VIRTUAL RAKHI
===================================================== */

const tieRakhiBtn =
    document.getElementById("tieRakhiBtn");

const rakhiSuccess =
    document.getElementById("rakhiSuccess");

const rakhi =
    document.getElementById("rakhi");

const continueMemoryBtn =
    document.getElementById("continueMemoryBtn");


if (tieRakhiBtn) {

    tieRakhiBtn.addEventListener("click", () => {

        if (rakhi) {

            rakhi.style.transform =
                "scale(1.15) rotate(5deg)";

            setTimeout(() => {

                rakhi.style.transform =
                    "scale(1) rotate(0deg)";

            }, 500);
        }

        tieRakhiBtn.style.display = "none";

        setTimeout(() => {

            if (rakhiSuccess) {
                rakhiSuccess.classList.add("show");
            }

        }, 500);

        createRakhiCelebration();

    });

}


/* =====================================================
   RAKHI CELEBRATION
===================================================== */

function createRakhiCelebration() {

    const particles = [
        "❤️",
        "💗",
        "💖",
        "✨",
        "🌸",
        "♡",
        "✦"
    ];

    for (let i = 0; i < 40; i++) {

        const particle =
            document.createElement("span");

        particle.innerHTML =
            particles[
                Math.floor(
                    Math.random() *
                    particles.length
                )
            ];

        particle.style.position = "fixed";
        particle.style.left = "50%";
        particle.style.top = "50%";
        particle.style.zIndex = "99999";
        particle.style.pointerEvents = "none";
        particle.style.fontSize =
            (14 + Math.random() * 20) + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 300;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 0
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x * 1.2}px),
                            calc(-50% + ${y * 1.2}px)
                        ) scale(0.3)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1200 +
                    Math.random() * 800,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2200);
    }
}


/* =====================================================
   STEP 3 → STEP 4
===================================================== */

if (continueMemoryBtn) {

    continueMemoryBtn.addEventListener("click", () => {

        if (rakhiScreen) {
            rakhiScreen.classList.remove("show");
        }

        setTimeout(() => {

            if (memoriesScreen) {
                memoriesScreen.classList.add("show");
            }

        }, 600);

    });

}


/* =====================================================
   STEP 4 - PHOTO VIEWER
===================================================== */

const memoryCards =
    document.querySelectorAll(".memory-card");

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");

const viewerCaption =
    document.getElementById("viewerCaption");

const closeViewer =
    document.getElementById("closeViewer");

const previousPhoto =
    document.getElementById("previousPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");


let currentPhoto = 0;

const memories = [];


memoryCards.forEach((card, index) => {

    memories.push({
        image: card.dataset.image,
        caption: card.dataset.caption
    });

    card.addEventListener("click", () => {

        currentPhoto = index;

        openPhoto(index);

    });

});


function openPhoto(index) {

    if (!photoViewer) return;

    if (!viewerImage) return;

    if (!viewerCaption) return;

    if (!memories[index]) return;

    currentPhoto = index;

    viewerImage.src =
        memories[index].image;

    viewerCaption.textContent =
        memories[index].caption;

    photoViewer.classList.add("show");
}


/* Close viewer */

if (closeViewer) {

    closeViewer.addEventListener("click", () => {

        if (photoViewer) {
            photoViewer.classList.remove("show");
        }

    });

}


/* Previous */

if (previousPhoto) {

    previousPhoto.addEventListener("click", (event) => {

        event.stopPropagation();

        if (memories.length === 0) return;

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto =
                memories.length - 1;
        }

        openPhoto(currentPhoto);

    });

}


/* Next */

if (nextPhoto) {

    nextPhoto.addEventListener("click", (event) => {

        event.stopPropagation();

        if (memories.length === 0) return;

        currentPhoto++;

        if (currentPhoto >= memories.length) {
            currentPhoto = 0;
        }

        openPhoto(currentPhoto);

    });

}


/* Close by clicking background */

if (photoViewer) {

    photoViewer.addEventListener("click", (event) => {

        if (event.target === photoViewer) {

            photoViewer.classList.remove("show");

        }

    });

}


/* Keyboard */

document.addEventListener("keydown", (event) => {

    if (
        !photoViewer ||
        !photoViewer.classList.contains("show")
    ) {
        return;
    }

    if (event.key === "Escape") {

        photoViewer.classList.remove("show");

    }

    if (event.key === "ArrowRight") {

        if (memories.length === 0) return;

        currentPhoto++;

        if (currentPhoto >= memories.length) {
            currentPhoto = 0;
        }

        openPhoto(currentPhoto);

    }

    if (event.key === "ArrowLeft") {

        if (memories.length === 0) return;

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto =
                memories.length - 1;
        }

        openPhoto(currentPhoto);

    }

});


/* =====================================================
   STEP 4 → STEP 5
===================================================== */

const memoryContinueBtn =
    document.getElementById("memoryContinueBtn");

if (memoryContinueBtn) {

    memoryContinueBtn.addEventListener("click", () => {

        if (memoriesScreen) {
            memoriesScreen.classList.remove("show");
        }

        setTimeout(() => {

            if (missScreen) {
                missScreen.classList.add("show");
            }

        }, 600);

    });

}


/* =====================================================
   STEP 5 → STEP 6
===================================================== */

const missContinueBtn =
    document.getElementById("missContinueBtn");


if (missContinueBtn) {

    missContinueBtn.addEventListener("click", () => {

        console.log(
            "Ready for the heartfelt letter ❤️"
        );

    });

}

/* =====================================================
   STEP 5 → STEP 6
   HEARTFELT LETTER
===================================================== */

const letterScreen =
    document.getElementById("letterScreen");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const letterEnvelope =
    document.getElementById("letterEnvelope");

const letterContinueBtn =
    document.getElementById("letterContinueBtn");


/* =====================================================
   MISS SCREEN → LETTER SCREEN
===================================================== */

if (missContinueBtn) {

    missContinueBtn.addEventListener("click", () => {

        if (missScreen) {
            missScreen.classList.remove("show");
        }

        setTimeout(() => {

            if (letterScreen) {
                letterScreen.classList.add("show");
            }

        }, 600);

    });

}


/* =====================================================
   OPEN LETTER
===================================================== */

/* =====================================================
   OPEN LETTER → FULL LETTER
===================================================== */

if (openLetterBtn && letterEnvelope) {

    openLetterBtn.addEventListener("click", () => {

        /* Open envelope */
        letterEnvelope.classList.add("open");

        /* Hide Open Letter button */
        openLetterBtn.style.opacity = "0";
        openLetterBtn.style.pointerEvents = "none";

        /* Show Continue button after letter appears */
        setTimeout(() => {

            openLetterBtn.style.display = "none";

            if (letterContinueBtn) {
                letterContinueBtn.classList.add("show");
            }

        }, 800);

    });

}


/* =====================================================
   LETTER CONTINUE
===================================================== */
/* =====================================================
   LETTER → SURPRISE SCREEN
===================================================== */

const surpriseScreen =
    document.getElementById("surpriseScreen");

if (letterContinueBtn) {

    letterContinueBtn.addEventListener("click", () => {

        // Hide letter
        if (letterScreen) {
            letterScreen.classList.remove("show");
        }

        // Show surprise
        setTimeout(() => {

            if (surpriseScreen) {
                surpriseScreen.classList.add("show");

                surpriseScreen.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }, 600);

    });

}



/* =====================================================
   STEP 7 - SURPRISE REVEAL
===================================================== */

const giftBox =
    document.getElementById("giftBox");

const openSurprise =
    document.getElementById("openSurprise");

const surpriseReveal =
    document.getElementById("surpriseReveal");

const startGameBtn =
    document.getElementById("startGameBtn");


/* =====================================================
   OPEN SURPRISE
===================================================== */

if (openSurprise) {

    openSurprise.addEventListener("click", () => {

        /* Shake the gift */

        if (giftBox) {
            giftBox.classList.add("gift-opening");
        }

        /* Change button */

        openSurprise.textContent =
            "Opening... ✨";

        openSurprise.disabled = true;


        /* Reveal surprise */

        setTimeout(() => {

            if (giftBox) {
                giftBox.style.display =
                    "none";
            }

            if (openSurprise) {
                openSurprise.style.display =
                    "none";
            }

            if (surpriseReveal) {

                surpriseReveal.classList.add(
                    "show"
                );

            }

            createSurpriseCelebration();

        }, 1000);

    });

}


/* =====================================================
   SURPRISE CELEBRATION
===================================================== */

function createSurpriseCelebration() {

    const items = [
        "❤️",
        "💖",
        "💕",
        "✨",
        "💗",
        "🌸",
        "♡",
        "✦"
    ];


    for (let i = 0; i < 45; i++) {

        const item =
            document.createElement("span");

        item.textContent =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.zIndex =
            "99999";

        item.style.pointerEvents =
            "none";

        item.style.fontSize =
            (14 + Math.random() * 22) +
            "px";


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() *
            350;


        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        item.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 0
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.2)`,
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x * 1.3}px),
                            calc(-50% + ${y * 1.3}px)
                        ) scale(0.3)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    1400 +
                    Math.random() * 800,

                easing:
                    "ease-out"
            }

        );


        document.body.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 2500);

    }

}

/* =====================================================
   SURPRISE → GAME
===================================================== */



const gameScreen =
    document.getElementById("gameScreen");

if (startGameBtn) {

    startGameBtn.addEventListener("click", () => {

        /* Hide surprise */

        if (surpriseScreen) {
            surpriseScreen.classList.remove("show");
        }

        /* Show game */

        setTimeout(() => {

            if (gameScreen) {

                gameScreen.classList.add("show");

                startQuiz();

            }

        }, 600);

    });

}

/* =====================================================
   STEP 8 - QUESTION GAME
===================================================== */

const questions = [

    {
        emoji: "🎮",
        question: "Mane sauthi vadhare su karvu game chhe?",
        answers: [
            "🎮 Gaming",
            "💻 Coding",
            "🎬 Watching movies",
            "😴 Sleeping"
        ],
        correct: 0
    },

    {
        emoji: "😂",
        question: "Aapde badhie tyare jite chhe kon?",
        answers: [
            "😎 Me",
            "😌 You",
            "😂 Nobody",
            "🤝 We forget about it"
        ],
        correct: 1
    },

    {
        emoji: "❤️",
        question: "Me tane vadhare kaya name bolavu chhu?",
        answers: [
            "😉 Radhu",
            "😁 Didi",
            "❤️ Radhho",
            "🤗 Oye"
        ],
        correct: 2
    },

    {
        emoji: "💻",
        question: "Tu mane vadhare kaya name bolave chhe?",
        answers: [
            "😉 Bhavya",
            "🤗 Bhailu",
            "😘 Pilu",
            "🙄 Bhai"   
        ],
        correct: 2
    },

    {
        emoji: "🫂",
        question: "Aapda vachhe hamesha su rehe?",
        answers: [
            "📱 Messages",
            "🎮 Games",
            "❤️ Our bond",
            "😂 Arguments"
        ],
        correct: 2
    }

];


/* =====================================================
   QUIZ ELEMENTS
===================================================== */

const questionNumber =
    document.getElementById("questionNumber");

const scoreText =
    document.getElementById("scoreText");

const quizProgress =
    document.getElementById("quizProgress");

const questionEmoji =
    document.getElementById("questionEmoji");

const questionText =
    document.getElementById("questionText");

const answerContainer =
    document.getElementById("answerContainer");

const questionCard =
    document.getElementById("questionCard");

const quizResult =
    document.getElementById("quizResult");

const resultScore =
    document.getElementById("resultScore");

const resultMessage =
    document.getElementById("resultMessage");

const finalRevealBtn =
    document.getElementById("finalRevealBtn");

const finalMessage =
    document.getElementById("finalMessage");


let currentQuestion = 0;
let score = 0;


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    if (questionCard) {
        questionCard.style.display = "block";
    }

    if (quizResult) {
        quizResult.style.display = "none";
    }

    if (finalMessage) {
        finalMessage.style.display = "none";
    }

    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const question =
        questions[currentQuestion];

    if (!question) return;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreText.textContent =
        `Score: ${score}`;


    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;

    quizProgress.style.width =
        progress + "%";


    questionEmoji.textContent =
        question.emoji;


    questionText.textContent =
        question.question;


    answerContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            answerContainer.appendChild(button);

        }
    );

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    const question =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    /* Prevent multiple clicks */

    buttons.forEach(button => {
        button.disabled = true;
    });


    /* Correct */

    if (
        selectedIndex ===
        question.correct
    ) {

        score++;

        selectedButton.classList.add(
            "correct"
        );

    }

    /* Wrong */

    else {

        selectedButton.classList.add(
            "wrong"
        );

        buttons[
            question.correct
        ].classList.add(
            "correct"
        );

    }


    /* Next question */

    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        } else {

            showQuizResult();

        }

    }, 1000);

}


/* =====================================================
   SHOW RESULT
===================================================== */

function showQuizResult() {

    questionCard.style.display =
        "none";


    quizResult.style.display =
        "block";


    resultScore.textContent =
        `You got ${score}/${questions.length}!`;


    if (score === 5) {

        resultMessage.textContent =
            "Perfect! You really know your brother! 😎❤️";

    }

    else if (score >= 3) {

        resultMessage.textContent =
            "Pretty good! You know me quite well! 😂❤️";

    }

    else {

        resultMessage.textContent =
            "Looks like we need some more sibling time! 😂❤️";

    }


    createSurpriseCelebration();

}


/* =====================================================
   FINAL MESSAGE
===================================================== */

if (finalRevealBtn) {

    finalRevealBtn.addEventListener(
        "click",
        () => {

            quizResult.style.display =
                "none";

            finalMessage.style.display =
                "block";

            createSurpriseCelebration();

        }
    );

}