import { getUser, signUpUser, signInUser, checkAuth, redirectIfLoggedIn, logout } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const response = await signUpUser(formData.get('email'), formData.get('password'));
    

});
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
redirectIfLoggedIn();
