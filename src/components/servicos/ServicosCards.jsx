import { CircleCheckBig } from 'lucide-react';

export default function ServicosCards ({ servicos }) {
    return (
        // Mudamos para um fundo escuro com borda sutil, combinando com a Navbar
        <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 transition-all hover:border-yellow-600/30 group">
            {/* Placeholder da Imagem com gradiente */}
            <div className="bg-gradient-to-br from-zinc-800 to-black h-48 rounded-xl mb-6 overflow-hidden">
                {/* Aqui futuramente você coloca a <Image /> */}
            </div>

            <span className="bg-yellow-600/10 text-yellow-500 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-yellow-600/20">
                {servicos.duracao}
            </span>

            {/* Usando a Playfair se possível no título */}
            <h2 className="text-2xl text-white font-semibold mt-4 tracking-tight">{servicos.titulo}</h2>
            
            <p className="text-gray-400 text-sm mt-3 leading-relaxed text-justify">
                {servicos.descricao}
            </p>

            <div className="mt-6 space-y-1">
                <div className="flex justify-between items-end">
                    <span className="text-xs text-gray-500 uppercase">Aplicação</span>
                    <p className="text-xl font-light text-yellow-500">R$ {servicos.valorAplicacao}</p>
                </div>
                <div className="flex justify-between items-end">
                    <span className="text-xs text-gray-500 uppercase">Manutenção</span>
                    <p className="text-xl font-light text-yellow-500">R$ {servicos.valorManutencao}</p>
                </div>
            </div>

            {/* Botão combinando com o estilo da Hero */}
            <button className="w-full py-3 rounded-full mt-6 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-yellow-600 hover:text-white transition-all duration-500 cursor-pointer">
                Agendar
            </button>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <ul className="space-y-3">
                {servicos.beneficios.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs text-gray-400">
                        <CircleCheckBig size={14} className="text-yellow-600" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}