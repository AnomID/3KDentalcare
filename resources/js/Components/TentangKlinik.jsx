import { motion } from "framer-motion";
import Button from "./Button";
export default function TentangKlinik() {
    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-[#1D1912] to-[#BB8525] text-white overflow-hidden">
            {/* Background Wave */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 left-0"
                >
                    <path
                        fill="#D2A63C"
                        fillOpacity="1"
                        d="M0,128L60,128C120,128,240,128,360,160C480,192,600,256,720,272C840,288,960,256,1080,213.3C1200,171,1320,117,1380,90.7L1440,64V320H0Z"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Gambar */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }} // Animasi aktif setiap kali di-scroll
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/images/3kdc.png"
                        alt="Dental Clinic"
                        className="w-full max-w-[300px] rounded-3xl shadow-lg transform hover:scale-105 transition duration-500 items-center"
                    />
                </motion.div>

                {/* Teks */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }} // Animasi selalu aktif setiap kali muncul
                    className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 px-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                        Tentang{" "}
                        <span className="text-[#EECD5C]">3K Dental Care</span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-[#F3F3E6]">
                        Kami adalah klinik gigi modern dengan layanan
                        profesional, teknologi mutakhir, dan komitmen penuh
                        untuk kesehatan gigi Anda.
                    </p>

                    {/* Layanan List */}
                    <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                        {[
                            { icon: "🦷", text: "Perawatan Gigi Umum" },
                            { icon: "✨", text: "Whitening & Veneer" },
                            { icon: "🔧", text: "Pemasangan Behel" },
                            { icon: "👨‍⚕️", text: "Konsultasi Profesional" },
                        ].map((item, index) => (
                            <motion.div
                                viewport={{ once: false, amount: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition"
                            >
                                <span className="text-xl">{item.icon}</span>{" "}
                                {item.text}
                            </motion.div>
                        ))}
                        <div className="flex flex-col items-left gap-2 mt-5 z-10">
                            <Button size="md" href="/">
                                {" "}
                                Tentang Klinik Kami{" "}
                            </Button>
                        </div>
                    </div>

                    {/* Tombol Aksi */}
                </motion.div>
            </div>
        </section>
    );
}
