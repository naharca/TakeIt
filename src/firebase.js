import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBWXXtJUazD9U_sXLD0gHypsO3t5Egph28",
        authDomain: "naharacastillo-f5774.firebaseapp.com",
        projectId: "naharacastillo-f5774",
        storageBucket: "naharacastillo-f5774.appspot.com",
        messagingSenderId: "100026764005",
        appId: "1:100026764005:web:a4d3bcc66364f23967a20c"
    }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}