var express = require('express');
var router = express.Router();

const pool = require('../lib/db');

router.get('/:snn_ref', function(req, res) {
	var snn_ref = req.params.snn_ref;
	var plotting_software = 'QGIS';
	pool.query('SELECT *, ST_X(ST_CENTROID(wkb_geometry)) AS x, ST_Y(ST_CENTROID(wkb_geometry)) AS y FROM llpg_schema.new_developments_db WHERE snn_ref ILIKE $1 AND plotting_software LIKE $2' , [snn_ref, plotting_software], function(err, results) {
		if (err) {
			return console.error('error running query', err);
		}
		res.render('pages/record', {
			resultsRows: results.rows
		}); // res.render
	}); // pool.query
}); // app.get

module.exports = router;