import Encipher from "./encipher";
import Decipher from "./decipher";

const textarea = document.querySelector(".text-input textarea");
const cipherBtn = document.querySelector("[data-action='cipher']");
const decipherBtn = document.querySelector("[data-action='decipher']");
const textOutput = document.querySelector("[data-action='text-output']");


cipherBtn.addEventListener("click", (event) => {
  const userMessage = textarea.value;
  textOutput.innerHTML = userMessage
  
  console.log(userMessage);
  console.log(Encipher());
});

decipherBtn.addEventListener("click", (event) => {
  console.log(Decipher());
});