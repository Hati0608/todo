var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose')
var Todo     = mongoose.model('Todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo list' });
});

function create (req, res) {
	//var small = new Todo(....
	//small.save(fun...
	new Todo({
		content	   : req.body.content
		updated_at : Date.now()
	}).save(function(err, todo, count){
		res.redirect('/')
	})
}

function index (req, res){
	Todo.find(function(err, todos, count){
		res.render('index',{
			title : 'Express Todo Example',
			todo  : todos
		})
	})
}

//delete list by id
function destroy (req, res){
	Todo.findById(req.params.id, function(err, todo){
		todo.remove(function (err, todo){
			res.redirect('/')
		})
	})
}

exports.create  = create
exports.index   = indexa
exports.destroy = destroy
module.exports = router;
