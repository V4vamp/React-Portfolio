import rpc from '../../assets/rock-paper-sci.png'
import Work2 from '../../assets/work2.png'
import agecal from '../../assets/agecalc.png'
import mall from '../../assets/mall.png'
import mindconnect from '../../assets/mindconnect.png'
import Work6 from '../../assets/work6.png'
import pennywise from '../../assets/pennywise.png'
import Work8 from '../../assets/work8.png'
import Work9 from '../../assets/work9.png'

export const projectsData = [
	{
		id: 1,
		image: rpc,
		title: "Rock-Paper-Scissors Game",
		category: "Front-End",
		description: (
			<p>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</p>
		),
		link: "https://serene-tarsier-0627e2.netlify.app/",
	},
	{
		id: 2,
		image: Work2,
		title: "Star-Wars Characters API",
		category: "Front-End",
		description: (
			<div>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</div>
		),
		link: "https://ornate-pegasus-ee997f.netlify.app/",
	},
	{
		id: 3,
		image: agecal,
		title: "Age Calculator",
		category: "Front-End",
		description: (
			<div>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</div>
		),
		link: "",
	},
	{
		id: 4,
		image: mall,
		title: "iMall - Ecommerce WebApp",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-ejs'></i>
				<i class='bx bxl-mongodb'></i>
				<i class='bx bxl-nodejs'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "",
	},
	{
		id: 5,
		image: mindconnect,
		title: "MindConnect",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-postgresql'></i>
				<i class='uil uil-react'></i>
				<i class='bx bxl-nodejs'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "",
	},
	{
		id: 6,
		image: Work6,
		title: "Portfolio V0.2",
		category: "Front-End",
		description: (
			<div>
				<i class='bx bxl-html5'></i>
				<i class='bx bxl-css3'></i>
				<i class='bx bxl-javascript'></i>
			</div>
		),
		link: "https://nixhazel.github.io/Personal-Profile/",
	},
	{
		id: 7,
		image: pennywise,
		title: "PennyWise",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-postgresql'></i>
				<i class='uil uil-react'></i>
				<i class='bx bxl-nodejs'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "https://olokor-library-app.onrender.com",
	},
	{
		id: 8,
		image: Work8,
		title: "Todo List App ExpressJS Ejs",
		category: "Full-stack",
		description: (
			<div>
				<i class='bx bxl-nodejs'></i>
			</div>
		),
		link: "https://todo-app-express-e34j.onrender.com",
	},
	{
		id: 9,
		image: Work9,
		title: "Instanta Status Page",
		category: "Front-End",
		description: (
			<div>
				<i class='uil uil-react'></i>
				<i class='bx bxl-typescript'></i>
			</div>
		),
		link: "https://instanta-app.onrender.com",
	},
];

export const projectsNav = [
	{
		name: "all",
	},
	{
		name: "Front-End",
	},
	{
		name: "Full-stack",
	}
];