import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import PreLoader from "./components/PreLoader/PreLoader"
import { Toaster } from "react-hot-toast";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
	return (
		<>

<PreLoader />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       
      <div id={theme}>
			<Toaster position='top-center' reverseOrder={false} />
			<Header />

			<main>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Work />
				<Contact />
			</main>

			<Footer />
			<ScrollUp />
			</div>
		</ThemeContext.Provider>
		</>
	);
}

export default App;
