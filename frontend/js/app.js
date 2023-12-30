


// get all users
const wrapperUsers=document.querySelector('.user-wrap')
const wrapEditModal=document.querySelector('.modal-wrap')
const btnEdit=document.querySelector('.btn-edit')
const form=document.querySelector('form')
const fristnameInput=document.querySelector('#fristname')
const lastnameInput=document.querySelector('#lastname')
const usernameInput=document.querySelector('#username')
const passwordInput=document.querySelector('#password')
let userID=''

const getAndShowAllUsers=async()=>{
    const res=await fetch(`http://localhost:4000/api/users/all`)
    const users=await res.json()
    console.log(users);
    
    
    users.forEach(user=>{
        wrapperUsers.insertAdjacentHTML('afterbegin',
        `   
                    <div class="user">
                    <div class="btn-group">
                        <button onclick="removeUser('${user.id}')" class="btn active">حذف </button>
                        <button onclick=editUser(${JSON.stringify(user)}) class="btn ">ویرایش</button>
                    </div>

                    <div class="direction-wrapper">
                        <div class="direction">
                            <h1 class="direction_title">${user.username}</h1>
                            <h2 class="direction_subtitle">${user.fristname}_${user.lastname}</h2>

                        </div>
                        <img class="img-user" src="../img/user1.png" alt="">
                    </div>
                    

                </div>

            `
            
        )

        
    })
}



const removeUser=(userID)=>{

    swal({
        title:"آیا می خواهید کاربر مورد نظر را حذف کنید",
        icon:"warning",
        buttons:["نه","آره"]
        
    }).then(result=>{
        wrapperUsers.innerHTML=''
        if(result){
            fetch(`http://localhost:4000/api/users/remove/${userID}`,{
                method:'DELETE'
            })
            .then(res=>{
                
                console.log(res);
                res.json()
                if(res.ok){
                   swal({
                    title:"کاربر مورد نظر با موفقیت حذف شد",
                    icon:"success",
                    button:"خیلی هم عالی"
                   }).then(()=>{
                    getAndShowAllUsers()
                   })
                }
            })
        }
    })
    

   
            
  
   
    
}
const closeModal=()=>{
    wrapEditModal.classList.remove('visible')
}
const emptyEditInput=()=>{
    fristnameInput.value='',
    lastnameInput.value='',
    usernameInput.value='',
    passwordInput.value=''


}


const editUser=(user)=>{
    console.log(user)
    userID=user.id
  
    fristnameInput.value=user.fristname;
    lastnameInput.value=user.lastname;
    usernameInput.value=user.username;
    passwordInput.value=user.password


    wrapEditModal.classList.add('visible')
    wrapperUsers.innerHTML=''


    btnEdit.addEventListener('click',()=>{

        const newUserInfos={
    
            fristname:fristnameInput.value.trim(),
            lastname:lastnameInput.value.trim(),
            username:usernameInput.value.trim(),
            password:passwordInput.value.trim()
    
        }
         fetch(`http://localhost:4000/api/users/edit/${userID}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUserInfos)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            getAndShowAllUsers()
        })
        emptyEditInput()
        closeModal()
      
    })

}

// form prevent
form.addEventListener('submit',event=>{
    event.preventDefault()
})




// close modal
window.addEventListener('click',event=>{
    
    if(event.target.className==='container-modal'){
        closeModal()
    }

   
})
window.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
        closeModal()
    }
})

window.addEventListener('load',()=>{
    getAndShowAllUsers()
    
})