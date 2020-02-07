const dice = document.getElementById("dice")
const score = document.getElementById("score")
const rollNumber = document.getElementById("rollNumber")
const button = document.getElementById("button")
const winLose = document.getElementById("winLose")

let diceScore = 0
let rolls = 0

button.addEventListener("click", () =>{
    
    let numGen = Math.floor(Math.random()*6) + 1

    winLose.textContent = ""
    rollNumber.textContent = "No. Of Rolls:"
    
    if (numGen === 1){
        dice.src="img/dice1.png"
        winLose.textContent = "You Lost! Better Luck Next Time"
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
        diceScore = 0
        rolls = 0
    
    }
    else if (numGen === 2){
        dice.src="img/dice2.png"
        diceScore += 2
        rolls++
        score.textContent = `Score: ${diceScore}`
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
    }
    else if (numGen === 3){
        dice.src="img/dice3.png"
        diceScore += 3
        rolls++
        score.textContent = `Score: ${diceScore}`
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
    }
    else if (numGen === 4){
        dice.src="img/dice4.png"
        diceScore += 4
        rolls++
        score.textContent = `Score: ${diceScore}`
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
    }
    else if (numGen === 5){
        dice.src="img/dice5.png"
        diceScore += 5
        rolls++
        score.textContent = `Score: ${diceScore}`
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
    }
    else if (numGen === 6){
        dice.src="img/dice6.png"
        diceScore += 6
        rolls++
        score.textContent = `Score: ${diceScore}`
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
    }
    
    if (diceScore >= 20){
        winLose.textContent = "You Win!"
        rollNumber.textContent = `No. Of Rolls: ${rolls}`
        diceScore = 0
        rolls = 0
    }
    
})

const dice2 = document.getElementById("dice2")
const score2 = document.getElementById("score2")
const rollNumber2 = document.getElementById("rollNumber2")
const button2 = document.getElementById("button2")
const winLose2 = document.getElementById("winLose2")

let diceScore2 = 0
let rolls2 = 0

button2.addEventListener("click", () =>{

    let numGen2 = Math.floor(Math.random()*6) + 1

    winLose2.textContent = ""
    rollNumber2.textContent = "No. Of Rolls:"

    if (numGen2 === 1){
        dice2.src="img/dice1.png"
        winLose2.textContent = "You Lost! Better Luck Next Time"
        rollNumber2.textContent = `No. Of Rolls: ${rolls2}`
        diceScore2 = 0
        rolls2 = 0
    
    }
    else if (numGen2 === 2){
        dice2.src="img/dice2.png"
        diceScore2 += 2
        rolls2++
        score2.textContent = `Score: ${diceScore2}`
        rollNumber2.textContent = `No. Of Rolls: ${rolls2}`
    }
    else if (numGen2 === 3){
        dice2.src="img/dice3.png"
        diceScore2 += 3
        rolls2++
        score2.textContent = `Score: ${diceScore2}`
        rollNumber2.textContent = `No. Of Rolls: ${rolls2}`
    }
    else if (numGen2 === 4){
        dice2.src="img/dice4.png"
        diceScore2 += 4
        rolls2++
        score.textContent = `Score: ${diceScore2}`
        rollNumber.textContent = `No. Of Rolls: ${rolls2}`
    }
    else if (numGen2 === 5){
        dice2.src="img/dice5.png"
        diceScore2 += 5
        rolls2++
        score2.textContent = `Score: ${diceScore2}`
        rollNumber2.textContent = `No. Of Rolls: ${rolls2}`
    }
    else if (numGen2 === 6){
        dice2.src="img/dice6.png"
        diceScore2 += 6
        rolls2++
        score2.textContent = `Score: ${diceScore2}`
        rollNumber2.textContent = `No. Of Rolls: ${rolls2}`
    }
    
    if (diceScore2 >= 20){
        winLose2.textContent = "You Win!"
        rollNumber2.textContent = `No. Of Rolls: ${rolls2}`
        diceScore2 = 0
        rolls2 = 0
    }
    
})





