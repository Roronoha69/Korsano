import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDWBUWEzSwjAmPZwESF12aIXjwEYLDfThA",
        authDomain: "korsano-3681c.firebaseapp.com",
        projectId: "korsano-3681c",
        storageBucket: "korsano-3681c.appspot.com",
        messagingSenderId: "687740193997",
        appId: "1:687740193997:web:a3466695cc62f8ec6ded84",
        measurementId: "G-H4EZDX94ZQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);