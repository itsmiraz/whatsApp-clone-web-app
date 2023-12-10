import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React, { useState } from "react";

function onboarding() {
  const [{ userInfo }] = useStateProvider()
  const [name, setname] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avater.png");

  console.log(userInfo);
  return <div className="bg-panel-header-background flex  items-center justify-center min-h-screen w-screen mx-auto ">


    <div className=" gap-2">

      <Image src={'/whatsapp.gif'} alt="whatsapp" width={200} height={200} />

      <h2 className="test-2xl font-semibold text-white mt-8 text-center">Create Your Profile</h2>

      <div className="flex flex-col items-center justify-center mt-5 gap-6">

        <Input name={"Display Name"} state={name} setState={setname} label />
        <Input name={"About"} state={about} setState={setAbout} label />

      </div>
    </div>


  </div>;
}

export default onboarding;
