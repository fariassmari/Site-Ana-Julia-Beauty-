import ServicosSecao from '@/components/servicos/ServicosSecao';
import { playfair } from "@/app/layout";

export default function Servicos() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <div className="pt-50  text-center">
                 <p className="text-yellow-600 uppercase tracking-[0.4em] text-xs mb-2">Catálogo Exclusivo</p>
                 <h2 className="text-white text-4xl md:text-5xl tracking-wide">
                    Escolha o serviço ideal para você
                 </h2>
                 <div className="w-20 h-px bg-yellow-600/50 mx-auto mt-6"></div>
            </div>
            
            <ServicosSecao />
        </div>
    );
}