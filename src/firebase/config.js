import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxL1bxBKyP_V9KQAy2ulMMvwP8AkZeUOQ",
    authDomain: "ch-43220-reactjs-ecommerce.firebaseapp.com",
    projectId: "ch-43220-reactjs-ecommerce",
    storageBucket: "ch-43220-reactjs-ecommerce.appspot.com",
    messagingSenderId: "1026175157232",
    appId: "1:1026175157232:web:cccfea5a37de1ed1761335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);