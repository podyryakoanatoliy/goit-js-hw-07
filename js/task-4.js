const form = document.querySelector('.login-form')
form.addEventListener('submit', handleValue)

function handleValue(event) {
    event.preventDefault();
    const form = event.target
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    const objValue = {}
    if (login === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        objValue.login = login;
        objValue.password = password;
        console.log(objValue);
    }
    form.reset(); 
    
}

