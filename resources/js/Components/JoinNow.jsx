import { motion } from "framer-motion";
import Button from "./Button";

export default function JoinNow() {
    return (
        <section className="relative w-full py-20 px-6 text-white text-center overflow-hidden bg-gradient-to-r from-[#1D1912] to-[#D2A63C]">
            {/* Wave Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block h-[120px] w-full"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,49.98C150,99.98,350,-49.98,600,49.98C850,149.98,1050,-49.98,1200,49.98L1200,120L0,120Z"
                        className="fill-[#F3F3E6]/20"
                    ></path>
                </svg>
            </div>

            {/* Konten */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl md:text-5xl font-bold relative drop-shadow-lg"
            >
                Ayo Senyum Lebih Cerah! 🌟
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-4 text-lg text-[#F3F3E6] max-w-2xl mx-auto relative leading-relaxed"
            >
                Bergabunglah dengan{" "}
                <span className="text-[#EECD5C] font-semibold">
                    3K Dental Care
                </span>{" "}
                dan dapatkan perawatan gigi terbaik!
            </motion.p>

            {/* Tombol Join Now */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-8 relative"
            >
                <div className="flex flex-col items-left gap-2 mt-5 z-10">
                    <Button size="lg" href="/">
                        {" "}
                        Mulai Bergabung{" "}
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
