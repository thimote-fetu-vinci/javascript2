import Header from "../Header/index.tsx";
import Main from "../Main/index.tsx";
import Footer from "../Footer/index.tsx";


const App = () => {
	const title = "Welcome to My App";
	const footerText = "© 2024 My App";

	return (
		<div>
			<Header title={title}></Header>
			<Main></Main>
			<Footer content={footerText}></Footer>
		</div>
	);
};

export default App;