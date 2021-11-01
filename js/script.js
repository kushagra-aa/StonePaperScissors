// VARIABLES
let score = 0
let highscore = localStorage.getItem("highscore");
picks = {
    'stone': 'stone.png',
    'paper': 'paper.png',
    'scissors': 'scissors.png',
}
pickUrl = "../assets/icons/"

// FUNTIONS
// set scores on load
window.onload = () => {
    setScore()
}
// function to pick user hand
const pickhandUser = (hand) => {
    // pick house hand
    househand = pickhandHouse();
    // hide hands
    hands = document.querySelector('.hands')
    hands.style.display = "none"
    // show result
    results = document.querySelector('.results')
    results.style.display = "flex"
    // set user picked img
    userpicked = pickUrl + picks[hand]
    document.getElementById('user-picked').src = userpicked
    document.getElementById('user-picked').alt = hand
    // set user picked img
    housepicked = pickUrl + picks[househand]
    document.getElementById('house-picked').src = housepicked
    document.getElementById('house-picked').alt = househand
    // generate result
    result = generateResult(hand, househand);
    giveResult(result);
    setScore();
}

const pickhandHouse = () => {
    let hands = ["stone", "paper", "scissors"]
    let househand = hands[Math.floor(Math.random() * 3)]
    return househand
}

const generateResult = (userHand, houseHand) => {
    loose = "you lost!"
    win = "you won!"
    tie = "it's a tie!"
    if (userHand == "paper" && houseHand == "scissors") {
        return loose
    }
    else if (userHand == "paper" && houseHand == "stone") {
        return win
    }
    else if (userHand == "paper" && houseHand == "paper") {
        return tie
    }
    else if (userHand == "stone" && houseHand == "scissors") {
        return win
    }
    else if (userHand == "stone" && houseHand == "paper") {
        return loose
    }
    else if (userHand == "stone" && houseHand == "stone") {
        return tie
    }
    else if (userHand == "scissors" && houseHand == "scissors") {
        return tie
    }
    else if (userHand == "scissors" && houseHand == "stone") {
        return loose
    }
    else if (userHand == "scissors" && houseHand == "paper") {
        return win
    }
}

const giveResult = (result) => {
    document.querySelector(".result h2").innerText = result
    if (result === "you won!") {
        score = score + 1
        checkHighScore();
    }
}

// set score inhtml
const setScore = () => {
    document.querySelector(".high-score span").innerText = highscore
    document.querySelector(".score span").innerText = score
}

// paly again function
const again = () => {
    // show hands
    hands = document.querySelector('.hands')
    hands.style.display = "flex"
    // hide result
    results = document.querySelector('.results')
    results.style.display = "none"
}

// check highscore
const checkHighScore = () => {
    if (score > highscore) {
        highscore = score
        localStorage.setItem("highscore", highscore)
    }
}
