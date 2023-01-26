import { getUser, signUpUser, signInUser, checkAuth, redirectIfLoggedIn, logout } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.querySelector('#sign-in-email');
const signInPassword = document.querySelector('#sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.querySelector('#sign-up-email');
const signUpPassword = document.querySelector('#sign-up-password');

// Wire up sign in and sign up forms to supabase
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    }
});
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
redirectIfLoggedIn();
