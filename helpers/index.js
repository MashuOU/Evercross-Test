const b = require("bcrypt")
const secret = process.env.JWT_SECRET

const hashPassword = (password) => {
    return b.hashSync(password, 12)
}

const checkPass = (password, hash) => {
    return b.compareSync(password, hash)
}


module.exports = { hashPassword, checkPass }

console.log(secret);