const fristNameInputElem=document.querySelector('#fristname')
const lastNameInputElem=document.querySelector('#lastname')
const userNameInputElem=document.querySelector('#username')
const passwordInputElem=document.querySelector('#password')
const registerBtn=document.querySelector('.btn')
const form=document.querySelector('form')



 const registerUser=async ()=>{

    const newUserInfos={
        fristname:fristNameInputElem.value.trim(),
        lastname:lastNameInputElem.value.trim(),
        username:userNameInputElem.value.trim(),
        password:passwordInputElem.value.trim()
    }
    const res=await fetch(`http://localhost:4000/api/users`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newUserInfos)

    })
    const result= await res.json()
    console.log(result);
 }

 form.addEventListener('submit',event=>{
    event.preventDefault()
   
})
registerBtn.addEventListener('click',()=>{
    registerUser()

})
