import Encipher from "./encipher";
import Decipher from "./decipher";

const textarea = document.querySelector(".text-input textarea");
const instruction = document.querySelector("[data-action='instruction']");
const toggle_img = document.querySelector(".toggle-img");
const cipher_btn = document.querySelector("[data-action='cipher']");
const decipher_btn = document.querySelector("[data-action='decipher']");
const text_output_container = document.querySelector(".text-output");
const text_output = document.querySelector("[data-action='text-output']");
const copy_btn = document.querySelector("[data-action='copy']");

resetMessage();
if (textarea.value) {
	displayMessageEncrypted(true);
}

textarea.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		displayMessageEncrypted(true);
		event.currentTarget.blur();
	}
});

cipher_btn.addEventListener("click", () => displayMessageEncrypted(true));

decipher_btn.addEventListener("click", () => displayMessageEncrypted(false));

copy_btn.addEventListener("click", () =>
	navigator.clipboard.writeText(text_output.innerText)
);

function displayMessageEncrypted(isToEncrypt) {
	const user_message = textarea.value;
	if (!user_message) {
		resetMessage();
		return;
	}

	const message = isToEncrypt
		? Encipher(user_message)
		: Decipher(user_message);

	text_output.innerText = message;
	toggle_img.classList.add("display-none");
	text_output_container.classList.remove("padding-block-25percent");
	text_output_container.classList.remove("solid-black-border");
	text_output.classList.remove("text-gray-500");
	text_output.classList.remove("fw-bold");
	text_output.classList.add("text-gray-400");
	copy_btn.classList.remove("display-none");
	instruction.classList.add("display-none");
}

function resetMessage() {
	text_output.innerText = "Nenhuma mensagem encontrada";
	toggle_img.classList.remove("display-none");
	text_output.classList.add("text-gray-500");
	text_output.classList.add("fw-bold");
	text_output.classList.remove("text-gray-400");
	copy_btn.classList.add("display-none");
	instruction.classList.remove("display-none");

	if (window.matchMedia("screen and (min-width: 89.9em)").matches) {
		text_output_container.classList.add("padding-block-25percent");
	}

	if (window.matchMedia("screen and (max-width: 23.5em)").matches) {
		text_output_container.classList.add("solid-black-border");
	}
}
