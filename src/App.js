import {useState, createContext, useEffect} from "react";
import RSSParser from "rss-parser";
import SocialMediaAside from "./components/socialMediaAside/socialMediaAside";
import EmailAside from "./components/emailAside/emailAside";
import Home from "./sections/home/home";
import About from "./sections/about/about";
import Projects from "./sections/projects/projects";
import Blog from "./sections/blog/blog";
import FormspreeContact from "./sections/contact/formspreeContact";
import Footer from "./components/footer/footer";
import './App.css';

function App() {
	const [hamburgerToggle, setHamburgerToggle] = useState("open");
	const [hamburgerToggleIcon, setHamburgerToggleIcon] = useState("hamburger-toggle");
	const [blogArray, setBlogArray] = useState([]);

	// Get RSS feed from Medium for Blog page
	useEffect(() => {
		const parser = new RSSParser();
		const fetchPosts = async () => {
			const proxyUrl = 'https://cantello-cors-anywhere.herokuapp.com/';
			const url = `${proxyUrl}https://medium.com/feed/@brandoncantello/`;
			const feed = await parser.parseURL(url);
			setBlogArray(feed);
		}
		fetchPosts();
	}, []);

	return (
		<div className="App">
			<div id={'App-content'}>
				<UniversalContext.Provider value={
					{
						hamburgerToggle,
						setHamburgerToggle,
						hamburgerToggleIcon,
						setHamburgerToggleIcon,
						blogArray
					}
				}>
					<SocialMediaAside/>
					<EmailAside/>
					<Home/>
					<About/>
					<Projects/>
					<Blog/>
					<FormspreeContact/>
					<Footer/>
				</UniversalContext.Provider>
			</div>
		</div>
	);
}

export default App;
export const UniversalContext = createContext();
