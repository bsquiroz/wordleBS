import { AttemptsRemaining } from "./components/AttemptsRemaining";
import { Board } from "./components/Board";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { VerifyWord } from "./components/VerifyWord";
import { Modalword } from "./components/modalWord";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Board />
				<VerifyWord />
				<AttemptsRemaining />
			</Container>
			<Modalword />
			<ToastContainer />
		</>
	);
};
