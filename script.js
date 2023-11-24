const loginForm = document.querySelector('form.login');
const signupForm = document.querySelector('form.signup');
const loginBtn = document.querySelector('label.login');
const signBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('.signup-link a');
const loginTXT = document.querySelector('.title-text .login');
const signTXT = document.querySelector('.title-text .signup');

signBtn.onclick = (() => {
    loginForm.style.marginLeft = '-50%';
    loginTXT.style.marginLeft = '-50%';
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = '0%';
    loginTXT.style.marginLeft = '0%';
});

signupLink.onclick = (() =>{
    signBtn.click();
    return false;
});
