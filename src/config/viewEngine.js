import express from 'express';

/*
config view engine for node
*/

let configViewEngine = (app) => {
	app.use(express.static('../public'));
	app.set('view  engine', 'ejs');
	app.set('views', '../views');
};

module.exports = configViewEngine;
