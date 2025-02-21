import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
    {
        title: "3KDC Prosthodonti",
        description: "Membersihkan plak dan karang gigi untuk kesehatan mulut.",
        img: "/images/s.prosthodonti.jpg",
        link: "/layanan/pembersihan-gigi",
    },
    {
        title: "3KDC Bedah Mulut",
        description: "Pemutihan gigi profesional untuk senyum cerah.",
        img: "/images/s.bedah-mulut.jpg",
        link: "/layanan/pemutihan-gigi",
    },
    {
        title: "3KDC Perawatan Gigi Anak",
        description: "Pemasangan behel untuk merapikan gigi.",
        img: "/images/s.dental-child.jpg",
        link: "/layanan/perawatan-ortodonti",
    },
    {
        title: "3KDC Konservasi Gigi",
        description: "Pemasangan behel untuk merapikan gigi.",
        img: "/images/s.conservation.jpeg",
        link: "/layanan/perawatan-ortodonti",
    },
    {
        title: "3KDC Orthodonti",
        description: "Pemasangan behel untuk merapikan gigi.",
        img: "/images/s.orthodenti.jpeg",
        link: "/layanan/perawatan-ortodonti",
    },
    {
        title: "3KDC Direct Veneer",
        description: "Pemasangan behel untuk merapikan gigi.",
        img: "/images/s.veneer.jpg",
        link: "/layanan/perawatan-ortodonti",
    },
];

export default function DentalServices() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("dental-services");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="dental-services" className="bg-[#eaeaea] py-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Judul Section */}
                <h1 className="text-4xl font-bold tracking-tight text-black1 sm:text-6xl">
                    Our Services
                </h1>
                <p className="mt-4 mb-10 text-lg text-black1">
                    Klinik kami menyediakan layanan gigi terbaik untuk kesehatan
                    dan estetika gigi Anda.
                </p>

                {/* Desktop Grid View */}
                <div
                    className={`hidden lg:grid grid-cols-3 gap-8 transition-opacity duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transform transition duration-300 hover:scale-105"
                        >
                            <div className="relative w-full h-64">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300"></div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-black1">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile Carousel View */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        navigation={false}
                        className="w-full"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center"
                            >
                                <Link
                                    href={service.link}
                                    className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transform transition duration-300 hover:scale-105 w-80"
                                >
                                    <div className="relative w-full h-64">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-semibold text-black1">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
