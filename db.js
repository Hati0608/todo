var mongoose = require('mongoose')
var schema   = mongoose.schema

var todo = new schema({
	user_id    : String,
	content	   : String,
	updated_at : Date

})

mongoose.model('Todo', todo)
mongoose.connect('mongodb://localhost/express-todo')//

