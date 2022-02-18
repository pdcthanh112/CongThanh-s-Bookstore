const dbConn = require('../config/dbConfig');

var Account = function (account) {
    this.id = account.id;
    this.user_name = account.user_name;
    this.full_name = account.full_name;
    this.password = account.password;
    this.email = account.email;
    this.create_date = getDate();
    this.role = account.role;
    this.status = account.status;
};

var getDate = () => {
    let date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

Account.login = (username, password, result) => {
    dbConn.query('SELECT full_name, role FROM account WHERE user_name = ? and password = ?', [username, password], (err, res) => {
        if (err) {
            console.log('Login fail');
            result(null, err);
        } else {
            console.log('Login successfully');
            // check coi res nó trả về cái gì, rồi mới làm tiếp được
        }
    })
};

Account.register = (accountReqData, result) => {
    dbConn.query('INSERT into account SET ?', accountReqData, (err, res) => {
        if (err) {
            console.log('Register fail');
            result(null, err);
        } else {
            console.log('Register successfully');
            result(null, res);
        }
    })
};