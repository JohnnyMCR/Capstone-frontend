import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDmX_55O-6B6y931Rfzc5wmSF1Q1cuHorM",
  authDomain: "ascendant-epoch-394900.firebaseapp.com",
  projectId: "ascendant-epoch-394900",
  storageBucket: "ascendant-epoch-394900.appspot.com",
  messagingSenderId: "1083042238779",
  appId: "1:1083042238779:web:23bd9303925860b679a71e",
  measurementId: "G-TPH67VBYVX"
};

export const app = initializeApp(firebaseConfig);

export default firebaseConfig;