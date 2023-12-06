/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ToastType, words } from "../constants";
import { interfaceWord } from "../interfaces";
import { toast } from "react-toastify";

export const generateWord = () => {
	const wordsInLocal: interfaceWord[] = JSON.parse(
		localStorage.getItem("wordle_words")!
	);

	let wordsPlay = null;

	if (wordsInLocal) {
		wordsPlay = wordsInLocal.filter((word) => !word.state);
	} else {
		wordsPlay = words.filter((word) => !word.state);
	}

	const indexRamdon = Math.trunc(Math.random() * wordsPlay.length);
	const word = wordsPlay[indexRamdon];
	updateLocalStorage("wordle_word", word);
	updateLocalStorage("wordle_words", wordsInLocal);
	return word;
};

export function updateLocalStorage(key: string, value: any) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function itemToast(type: ToastType, text: string) {
	return toast[type](text, {
		position: "bottom-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
}
