import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Contact() {
    const { theme } = useTheme();

    return (
        <div
            className="flex flex-col items-center justify-center gap-8 py-12"
            id="contact">
            <h1 className="text-4xl font-bold text-center">Let's Connect</h1>
            <div className="flex flex-row gap-8">
                <motion.a
                    href="https://www.linkedin.com/in/blake-brown03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative">
                    <div className="absolute inset-0 transition-all duration-300" />
                    <Image
                        src="/LinkedIn.svg"
                        alt="LinkedIn"
                        width={80}
                        height={80}
                        className="relative transition-transform duration-300 group-hover:brightness-110"
                    />
                </motion.a>
                <motion.a
                    href="https://github.com/BlakeBrown03"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative">
                    <div className="absolute inset-0 transition-all duration-300" />
                    <Image
                        src="/GitHub.svg"
                        alt="GitHub"
                        width={80}
                        height={80}
                        className="relative transition-transform duration-300 group-hover:brightness-110 rounded-full"
                    />
                </motion.a>
                <motion.a
                    href="https://x.com/blakebrown_03"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative">
                    <div className="absolute inset-0 transition-all duration-300" />
                    <Image
                        src={theme === "dark" ? "/x_dark.svg" : "/x_light.svg"}
                        alt="X (Twitter)"
                        width={80}
                        height={80}
                        className="relative transition-transform duration-300 group-hover:brightness-110"
                    />
                </motion.a>
            </div>
        </div>
    );
}
