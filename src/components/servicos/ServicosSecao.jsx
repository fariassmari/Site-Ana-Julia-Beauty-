"use client";

import servicos from "../../data/servicos";
import ServicosCards from "@/components/servicos/ServicosCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ServicosSecao(){
    const swiperRef = useRef(null);
    return (
        <section className="py-16 px-10">
            <div  className="max-w-[1100px] mx-auto relative px-12">
                 <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 transition cursor-pointer flex items-center justify-center">
                    <ArrowLeft size={16} />
                </button>

                {/* Botão próximo */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 transition cursor-pointer flex items-center justify-center">
                    <ArrowRight size={16} />
                </button>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1.1} 
                    centeredSlides={false}
                    loop={true}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    speed={600}
                    breakpoints={{
                        768: {
                        slidesPerView: 1.5,
                        },
                        1024: {
                        slidesPerView: 3.5,
                        centeredSlides: false,
                        },
                    }}
                >
                    {servicos.map((servico) => (
                        <SwiperSlide key={servico.id}>
                            <ServicosCards servicos={servico} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}