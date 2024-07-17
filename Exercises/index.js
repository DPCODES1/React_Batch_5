//sum of numbers
const sumInput = document.querySelector("#user-number");
const sumBtn = document.getElementById("sum-button");
const outputSum = document.getElementById("calculated-sum");
function sumCalc() {
  let sum = 0;
  if (!sumInput.value || isNaN(sumInput.value)) {
    alert("Please Input a Valid number");
    return;
  }
  for (let i = 0; i <= +sumInput.value; i++) {
    sum = sum + i;
  }
  outputSum.style.display = "block";
  outputSum.textContent = sum;
}
sumBtn.addEventListener("click", sumCalc);

// highlight links
const a = document.querySelectorAll("#highlight-links a");
const highlightBtn = document.querySelector("#highlight-links button");

function highlight() {
  for (const anchor of a) {
    anchor.classList.toggle("highlight");
  }
}

highlightBtn.addEventListener("click", highlight);

//userData
const userDataClickBtn = document.querySelector("#user-data button");
const userDataOutputUl = document.querySelector("#output-user-data");
const userData = {
  name: "Deepak",
  age: 23,
  occupation: "Developer",
};

function displayUserInfo() {
  userDataOutputUl.innerHTML = "";
  for (const key in userData) {
    const li = document.createElement("li");
    const outputText = `${key.toUpperCase()}:${userData[key]}`;
    li.textContent = outputText;
    userDataOutputUl.append(li);
  }
}

userDataClickBtn.addEventListener("click", displayUserInfo);

//roll the dice
const rollDiceBtn = document.querySelector('#statistics button')
const rollDiceInput = document.querySelector('#user-target-number')
const rollDiceOutput = document.querySelector('#dice-rolls')
function CalcRoll() {
  return Math.floor(Math.random() * 6) + 1
}
function rollDice() {
  rollDiceOutput.innerHTML = ''
  let numberOfRolls = 0
  let rolled = false;
  while(!rolled) {
    let diceRoll = CalcRoll()
    numberOfRolls++
    const rollList = document.createElement('li')
    rollList.textContent = `Roll ${numberOfRolls}:${diceRoll}`
    rollDiceOutput.append(rollList)
    rolled = rollDiceInput.value == diceRoll
  }

  const outputRolls = document.getElementById('output-total-rolls')
  const targetNumber = document.getElementById('output-target-number')
  outputRolls.textContent = numberOfRolls
  targetNumber.textContent = rollDiceInput.value

  
}


rollDiceBtn.addEventListener('click',rollDice)
console.log(Math.floor(5.99))
console.log(Math.round(5.4))
console.log(Math.ceil(1.2))