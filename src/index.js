import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import firebaseConfig from "./Components/firebaseConfig" 
// import { initializeApp } from 'firebase/app';

// const app = initializeApp(firebaseConfig);

//mobile menu
const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navBarMenu.classList.toggle('is-active')
})

ReactDOM.render(<App />, document.getElementById('root'));
