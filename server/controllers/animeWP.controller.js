AnimeWP = require('../models/animeWP.model');

//VIEW FUNCTIONS

module.exports.getAllWP = (req, res) => {
    AnimeWP.find()
        .then(allWP => {
            res.json(allWP);
        })
        .catch(err => {
            res.status(400).json({ err });
        });
};

module.exports.getWPById = (req, res) => {
    const watchPartyId = req.params.id;

    AnimeWP.findById(watchPartyId)
        .then(watchParty => {
            if(!watchParty) {
                res.status(404).json({ err: 'Watch party not found' });
            }
            res.json(watchParty);
        })
        .catch( err => {
            res.status(500).json({ err });
        });
}


//POST FUNCTIONS

module.exports.createWP = (req, res) => {
    AnimeWP.create(req.body)
        .then(newWP => {
            res.json({ newWP });
        })
        .catch(err => {
            res.status(400).json({ err })
        });
};

module.exports.updateWP = (req, res) => {
    AnimeWP.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then(updatedWP => {
            res.json({ updatedWP })
        })
        .catch(err => {
            res.status(400).json({ err });
        });
}

//DELETE FUNCTION

module.exports.deleteWP = (req, res) => {
    const watchPartyId = req.params.id;

    AnimeWP.findByIdAndDelete(watchPartyId)
        .then(deletedWP => {
            res.json({ deletedWP });
        })
        .catch(err => {
            res.status(500).json({ err })
        })
}
