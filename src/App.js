import {useState, createContext} from "react";
import './App.css';
import SocialMediaAside from "./components/socialMediaAside/socialMediaAside";
import EmailAside from "./components/emailAside/emailAside";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
	const [hamburgerToggle, setHamburgerToggle] = useState("open");
	const [hamburgerToggleIcon, setHamburgerToggleIcon] = useState("hamburger-toggle");

	return (
		<div className="App">
			<div id={'App-content'}>
				<UniversalContext.Provider value={
					{
						hamburgerToggle,
						setHamburgerToggle,
						hamburgerToggleIcon,
						setHamburgerToggleIcon
					}
				}>
					<SocialMediaAside/>
					<EmailAside/>
					<Home/>
					<About/>
					<Projects/>
					<Contact/>
					<Footer/>
				</UniversalContext.Provider>
			</div>
		</div>
	);
}

export default App;
export const UniversalContext = createContext();
