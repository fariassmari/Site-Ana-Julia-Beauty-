"use client"

import Link from "next/link"
import Image from 'next/image';
import { motion } from "framer-motion";
import { Menu } from "lucide-react"

export default function LiquidGlassNavbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6">
      
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative 
          flex items-center justify-between 
          rounded-full 
          px-8 py-3
          border border-white/20
          bg-white/10
          backdrop-blur-2xl
          backdrop-saturate-150
          shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          overflow-hidden
        "
      >
        
        {/* Reflexo animado */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-0 w-full h-32 bg-gradient-to-b from-white/30 to-transparent opacity-30 blur-xl" />
          
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl"
          />
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="relative text-white font-semibold text-lg tracking-wide invert"
        >
          <Image src="/images/logo.png"
            alt="Logo"
            width={180}
            height={80}
            className="h-14 w-auto object-contain" />
        </Link>

        {/* Menu */}
        <div className="relative flex items-center gap-8 text-sm text-white/80">
          
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="
              px-4 py-2 
              rounded-full 
              bg-white/20 
              hover:bg-white/30
              backdrop-blur-md
              transition-all duration-300
            "
          >
            Contact
          </Link>

        </div>
      </motion.nav>
    </div>
  )
}