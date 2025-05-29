"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./back-button.css";
import { Images } from "@/constants/images";

export const BackButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      className="back-button"
      onClick={() => router.back()}
    >
       <Image
          src={Images.arrow_left}
          alt="logo"
          width={30}
          height={40}
          style={{ width: 'auto', height: '25px' }}
        />
    </button>
  );
};
