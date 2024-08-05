const contener = document.getElementById('container');
const registerBth = document.getElementById('register');
const loginBth = document.getElementById('login');

registerBth.addEventListener('click' , () =>{ 
     contener.classList.add("active");     });

loginBth.addEventListener('click' , () =>{
      contener.classList.remove("active");     });
