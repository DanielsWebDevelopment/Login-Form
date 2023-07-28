const login = document.getElementById('btn-login');
const username = document.getElementById('search-input');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorEl = document.getElementById('error');


function logIn(){
    form.addEventListener("submit", (e) => {
        let messages = []
        if (username.value === '' || username.value == null){
            messages.push('Username or Email are Required')
        }
    
        if (messages.length > 0){
            e.preventDefault()
            errorEl.innerText = messages.join(', ')
        }
    })
};

