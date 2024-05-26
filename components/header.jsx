import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/public/LendsqrL.svg";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import Profile from "./profile";

async function HeaderProfile() {

  return (
    <section className="flex justify-between items-center h-full">
      <div className="flex justify-between w-1/2">
        <Image src={logo} alt="Logo" width={140} />
        <div className="flex flex-row-reverse items-center">
          <label className="bg-teal-400 h-10 w-10 rounded-r-md flex justify-center items-center" htmlFor="search">
            <IoIosSearch color="white" />
          </label>
          <input id="search" placeholder="Search for anything... " className="px-4 h-10 w-[250px] outline outline-[3px] border-[1px] outline-slate-50 rounded-l-md" />
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center pl-14">
        <small className="underline font-medium font-roboto text-semi cursor-pointer">Docs</small>
        <FaRegBell className="text-semi mx-7 cursor-pointer" size={25}/>
        <Suspense fallback={"loading..."}>
            <Profile />
        </Suspense>
      </div>
    </section>
  );
};

export default HeaderProfile;
