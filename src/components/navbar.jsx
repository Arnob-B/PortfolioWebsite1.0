import {  useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Topnav({
  bgcol,sbgcol,tog,prop
}){
  const switchbg = ()=>{
    sbgcol(!bgcol);
  }
  const talkHandler = ()=>{
  }
  return (
    <div className={"fixed "+((tog)? "left-0" :"-left-1/2")+" top-0 md:static bg-inherit"}>
      <nav className="flex  flex-col justify-start py-10 items-start px-5 h-screen w-fit border-r-0.15 border-gray-500 hover:border-green-500 md:flex-row md:justify-between md:border-b-0.15 md:w-screen md:h-auto md:py-2">
        <div className="flex flex-col items-center md:flex-row justify-center lg:w-1/3 my-0  sm:border-b-1 sm:border-white sm:hover:border-green-600 md:border-none">
          <div className="w-12">
            <img src={bgcol ? prop.imgdark:prop.imglight} className="shadow rounded-full max-w-fill h-auto object-cover align-middle border-none" alt="h" />
          </div>
          <div className="mx-3 my-1 text-white-500 text-sm font-mono font-bold">
            {prop.name}
          </div>
        </div>
        <div className="flex md:flex-row lg:w-1/3 md:justify-center flex-col my-3">
        <ul className="text-white-500 text-sm font-mono font-bold  m-1 hover:text-green-400 my-3 md:my-0"><a href="/">HOME</a></ul>
{/* 
        <ul className="text-white-500 text-sm font-mono font-bold  m-1 hover:text-green-400 my-3 md:my-0"><a href="https://www.google.com">ABOUT</a></ul>
        <ul className="text-white-500 text-sm font-mono font-bold  m-1 hover:text-green-400 my-3 md:my-0"><a href="https://www.google.com">SERVICES</a></ul>
        <ul className="text-white-500 text-sm font-mono font-bold  m-1 hover:text-green-400 my-3 md:my-0"><a href="https://www.google.com">PORTFOLIO</a></ul>
        <ul className="text-white-500 text-sm font-mono font-bold  m-1 hover:text-green-400 my-3 md:my-0"><a href="https://www.google.com">CONTACT</a></ul> */}
        </div>
        <div className="lg:w-1/3 flex flex-col items-center md:flex-row lg:justify-center justify-end my-1">
          <button className="md:w-1/12 w-7 " onClick={switchbg} >
            <img src="data:image/png;base64,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" className="shadow rounded-full max-w-full h-auto align-middle border-none" alt="h" />
          </button>
          <button onClick={talkHandler} className="m-2 p-1 rounded-sm bg-green-400 text-white-500 text-xs font-mono font-bold">
            Lets talk
          </button>
        </div>
      </nav>
    </div>
  );
}