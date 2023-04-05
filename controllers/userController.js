const { Movie, User } = require('../models')

class controller {
    static async login(req, res, next) {
        try {


        } catch (error) {
            next(error)
        }
    }

    static async detail(req, res, next) {
        try {
            const detailUser = await User.findOne({ where: { username: req.user } })
            res.status(200).json(detailUser.username)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = controller