import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import api from '../utils/axios'
import { auth, googleProvider } from '../utils/firebase'

function App() {

  const handleLogin = async (token) => {
    try {
      // Firebase ID Token backend ko bhej rahe hain
      const { data } = await api.post("/auth/login", { token });

      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const googleLogin = async () => {
    // Google Sign In Popup
    const data = await signInWithPopup(auth, googleProvider);

    // Firebase ID Token
    const token = await data.user.getIdToken();

    console.log(token);

    // Token backend ko bhejo
    await handleLogin(token);

    console.log(data);
  }

  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <button className='w-50 h-24 bg-white' onClick={googleLogin}>
        continue with google
      </button>
    </div>
  )
}

export default App