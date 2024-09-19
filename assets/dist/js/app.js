const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
btn1.addEventListener('click',e=>{
    if(btn2.classList.contains('active')){
        btn2.classList.remove('active')
        btn1.classList.add('active')
    }else if(btn1.classList.contains('active')){
        btn1.classList.remove('active')
    }else
    btn1.classList.add('active')
   
    
})
btn2.addEventListener('click',e=>{
    if(btn1.classList.contains('active')){
        btn1.classList.remove('active')
        btn2.classList.add('active')
    }else if(btn2.classList.contains('active')){
    btn2.classList.remove('active')
}
else{
btn2.classList.add('active')}
 

})
btn3.addEventListener('click',e=>{
    if(btn2.classList.contains('active')){
        btn2.classList.remove('active')
        btn3.classList.add('active')
    } else if(btn3.classList.contains('active')){
            btn3.classList.remove('active')
        }
    else{
        btn3.classList.add('active')}
        
   
})