import cipher_keys from "./cipher_keys";

const re_special_char = /([^\w ]|[_])/g;
const re_accents = /[\p{Diacritic}]/gu;

const Encipher = (message) => {
	let processed_msg = message.normalize("NFD");
	processed_msg = processed_msg.replace(re_accents, "");
	processed_msg = processed_msg.replace(re_special_char, "");
	processed_msg = processed_msg.toLowerCase();

	let output = [...processed_msg].map((char) => {
		if (Object.keys(cipher_keys).includes(char)) {
			return (char = cipher_keys[char]);
		}

		return char;
	});

	return output.join("");
};

export default Encipher;
