import { CHECK_USER_ROUTER } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
function login() {

  const router = useRouter()

  const hanldeLogin = async () => {
    const provider = new GoogleAuthProvider

    const { user: {
      displayName: name, email, photoURL: profileImage
    } } = await signInWithPopup(firebaseAuth, provider)
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTER, { email })
        if (!data?.success) {
          router.push("/onboarding")
        }
      }
    }
    catch (err) {
      console.log(err);
    }


  }


  return <div className="flex flex-col gap-8 justify-center items-center bg-panel-header-background min-h-screen w-full ">

    <div className="flex justify-center gap-x-6 items-center">
      <Image
        src={'/whatsapp.gif'}
        width={200}
        height={200}
        alt="whatsapp-icon"
      />
      <p className="text-4xl font-semibold text-white">Whats App Clone </p>
    </div>

    <div>
      <button onClick={hanldeLogin} className="bg-search-input-container-background px-4 py-2 rounded flex items-center text-white font-medium  gap-x-4 bg-">
        <FcGoogle />
        Login With Google
      </button>
    </div>
  </div>;
}

export default login;
