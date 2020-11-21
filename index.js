var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyparser = require('body-parser')
router = express.Router();
var url = 'mongodb://localhost:27017/nodejsassignment';
var port = 8103;
app.use(bodyparser.json({limit:'5000mb'}));
var USERDATA  = require("./routes/api.user")(router);

app.use('/api',USERDATA)

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("coonected")).catch((err)=>{
    console.log(err)
});
app.listen(port)