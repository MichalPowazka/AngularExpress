const MySqli = require('mysqli');
//master databse
let conn = new MySqli({
    host: 'localhost',
    port: 3306,
    user: 'mega_user',
    passwd: '123456',
    db: 'shop'

});

//slave database?
let db = conn.emit(false,'')

module.exports = {
    database: db
}