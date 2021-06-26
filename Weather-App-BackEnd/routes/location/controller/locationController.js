const Location = require('../model/Location');

async function getAllLocations(req, res) {
    try {
        let getAllLocations = await Location.find({})

        res.json({ message: 'success', payload: getAllLocations })
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message })
    }
}

async function createLocation(req, res) {
    const {city, state, country,description, temperature} = req.body
    
    let errorObj = {};

    if(Object.keys(errorObj).length > 0){
        return res.status(500).json({message: 'error', payload: errorObj})
    }
    
    try {
        let createLocation = new Location ({
            city,
            state,
            country,
            description,
            temperature,
        })

        let save = await createLocation.save();
        res.json({message: 'success', save})
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message })
    }
}

async function deleteLocation(req, res) {
    try {
        let location = req.params.location;

        let deletedLocation = await Location.findByIdAndDelete(req.params.id)
        res.json ({message: 'success', payload: deletedLocation})
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message })
    }
}

module.exports = {
    getAllLocations,
    createLocation,
    deleteLocation,
}