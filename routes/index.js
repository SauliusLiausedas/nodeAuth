var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/healthcheck', function(req, res) {
	let responseString = {
		message: 'Alles Gutten'
	};
	res.send(responseString)
});

router.get('/ilike/:choice/:name', function(req, res) {
	let choice = req.params.choice;
	let name = req.params.name;
	let responseObject = {
		message: 'I like ' + choice + ' too, ' + name 
	};
	res.send(responseObject.message);
});

const data = [];

router.post('/iwant/:choice/:time', function(req, res){
	let choice = req.body.what;
	let time = req.body.when;
	data.push({
		choice: choice,
		time: time,
		message: 'Aš noriu ' + choice + ' ' + time
	})
	// res.send(data)
	// data.forEach((wish) => {
	// 	res.send(wish.message)
	// })
	// console.log(data)
	res.redirect('/')
});

router.get('/iwant', function(req, res){
	//if data empty then error, else data
	let select = req.query.select
	if(data.length > 0) {
		let responseObject = data
		if(select && select == "count") {
			responseObject = {count: data.length}
		}
		res.send(responseObject)
	} else {
		let responseObject = undefined
		if(select && select == "count") {
			responseObject = {count: 0}
		}

		res.status(404).send(responseObject)
	}
})

module.exports = router;
