import { CircleCheckBig } from 'lucide-react';

export default function ServicosCards ({ servicos }) {
    return (
        <div className="bg-zinc-300 rounded-2xl p-6 ">
            <div className="bg-black-100 h-32 rounded-2xl mb-4"></div>
            <span className="bg-yellow-600/50 text-xs text-yellow-800 px-3 py-1 rounded-full">
                {servicos.duracao}
            </span>
            <h2 className="text-xl font-semibold mt-3">{servicos.titulo}</h2>
            <p className="text-gray-700 text-sm mt-2 text-justify">{servicos.descricao}</p>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mt-3">Aplicação: </h3>
                <p className="text-2xl font-bold text-yellow-600"> R$ {servicos.valorAplicacao},00</p>
                <h3 className="text-lg font-semibold mt-3">Manutenção: </h3>
                <p className="text-2xl font-bold text-yellow-600">R$ {servicos.valorManutencao},00</p>
            </div>

            <button className="bg-zinc-700 text-white w-full py-2 rounded-full mt-4 cursor-pointer hover:bg-yellow-600/50 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out">Agende agora</button>

            <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            {/*<hr className="my-4 border-gray-400" /> */}

            <ul className="mt-4 space-y-2">
                {servicos.beneficios.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                        <CircleCheckBig size={16} className="text-yellow-600" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
