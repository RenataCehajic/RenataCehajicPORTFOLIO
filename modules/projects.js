// projects array

const projects = [{
	name: 'Simple Movie Search',
	website: 'https://peaceful-ocean-11576.herokuapp.com/',
	code: 'https://github.com/RenataCehajic/movie-search-app',
	hosted: 'Heroku',
	description: 'Utilizing a movie database API, I created a Simple Movie Search which will return any movie which includes your search term along with the movies release date. Built in GOORM IDE, hosted on Heroku.',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/RenataCehajic/movie-search-app', 
	challenges: [
		'Correctly integrating the API keys', 'Two', 'Three',
	]
},{
	name: 'RESTful Blog App',
	website: 'https://whispering-badlands-96251.herokuapp.com/blogs',
	code: 'https://github.com/RenataCehajic/RESTful-blog-app',
	hosted: 'Heroku', 
	description: 'A web application for blogging about anything you like! Built in GOORM IDE, the application was created using Javascript, Node.js MongoDB, Express.js and NPM. Industry standard RESTful routing and CRUD operations were implemented as well as Git for version control. The application was launched on and is still hosted on Heroku.',
	description2: '', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:nodejs-icon'></span> <span class='iconify m-3' data-icon='logos:mongodb'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:npm-2'></span> <span class='iconify m-3' data-icon='logos:git-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/RenataCehajic/RESTful-blog-app',
	brief: 'Create a web application which allows users to list blogs.',
},{
	name: 'Camping in Slovenia',
	website: 'https://dry-chamber-37413.herokuapp.com/campgrounds',
	code: 'https://github.com/RenataCehajic/YelpCamp',
	hosted: 'Heroku', 
	description: 'A web application for people who love camping! Please login as Renata with password: password, and see her list of campgrounds. Built in GOORM IDE, the application was created using Javascript, Node.js, MongoDB, Express.js and NPM. Stripe Payments are also built as a prebuilt checkout page to accept online payments, however this site is used only for my portfolio and not for actual payments, thus please login as Renata.',
	description2: '', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:nodejs-icon'></span> <span class='iconify m-3' data-icon='logos:mongodb'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:npm-2'></span> <span class='iconify m-3' data-icon='logos:git-icon'> </span><span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/RenataCehajic/YelpCamp',
	brief: 'Create a web application which allows users to sign up first, list the campgrounds, and pay.',
	idea: 'Give campgrounds a wider audience where users can comment about their experience.',
	challenges: [
		'Utilizing the database', 'Integrating Stripe Payments and Google maps', 'Creating sign up/login permissions', ''
	],
	doItDifferently: ''
}, {
	name: 'Javascript ToDo List',
	website: 'https://renata-todolist.netlify.app/',
	code: 'https://github.com/RenataCehajic/ToDoList',
	hosted: 'Netlify', 
	description: 'Todo List App with JavaScript is a great exercise great for learning useful concepts that are widely applicable in many programming contexts. CSS and JavaScript are used to create a "to-do list" to organize and prioritize your tasks. A user can add a task, mark a task as completed and delete an already added task.',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='ant-design:github-filled'></span>"
	,
	codeLink: 'https://github.com/RenataCehajic/ToDoList',
	brief: 'A great exercise for learning useful concepts that are widely applicable in many programming contexts.',
	challenges: [
		'Javascript', 'variables, arrays, functions and objects', ''
	],
	doItDifferently: ''
}, {
	name: 'Javascript Sound Circles',
	website: 'https://renata-soundcircles.netlify.app/',
	code: 'https://github.com/RenataCehajic/SoundCircles',
	hosted: 'Netlify', 
	description: 'This project is a clone of the original Patatap Website. The project uses circles of random sizes and an assigned sound to indicate the press of each alphabet key. These circles continuously decrease in size with a changing color hue until they eventually disappear. The position of these circles is randomly generated every time a key is pressed.',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='ant-design:github-filled'></span>"
	,
	codeLink: 'https://github.com/RenataCehajic/SoundCircles',
	brief: 'Paper.js is used to create the circles whereas Howler.js is used to play the assigned sound for each key.',
	challenges: [
		'Javascript', 'variables, arrays, functions and objects', ''
	],
	doItDifferently: ''
}]
				 

module.exports.projects = projects;