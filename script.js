const myArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  ",",
  ".",
  "?",
  "/",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

const input = document.querySelector(".generateArea");
const rangeInput = document.querySelector(".rangeInput");
const rangeValueSpan = document.querySelector(".rangeValueSpan");

function rangeFunc() {
  rangeValueSpan.innerHTML = rangeInput.value;

  let randomString = "";
  for (i = 0; i < rangeInput.value; i++) {
    const randomCharacter = myArray[Math.floor(Math.random() * myArray.length)];
    randomString += randomCharacter;
  }
  input.value = randomString;
}

let themeSwitcher = false;
document.querySelector(".ThemeChanger").addEventListener("click", function () {
  if (themeSwitcher == false) {
    themeSwitcher = true;
    document.querySelector(".styleLink").href = "styleLight.css";
  } else {
    themeSwitcher = false;

    document.querySelector(".styleLink").href = "styles.css";
  }
});
