import AppLayout from "@/Layouts/AppLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import HeroSection from "@/Components/HeroSection";
import DentalServices from "@/Components/DentalServices";
import Footer from "@/Components/Footer";

export default function Home() {
    const images = [
        "/images/banner1.png",
        "/images/banner2.png",
        "/images/banner3.jpg",
    ];

    return (
        <AppLayout>
            {/* SLIDESHOW */}
            <div className="w-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop
                    effect="fade"
                    speed={1000}
                    className="w-full h-[400px]"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content  */}
            <DentalServices />

            <HeroSection />

            {/* Footer */}
            <Footer />
        </AppLayout>
    );
}
