const express=require('express')
const sabzlearnDB=require('../db/sabzlearnDB')

const userRouters=express.Router()


userRouters.post('/',(req,res)=>{
    

            let body=req.body
            let date=new Date().toLocaleDateString('fa-IR')
            console.log('conect shod');
            let newUserInfoQuery=`INSERT INTO users VALUES (NULL,"${body.fristname}","${body.lastname}","${body.username}","${body.password}","${date}")`
            sabzlearnDB.query(newUserInfoQuery,(error,result)=>{
                if(error){
                    console.log('you have error', error);
                    res.send(null)
                }
                else{
                    console.log('1 user insert');
                    res.send(true)

                }
            })
    
    })



userRouters.get('/all',(req,res)=>{
    

        
            console.log('conect shod');
            let newUserInfoQuery=`SELECT * FROM users`
            sabzlearnDB.query(newUserInfoQuery,(error,result)=>{
                if(error){
                    console.log('you have error', error);
                    res.send(null)
                }
                else{
                    console.log('1 user insert');
                    res.send(JSON.stringify(result))

                }
            })
        

})
userRouters.delete('/remove/:userID',(req,res)=>{
             let userID=req.params.userID
            console.log('conect shod');
            let deleteUserInfoQuery=`DELETE FROM users WHERE id=${userID}`
            sabzlearnDB.query(deleteUserInfoQuery,(error,result)=>{
                if(error){
                    console.log('you have error', error);
                    res.send(null)
                }
                else{
                    console.log('1 user delete');
                    res.send(JSON.stringify(result))

                }
            })
        
    })
    userRouters.put('/edit/:userID',(req,res)=>{
        let userID=req.params.userID
        let body=req.body
        let updateUserInfoQuery=`UPDATE users SET fristname='${body.fristname}',lastname='${body.lastname}',username='${body.username}',password='${body.password}' WHERE id=${userID}`
            sabzlearnDB.query(updateUserInfoQuery,(error,result)=>{
                if(error){
                    console.log('you have error', error);
                    res.send(null)
                }
                else{
                    console.log('1 user delete');
                    res.send(JSON.stringify(result))

                }
            })
    })




module.exports=userRouters