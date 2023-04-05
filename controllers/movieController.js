const { User, Movie } = require('../models')

class Controller {
    static async fetchAllMovie(req, res, next) {
        try {
            const allMovie = await Movie.findAll()
            res.status(200).json(allMovie)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller