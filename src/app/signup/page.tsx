"use client";

import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const [imagePreview, setImagePreview] = useState("");

  return (
    <div className="flex border-2 rounded-lg w-[60%] p-6 mx-auto bg-gray-700">
      <div className="flex-[70%]">
        <h2 className="text-2xl py-4">Cadastre-se</h2>
        <div className="grid grid-cols-2 justify-evenly gap-4">
          <SignUpForm handleImagePreview={setImagePreview} />
        </div>
      </div>
      {imagePreview && (
        <div className="flex flex-[30%] justify-center self-center">
          <Image
            alt="Imagem do Usuário"
            src={imagePreview}
            width={80}
            height={80}
            className="object-cover w-[180px] h-[180px] rounded-full"
          />
        </div>
      )}
    </div>
  );
}
