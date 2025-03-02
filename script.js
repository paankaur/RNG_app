function limitInput(input) {
  let value = input.value;
  if (value.length > 3) {
    input.value = value.slice(0, 3);
  }
}

const add1 = document.getElementById("nr1");
const add2 = document.getElementById("nr2");
const add3 = document.getElementById("nr3");
const add4 = document.getElementById("nr4");
const add5 = document.getElementById("nr5");
const add6 = document.getElementById("nr6");
const add7 = document.getElementById("nr7");
const add8 = document.getElementById("nr8");
const add9 = document.getElementById("nr9");
const add0 = document.getElementById("nr0");

let text = document.getElementById("numInput");

add1.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 1;
  }
});

add2.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 2;
  }
});

add3.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 3;
  }
});

add4.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 4;
  }
});

add5.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 5;
  }
});

add6.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 6;
  }
});

add7.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 7;
  }
});

add8.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 8;
  }
});

add9.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 9;
  }
});

add0.addEventListener("click", () => {
  if (text.value.length < 3) {
    text.value += 0;
  }
});



const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clearText);
text.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    clearText();
  }
});

function clearText() {
  text.value = "";
}


const go = document.getElementById("go");
const end = document.getElementById("end");

const history = document.getElementById("target-for-history");

// ---------------------------- rgn function ---------------------------------------

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

let attempts = 0;

function guessTheNumber(guess) {
  if (guess == randomNumber) {
    history.innerHTML =
      "<br/>GZ! You guessed right in " + attempts + " attempts";
    go.classList.add("hide");
    end.classList.add("end");
  } else if (attempts == 7 && guess !== randomNumber) {
    history.innerHTML =
      "<br/>" +
      attempts +
      " attempts should be enough to guess a random number in this range.";
    go.classList.add("hide");
    end.classList.add("end");
  } else if (guess !== randomNumber && guess < randomNumber) {
    history.innerHTML += "<br/>" + guess + " is too low.";
  }else {
    history.innerHTML +=
      "<br/>" + guess + " is too high.";
  };
}



go.addEventListener("click", handleGuess);
text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});

function handleGuess() {
  if (!text.value) {
    return;
  }
  attempts++;
  let guess = parseInt(text.value);
  guessTheNumber(guess);

  text.value = "";
  console.log(attempts);
}