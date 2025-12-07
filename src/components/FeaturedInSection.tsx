"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedInSection() {
  const features = [
    {
      name: "Voice of Hardware Magazine",
      logo: "/assets/featured/magazine1.webp",
      slug: "voice-of-hardware"
    },
    {
      name: "Wisdom Yellow Pages Magazine",
      logo: "/assets/featured/magazine2.webp",
      slug: "wisdom-yellow-pages"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            As Featured In
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Recognized for Quality & Innovation in the Hardware Industry
          </motion.p>

          {/* Logos Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <Link 
                href={`/featured/${feature.slug}`}
                key={index}
                className="w-full"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-20 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer"
                >
                  <Image
                    src={feature.logo}
                    alt={feature.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Optional: Add a decorative element */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}