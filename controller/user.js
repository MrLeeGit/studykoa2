const { exec, escape } = require('../db/mysql')

const getLoginInfo = async () => {
    const sql = `select * from login`;

    const rows = await exec(sql)
    return rows || [];
}

module.exports = {
    getLoginInfo
}