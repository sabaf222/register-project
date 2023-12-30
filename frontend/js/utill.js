const showSwal=(title,icon,buttons,callback)=>{

    showSwal({
        title,
        icon,
        buttons,

    }).then((result)=>callback(result))
    
}
export{showSwal}