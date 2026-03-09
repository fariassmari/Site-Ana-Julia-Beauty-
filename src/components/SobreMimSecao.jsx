import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SobreMimSecao() {
    return(
        <section className="w-full bg-[#0a0a0a] text-white py-24 relative overflow-hidden">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E5D3B3]/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center justify-center gap-12 lg:gap-24">
                
                <div className="w-full max-w-sm lg:max-w-md relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#E5D3B3]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                        <img src="/images/Sobremim.jpg" alt="Ana Júlia - Lash Designer" className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                    </div>
                </div>

                <div className="flex-1 space-y-8 text-justify relative z-10">
                    <div className="space-y-3">
                        <span className="text-[#E5D3B3] uppercase tracking-[0.4em] text-sm font-semibold">Sobre mim</span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">Realçando sua beleza natural com elegância</h2>
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                        <p>Olá! Meu nome é Ana Júlia e sou designer de cílios apaixonada pela arte de transformar olhares.</p>
                        <p>Com anos de experiência e constantes especializações, minha missão vai além da estética: é valorizar a identidade de cada cliente, trazendo sofisticação, praticidade e autoestima em cada detalhe.</p>
                    </div>

                    <Link href="/servicos" className="group flex w-fit items-center gap-3 text-[#E5D3B3] font-semibold text-lg hover:text-white transition-colors cursor-pointer">
                        Conheça nossos serviços
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}