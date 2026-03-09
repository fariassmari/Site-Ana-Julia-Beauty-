import { X } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Sidebar({ aberto, setAberto }) {
  return (
    <>
      <div onClick={() => setAberto(false)} className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 z-[100] 
      ${aberto ? "opacity-100 visible" : "opacity-0 invisible"}`}/>

      <aside className={`fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 z-[110] transition-transform duration-300 ease-in-out ${
        aberto ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex justify-end p-8">
          <button onClick={() => setAberto(false)} className="text-white relative group p-2 cursor-pointer">
            <X size={28} />
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        <div className="px-8 mt-4">
          <NavLinks mobile />
        </div>
      </aside>
    </>
  );
}