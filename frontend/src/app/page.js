"use client"
import dynamic from "next/dynamic";
import Login from "./login/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
const NoSSR = dynamic(()=>import("./home/Home"),{ssr:false});


export default function Home() {
  const{AuthData} = useContext(AuthContext)  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {
        AuthData ? <NoSSR/> : <Login/>
      }
    </div>
  );
}
