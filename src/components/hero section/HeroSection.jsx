import { playfair } from "@/app/layout"
import GridMotion from '@/components/hero section/GridMotion';
import gridItems from '@/data/gridItens';

export default function HeroSection() {
    return(
        <div className="relative w-full h-screen overflow-hidden bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen hidden md:block">
           <GridMotion items={gridItems} gradientColor="black" />
          </div>

            {/*<div 
                className="absolute inset-0 z-10 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-l border-white/5"
                style={{
                clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 45% 100%)'
                }}
            /> */}
            
          <div className="absolute inset-0 bg-gray/50 z-10" />
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        
          <div className="space-y-2">
            <h1 className={`${playfair.className} text-6xl md:text-8xl text-white tracking-[0.15em]`}>Ana Júlia</h1>
            <p className={`${playfair.className} text-lg md:text-xl uppercase tracking-[0.5em] text-gray-400`}>Lash Design</p>
          </div>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Design de cílios e de sobrancelhas profissional. 
            Realçando a sua beleza natural com elegância e precisão.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 cursor-pointer">
              Agende seu Horário
            </button>
            
            <button className="relative w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/10 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-white/20 transition-all hover:scale-105 overflow-hidden cursor-pointer">
  
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-6 left-0 w-full h-16 bg-gradient-to-b from-white/40 to-transparent opacity-30 blur-lg" />
              </div>

              <span className="relative z-10">
                Ver Serviços
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 w-full text-center z-20 opacity-30">
          <p className="text-xs text-white tracking-[0.8em] uppercase">AJ Lash Design</p>
        </div>
      </div>
    )
}