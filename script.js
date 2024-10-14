const validateForm = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let errorMessage = document.getElementById('error-message');
    
    errorMessage.innerHTML = '';
    
    if (name === '' || email === '' || age === '') {
        errorMessage.innerHTML = 'All fields are required!';
        return false;
    }

    if (age < 18 || age > 100) {
        errorMessage.innerHTML = 'Age must be between 18 and 100!';
        return false;
    }
    
    return true;
}
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            age: document.getElementById('age').value
        };
        
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'details.html';
    }
});
window.addEventListener('load', () => {
    if (window.location.pathname.includes('details.html')) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            document.getElementById('displayName').innerText = userData.name;
            document.getElementById('displayEmail').innerText = userData.email;
            document.getElementById('displayAge').innerText = userData.age;
        }
    }
});
