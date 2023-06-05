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
	toggle_img.classList.add("display-none");
	showEncryptedMessage();
}

textarea.addEventListener("change", (event) => {
	if (event.currentTarget.value) {
		toggle_img.classList.add("display-none");
		showEncryptedMessage();
	} else {
		toggle_img.classList.remove("display-none");
		resetMessage();
	}
});

textarea.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		showEncryptedMessage();
		event.currentTarget.blur();
	}
});

cipher_btn.addEventListener("click", showEncryptedMessage);

decipher_btn.addEventListener("click", showUnencryptedMessage);

copy_btn.addEventListener("click", () =>
	navigator.clipboard.writeText(text_output.innerHTML)
);

function showEncryptedMessage() {
	const user_message = textarea.value;
	const encrypted_msg = Encipher(user_message);
	if (!encrypted_msg) return;
	displayMessage(encrypted_msg);
}

function showUnencryptedMessage() {
	const user_encrypted_msg = textarea.value;
	const original_msg = Decipher(user_encrypted_msg);
	if (!original_msg) return;
	displayMessage(original_msg);
}

function resetMessage() {
	text_output.innerHTML = "Nenhuma mensagem encontrada";
	text_output.classList.add("text-gray-500");
	text_output.classList.add("fw-bold");
	text_output.classList.remove("text-gray-400");
	copy_btn.classList.add("display-none");
	instruction.classList.remove("display-none");

	if (window.matchMedia("screen and (max-width: 89.9em)").matches) {
		text_output_container.classList.remove("padding-block-25percent");
	}

	if (window.matchMedia("screen and (max-width: 23.5em)").matches) {
		text_output_container.classList.add("solid-black-border");
	}
}

function displayMessage(message) {
	text_output.innerText = message;

	text_output_container.classList.remove("padding-block-25percent");
	text_output_container.classList.remove("solid-black-border");
	text_output.classList.remove("text-gray-500");
	text_output.classList.remove("fw-bold");
	text_output.classList.add("text-gray-400");
	copy_btn.classList.remove("display-none");
	instruction.classList.add("display-none");
}
