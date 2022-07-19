import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
  authDomain: "yourtube-2c041.firebaseapp.com",
  projectId: "yourtube-2c041",
  storageBucket: "yourtube-2c041.appspot.com",
  messagingSenderId: "826698342212",
  appId: "1:826698342212:web:6001a8c96fe684629e8111"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app