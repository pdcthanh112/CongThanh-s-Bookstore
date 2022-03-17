const bcrypt = require('bcrypt')
const { validate } = require('../../utils/validation')
const jwt = require('jsonwebtoken')
const AccountModel = '../../models/accountModel.js'


exports.login = (req, res) => {
    const loginReqData = new AccountModel(req.body)
    AccountModel.login(loginReqData, (err, account) => {
        if (err) {
            res.send(err)
        } else {
            const accessToken = jwt.sign(account, process.env.ACCESS_TOKEN_SECRET_KEY)
            res.json({ status: true, message: 'Login successfully', data: account.body, accessToken })
        }
    })
}

exports.register = (req, res) => {
    const registerReqData = new AccountModel(req.body)
    const errMsg = validate(registerReqData.username, registerReqData.password, registerReqData.confirmPassword)
    if (errMsg) return res.status(400).json({ err: errMsg })

    const hashPassword = bcrypt.hash(password, 12)

    //const newAccount = new AccountModel({ username, password: hashPassword })
    res.json({ msg: "register success" })

}