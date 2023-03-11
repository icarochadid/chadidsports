import { createContext, ReactNode, useEffect, useState } from "react";
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { redirect } from "react-router-dom";
import axios from 'axios'
interface userAccessType {
   getUserData: (data:any) => void;
    authedUserData: {
        name: string, 
        email: string, 
        password: string
    };
    SingInWithGoogle: () => Promise<boolean>,
};
 interface userDataType {
    name: string,
    email: string, 
    password: string, 
 };
interface userAccessingType {
    email: string, 
    password: string
 }
interface ChildrenType {
    children: ReactNode
}
interface Product {
    id: string, 
    name: string, 
    price: number,
    metadata: {
        [key: string]: string
    }
}


const firebaseConfig = {
    apiKey: "AIzaSyBP_yIgzAP_zawgF-7af0BEtVBkhYz-NH0",
    authDomain: "chadidsports.firebaseapp.com",
    projectId: "chadidsports",
    storageBucket: "chadidsports.appspot.com",
    messagingSenderId: "731054869929",
    appId: "1:731054869929:web:001ee84fcd3137387608b8",
    measurementId: "G-2E44T7BVHB"
}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

export const AccessContext = createContext<userAccessType>({
    getUserData: (data: userDataType) => {},
    authedUserData: { name: '', email: '', password: '' },
    SingInWithGoogle: () => Promise.resolve(true),
}) 

export function AccessProvider({children}: ChildrenType) {
    const [authedUserData, setauthedUserData] = useState<userDataType>({
        name: '', 
        email: '',
        password: ''
    }) 
    function getUserData(data: userDataType) {
            const UserData = {
                name: data.name,
                email: data.email,
                password: data.password
             }
        createUserWithEmailAndPassword(auth, UserData.email, UserData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setauthedUserData(UserData);     
        } 
            )
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;});
        }
    async function SingInWithGoogle() {
        try {
                const result = await signInWithPopup(auth, provider)
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential?.accessToken
                const user = result.user
                return true
            } catch (error: any) {
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.customData.email
                const credential = GoogleAuthProvider.credentialFromError(error)
                return false
        }
        
    }
   
    
    return(
        <AccessContext.Provider value={{ getUserData, authedUserData, SingInWithGoogle }}>
            {children}
        </AccessContext.Provider>
    )
}