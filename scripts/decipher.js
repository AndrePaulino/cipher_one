import cipher_keys from "./cipher_keys";

const Decipher = (message) => {
	let processed_msg = message;
	Object.entries(cipher_keys).forEach((cipher_key) => {
		if (message.includes(cipher_key[1])) {
			processed_msg = processed_msg.replaceAll(
				cipher_key[1],
				cipher_key[0]
			);
		}
	});

	return processed_msg;
};

export default Decipher;
