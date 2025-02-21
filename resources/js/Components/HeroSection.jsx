import { motion } from "framer-motion";

const images = [
    "/images/drg.bawa.png",
    "/images/drg.aprillia.png",
    "/images/drg.aulia.png",
    "/images/drg.ghozzy.png",
    "/images/drg.suaeni.png",
];

export default function HeroSection() {
    return (
        <div className="relative bg-white1 py-2 lg:py-2 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Judul */}
                <div className="sm:max-w-lg text-center mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-black1 sm:text-6xl">
                        Meet with our Doctors
                    </h1>
                    <p className="mt-4 text-lg text-black1">
                        Temui dokter profesional kami yang siap memberikan
                        layanan terbaik untuk Anda.
                    </p>
                </div>

                {/* Carousel */}
                <div className="mt-12 lg:mt-16 overflow-hidden">
                    <motion.div
                        className="flex space-x-6 lg:space-x-8"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                    >
                        {[...images, ...images].map((src, index) => (
                            <div
                                key={index}
                                className="w-40 sm:w-52 md:w-60 lg:w-72 h-56 sm:h-64 md:h-72 lg:h-80 rounded-lg shadow-lg overflow-hidden flex-shrink-0 bg-transparent"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-gold1 px-8 py-3 text-center font-medium text-white shadow-md hover:bg-gold2 transition"
                    >
                        Buat Janji Sekarang
                    </a>
                </div>
            </div>
        </div>
    );
}
