import bcrypt from 'bcrypt'
import { validate } from '../../utils/validation'
const AccountModel = '../../models/accountModel'


exports.login = (req, res) => {
    const loginReqData = new AccountModel(req.body)
    AccountModel.login(loginReqData, (err, account) => {
        if(err) 
            res.send(err)
            res.json({status: true, message: 'Created successfully', data: account.body})
    })
} 

exports.register = (req, res) => {
    const registerReqData = new AccountModel(req.body)
    const errMsg = validate(registerReqData.username, registerReqData.password, registerReqData.confirmPassword)
    if(errMsg) return res.status(400).json({err: errMsg})

    const hashPassword = bcrypt.hash(password, 12)

    const newAccount = new AccountModel({username, password: hashPassword})
    res.json({msg: "register success"})

}