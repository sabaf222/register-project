const mysql=require('mysql')

const sabzlearnDB=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sabzlearn'
})


module.exports=sabzlearnDB