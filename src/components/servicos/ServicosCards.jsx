import { CircleCheckBig } from 'lucide-react';

export default function ServicosCards({ servicos }) {
    return (
        <div className="bg-[#0d0d0d] border border-white/5 rounded-[32px] p-8 transition-all duration-500 hover:border-[#E5D3B3]/30 group flex flex-col h-full relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3B3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="bg-gradient-to-br from-zinc-800 to-black h-52 rounded-2xl mb-6 overflow-hidden border border-white/5">
                <img src={servicos.imagem} alt={servicos.titulo} className="w-full h-full object-cover" />
            </div>

            <div className="flex-grow">
                <span className="bg-[#E5D3B3]/10 text-[#E5D3B3] text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-[#E5D3B3]/20 font-medium">
                    {servicos.duracao}
                </span>

                <h2 className="text-2xl text-white mt-5 tracking-tight group-hover:text-[#E5D3B3] transition-colors">{servicos.titulo}</h2>
                
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light text-justify">{servicos.descricao}</p>

                <div className="mt-8 space-y-2">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Aplicação</span>
                        <p className="text-xl font-light text-[#E5D3B3]">R$ {servicos.valorAplicacao}</p>
                    </div>
                    <div className="flex justify-between items-baseline pt-1">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Manutenção</span>
                        <p className="text-xl font-light text-[#E5D3B3]">R$ {servicos.valorManutencao}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button className="w-full py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#E5D3B3] transition-all duration-500 cursor-pointer shadow-lg shadow-black/20">
                    Agendar
                </button>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <ul className="space-y-3">
                    {servicos.beneficios.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-[11px] text-gray-500 leading-tight">
                            <CircleCheckBig size={14} className="text-[#E5D3B3] flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}