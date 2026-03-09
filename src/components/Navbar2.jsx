"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar2() {
    const [aberto, setAberto] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {aberto && (
                    <div
                        onClick={() => setAberto(false)}
                        className="fixed inset-0 bg-black/90 z-[100]"
                    />
                )}
            <nav className="flex items-center justify-between px-12 py-6 w-full text-white border-b border-white/10 backdrop-blur-md bg-black/30">

                <div
                    className={`fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] transform transition-transform duration-300 z-[100] border-l border-white/10
                    ${aberto ? "translate-x-0" : "translate-x-full"}`}
                    >

                    <div className="flex justify-end p-8">
                        <button onClick={() => setAberto(false)}>
                        <X size={28}/>
                        </button>
                    </div>

                    <ul className="flex flex-col gap-8 px-8 text-lg uppercase tracking-widest text-white">
                        <li className="relative group cursor-pointer">
                            <span className="text-gray-300 group-hover:text-white transition">Home</span>
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <span className="text-gray-300 group-hover:text-white transition">Serviços</span>
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <span className="text-gray-300 group-hover:text-white transition">Sobre</span>
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <span className="text-gray-300 group-hover:text-white transition">Contato</span>
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>

                    </div>
                <Image src="/images/logo.png" alt="AJ Lash Designer" width={100} height={150} className="object-contain invert" />

                <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
                    <li className="relative group cursor-pointer">
                        <span className="text-gray-300 group-hover:text-white transition">Home</span>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <span className="text-gray-300 group-hover:text-white transition">Serviços</span>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <span className="text-gray-300 group-hover:text-white transition">Sobre</span>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <span className="text-gray-300 group-hover:text-white transition">Contato</span>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
                
                <button className="md:hidden relative group p-2 cursor-pointer" onClick={() => setAberto(true)}>
                    <Menu size={28} />
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
            </nav>

        </header>
    );
}