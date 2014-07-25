var express = require('express'),
	coolrom = require('coolrom'),
	app = express();

app.get('/', function (req, res){
	res.redirect('https://github.com/alexperezpaya/coolrom-api');
});

app.get('/v1/platforms/', function (req, res){
	coolrom.getPlatforms(function (err, platforms) {

		if(err){
			return res.send(500, {err: err});
		}

		res.send(platforms);

	});
});

app.get('/v1/filters/:platform/', function (req, res){
	coolrom.getFiltersByPlatform(req.params.platform, function (err, filters) {

		if(err){
			return res.send(500, {err: err});
		}

		res.send(filters);

	});
});

app.get('/v1/search/:query', function (req, res){
	req.params.query = req.params.query.replace('+', '')
	coolrom.searchRom(req.params.query, '', function (err, roms) {

		if(err){
			return res.send(500, {err: err});
		}

		res.send(roms);

	});
});


app.get('/v1/search/:query/:platform', function (req, res){
	req.params.query = req.params.query.replace('+', '')
	coolrom.searchRom(req.params.query, req.params.platform, function (err, roms) {

		if(err){
			return res.send(500, {err: err});
		}

		res.send(roms);

	});
});

app.get('/v1/roms/:platform/:filter', function (req, res){
	coolrom.getRomsByPlatformAndFilter(req.params.platform, req.params.filter, function (err, roms) {

		if(err){
			return res.send(500, {err: err});
		}

		res.send(roms);

	});

});

app.get('/v1/rom/:id/:platform', function (req, res){
	coolrom.getRomByIdAndPlatform(req.params.id, req.params.platform, function (err, rom){

		if(err){
			return res.send(500, {err: err});
		}

		res.send(rom);

	});
});

app.get('/v1/rom/link/:id/', function (req, res){
	coolrom.getRomDownloadLink(req.params.id, function (err, link){

		if(err){
			return res.send(500, {err: err});
		}

		res.send({link: link});

	});
});

var port = process.env.PORT || 8080;
app.listen(port, function (){
	console.log('Up and running on port:' + port);
});
