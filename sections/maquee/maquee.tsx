"use client"

import { motion } from "framer-motion"

const Logos = ["BYREDO", "BOTTEGA", "LORO PIANA", "COMMON PROJECTS", "JACQUEMUS", "HERMÈS"]

export default function Marquee() {
  return (
    <div className="overflow-hidden w-full py-6 bg-(--colorNav)">
      <motion.div
        className="flex gap-10 whitespace-nowrap will-change-transform"
        // Move do início até o tamanho exato de um grupo de logos
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          duration: 20, // Ajuste conforme necessário
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* Duplicamos os logos para garantir que não haja buraco na transição */}
        {[...Logos, ...Logos].map((logo, index) => (
          <div
            key={index}
            className="text-(--colorparagrafo) text-[1rem] md:text-[1.5rem] shrink-0 font-bold"
          >
            • {logo}
          </div>
        ))}
      </motion.div>
    </div>
  )
}