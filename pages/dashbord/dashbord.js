import { getAuth, signOut, auth, deleteUser } from "../../firebaseConfig.js";

let signOutBtn = document.getElementById('signout-btn');
let deleteBtn = document.getElementById('delete-btn');

// user signout
let userSignOut = async () => {
    try {
        const auth = getAuth();
        await signOut(auth).then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.');
        //   window.location.href = '../../../index.html';
          window.location.replace('../../index.html');  
        })
    } catch (error) {
        console.log(error);
    }
}

signOutBtn.addEventListener('click', () => userSignOut());


// delete user 
let userDelete = async () => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        
        await deleteUser(user).then(() => {
          // User deleted.
          console.log('user deleted!');
          window.location.replace('../../index.html');
        // window.location.replace('/Login-Form/index.html');
        })
    } catch (error) {
        console.log('user delete error =>', error);
    }
}

deleteBtn.addEventListener('click', () => userDelete());


// GSAP ANIMATION
gsap.from('h1',{
    opacity: 0,
    delay: 1,
    duration: 2,
    y: -30,
});

gsap.from('#signout-btn',{
    opacity: 0,
    delay: 2,
    duration: 2,
    y: -30,
});

gsap.from('#delete-btn',{
    opacity: 0,
    delay: 3,
    duration: 2,
    y: -30,
});
