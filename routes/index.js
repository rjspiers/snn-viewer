var express = require('express');
var router = express.Router();

const pool = require('../lib/db');

router.get('/', function(req, res) {
	var plotting_software = 'QGIS';
	pool.query('SELECT * FROM llpg_schema.new_developments_db WHERE plotting_software LIKE $1 ORDER BY snn_ref' , [plotting_software], function(err, results) {
		if (err) {
			return console.error('error running query', err);
		}
		res.render('pages/index', {
			resultsRows: results.rows
		}); // res.render
	}); // pool.query
}); // app.get

module.exports = router;