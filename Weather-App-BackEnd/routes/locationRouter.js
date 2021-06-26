var express = require('express');
var router = express.Router();

var {
  getAllLocations,
  createLocation,
  deleteLocation,
} = require('./location/controller/locationController')

router.get('/get-all-searched-locations', getAllLocations)
router.post('/add-location', createLocation)
router.delete('/delete-location-by-id/:id', deleteLocation)

module.exports = router;

