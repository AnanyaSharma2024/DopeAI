import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../utils/firebase"
import api from "../../utils/axios"

function Home() {

  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token });

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);

    const token = await data.user.getIdToken();

    await handleLogin(token);
  };

  return (
  <div className="h-screen flex items-center justify-center bg-[#0d0f14]">
    <div className="bg-[#1a1d24] p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-6 w-[380px]">
      <h1 className="text-3xl font-bold text-white">Welcome to DopeAI</h1>

      <p className="text-gray-400 text-center">
        Sign in to continue
      </p>

      <button
  onClick={googleLogin}
  className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition duration-200 cursor-pointer"
>
  <FcGoogle size={22} />
  Continue with Google
</button>
    </div>
  </div>
);
}

export default Home;