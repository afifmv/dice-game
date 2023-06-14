function getRandomNumberForDice() {
  var randomNumber = Math.random();
  if (randomNumber > 0.6 || randomNumber == 0) {
    return getRandomNumberForDice();
  } else {
    return Math.ceil(randomNumber * 10);
  }
}

randomNumber1 = getRandomNumberForDice();
imageDestination1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imageDestination1);

randomNumber2 = getRandomNumberForDice();
imageDestination2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imageDestination2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player1 Wins!";
} else if (randomNumber1 == randomNumber1) {
  document.querySelector("h1").textContent = "Player2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw";
}
