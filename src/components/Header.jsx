"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Sidebar aberto={aberto} setAberto={setAberto} />

      <nav className="flex items-center justify-between px-12 py-6 w-full text-white border-b border-white/10 backdrop-blur-md bg-black/50">
        <Image src="/images/logo.png" alt="AJ Lash" width={100} height={40} className="invert object-contain" />

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button className="md:hidden relative group p-2 cursor-pointer" onClick={() => setAberto(true)}>
            <Menu size={28} />
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </nav>
    </header>
  );
}