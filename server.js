import {initializeApp} from 'firebase/app';
import {getFirestore,} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDJv2kaMXcphBQK13HRVv6qomrQn0dHG94",
    authDomain: "bookstore-331fc.firebaseapp.com",
    projectId: "bookstore-331fc",
    storageBucket: "bookstore-331fc.appspot.com",
    messagingSenderId: "763232314086",
    appId: "1:763232314086:web:fd7640d6378e195d775127"
};
// init firebase app
initializeApp(firebaseConfig);
// init services
const db=getFirestore()
export {db};