const AnimeWPController = require('../controllers/animeWP.controller');

module.exports = app => {
    app.post('/api/anime', AnimeWPController.createWP);
    app.get('/api/anime', AnimeWPController.getAllWP);
    app.get('/api/anime/:id', AnimeWPController.getWPById);
    app.put('/api/anime/:id', AnimeWPController.updateWP);
    app.delete('/api/anime/:id', AnimeWPController.deleteWP);
};