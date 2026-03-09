import diferenciais from "@/data/cardEspecializacao";

export default function CardEspecializacao() {
    return (
        <section className="w-full bg-[#0d0d0d] border-y border-white/[0.03] text-white py-24 relative overflow-hidden ">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl ms:text-5xl font-serif trancking-tight">
                        Porque escolher <span className="text-[#E5D3B3]">Ana Júlia?</span>
                    </h2>
                    <p className="text-gray-500 uppercase tracking-[0.3em] text-sm font-light">Excelência em cada detalhe</p>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        diferenciais.map((item, index) =>(
                            <div key={index} className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500">
                                <div className="relative z-10 space-y-4">
                                    <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-[#E5D3B3]/30 transition-all duration-500">
                                        {item.icone}
                                    </div>
                                    <h3 className="text-xl font-semibold tracking-wide text-white/90">{item.titulo}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm">{item.descricao}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}