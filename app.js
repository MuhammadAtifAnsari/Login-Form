import { auth, createUserWithEmailAndPassword } from './firebaseConfig.js';

let emailInp = document.getElementById("email-inp");
let passwordInp = document.getElementById("password-inp");
let registerForm = document.getElementById("register-form");

let formValidation = () => {
    if (emailInp.ariaValueMax.length < 1 || passwordInp.ariaValueMax.length < 1) {
        console.error(new Error("all fields must be failed!"));
        // alert("all fields must be failed!");
        return false;
    }

    return true;
}

let loginUser = async() => {
    try {

        if (!formValidation) {
            console.error(new Error("user account cannot be created"));
            return;
        }

        await createUserWithEmailAndPassword(auth, emailInp.value, passwordInp.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('account login');
            console.log(user);
            // alert('account login')
          });
        
    } catch (error) {
        console.error(error);
    }
}


registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginUser();
})