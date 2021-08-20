import './App.css';
import SocialMediaAside from "./components/socialMediaAside/socialMediaAside";
import EmailAside from "./components/emailAside/emailAside";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
	return (
		<div className="App">
			<div id={'App-content'}>
				<SocialMediaAside/>
				<EmailAside/>
				<Home/>
				<About/>
				<Projects/>
				<Contact/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
