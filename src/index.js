import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from "./Components/firebaseConfig" 
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));