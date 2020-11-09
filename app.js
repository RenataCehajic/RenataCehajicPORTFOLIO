const express 	= require("express");
const app 		= express(); 

const project = require('./modules/projects.js').projects;
// const projectNetlify = require('./modules/projectsNetlify.js').projectsNetlify;

// Use public directory as root
app.use(express.static(__dirname + '/public'));
//no need for EJS on res.render
app.set('view engine', 'ejs');


// =======
// ROUTES
// =======

//Home route
app.get("/", (req, res) => {
	res.render("index", {project: project});
})

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
	console.log('Server Listening RENATA');
}
app.listen(port);

// const port = process.env.PORT || 3000; 
// app.listen(port, function () {
// console.log("Renata's Website Has Started!");
// });
