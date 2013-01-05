var express = require('express');

app = express();

app.get('/', function(req, res) {
    res.send({running:true});
});

var server = app.listen(process.env.app_port || 8080, function() {
    console.log("Server running on " + server.address().port + " in " + app.settings.env + " mode.");
});
