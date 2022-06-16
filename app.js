let user= document.getElementById('user');
let pass = document.getElementById('password');
let submit = document.querySelector('.submit');
let ping = document.querySelector('.alert');
let header = document.querySelector('.header')

user.addEventListener('input', (e)=>{
 if(user.value.length < 6){
    user.style.borderColor = 'red'
 }else if(user.value.length >= 6){
   user.style.borderColor = 'green'
 }else{
     user.style.borderColor = 'yellow'
 }
    
})

pass.addEventListener('input', (e)=>{
  
    if(pass.value.length < 6){
        pass.style.borderColor = 'red'
     }else if(pass.value.length >= 8){
       pass.style.borderColor = 'green'
     }else{
         pass.style.borderColor = 'yellow'
     }
  
})



submit.addEventListener('click', ()=>{
 
 if(user.value.length < 6 && pass.value.length < 8){
   alert('not valid')
  }else if(user.value.length >= 6 && pass.value.length >= 8){
    ping.style.visibility = 'visible';
    header.style.visibility = 'hidden'
  }else{
    alert('Please fill the input field')
  }

})






