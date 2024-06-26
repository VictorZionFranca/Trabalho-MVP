const login = document.querySelector('.login')
const loginLink = document.querySelector('.registrarlink')
const registrarLink = document.querySelector('.loginlink')

loginLink.addEventListener('click', () => {
    login.classList.add('active')
})
registrarLink.addEventListener('click', () => {
    login.classList.remove('active')
})

const btn = document.querySelector('.senha1');
const btn1 = document.querySelector('.senha2');
const passwordEl = document.querySelector('.pass');
const passwordEl1 = document.querySelector('.pass1');

btn.addEventListener('click', ()=> {
    if(passwordEl.type=== 'password'){
        passwordEl.type = 'text';
        btn.classList.replace("fa-eye", "fa-eye-slash");
    }
    else {
        passwordEl.type = 'password';
        btn.classList.replace("fa-eye-slash", "fa-eye");
    }
})
btn1.addEventListener('click', ()=> {
    if(passwordEl1.type=== 'password'){
        passwordEl1.type = 'text';
        btn1.classList.replace("fa-eye", "fa-eye-slash");
    }
    else {
        passwordEl1.type = 'password';
        btn1.classList.replace("fa-eye-slash", "fa-eye");
    }
})