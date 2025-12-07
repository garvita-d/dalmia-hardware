"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  PenToolIcon as Tool,
  Shield,
  Truck,
  Wrench,
  WrenchIcon as Screwdriver,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import { FocusCards } from "@/components/ui/focus-cards";
import Image from 'next/image';

const products = [
  {
    title: "Hinges",
    src: "/assets/hinges.jpg",
  },
  {
    title: "Channels",
    src: "/assets/telescopic-channel.jpg",
  },
  {
    title: "Profiles",
    src: "/assets/g-profile.jpg",
  },
  {
    title: "Springs",
    src: "/assets/gas-spring.jpg",
  },
  {
    title: "Bed Fitting",
    src: "/assets/bed-fitting.jpg",
  },
  {
    title: "More Coming Soon",
    src: "/assets/coming-soon.jpg",
  },
];

export default function Home() {
  const whatsappNumber = "+918121525466";
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in your hardware products."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/door-opening.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Quality Hardware
            <br />
            for Every Need
          </h1>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 max-w-2xl">
            Discover our extensive collection of hardware solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="border-white/20 bg-white/10 hover:bg-white/20 w-full sm:w-auto"
              asChild
            >
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 hover:bg-white/20 w-full sm:w-auto"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Contact Us
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* <section className="bg-gradient-to-r from-[#8b8b8b] to-[#a3a3a3] py-12 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Premium Quality Hardware
            </h2>
            <p className="text-xl mb-6">
              Discover our extensive collection of professional-grade tools and
              materials
            </p>
          </motion.div>
        </div>
      </section> */}

      <section id="products" className="py-16 bg-neutral-100">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-neutral-600">
            Explore our carefully curated selection of premium hardware
          </p>
        </div>
        <div className="container mx-auto px-8">
          <FocusCards cards={products} />
          <div className="flex justify-end mt-8">
            <Link
              className="flex justify-center items-center gap-1 hover:underline"
              href="/products"
            >
              All Products <ArrowRight size={15} />{" "}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tools & Equipment",
                icon: Wrench,
                description: "Professional-grade tools for every job",
              },
              {
                title: "Fasteners & Hardware",
                icon: Screwdriver,
                description: "High-quality screws, nails, and fittings",
              },
              {
                title: "Plumbing & Electrical",
                icon: Tool,
                description: "Complete solutions for home improvements",
              },
              {
                title: "Paint & Supplies",
                icon: Paintbrush,
                description: "Premium paints and painting accessories",
              },
              {
                title: "Safety & Workwear",
                icon: Shield,
                description: "Protective gear for all work environments",
              },
              {
                title: "Garden & Outdoor",
                icon: Truck,
                description: "Everything you need for outdoor projects",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-100 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <category.icon className="h-12 w-12 mb-4 text-black" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-neutral-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-8 text-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Tools",
                description:
                  "High-quality tools for professionals and DIY enthusiasts",
                icon: Tool,
              },
              {
                title: "Quality Guarantee",
                description: "All products backed by our quality assurance",
                icon: Shield,
              },
              {
                title: "Fast Delivery",
                description: "Quick and reliable delivery to your location",
                icon: Truck,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-100 backdrop-blur-sm rounded-xl p-6"
              >
                <item.icon className="h-12 w-12 mb-4" />
                <h3 className="text-2xl text-black font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-black">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Consultation",
                description:
                  "Get personalized advice from our hardware specialists",
              },
              {
                title: "Custom Orders",
                description:
                  "We can source specific products for your unique needs",
              },
              {
                title: "Installation Services",
                description:
                  "Professional installation for select hardware products",
              },
              {
                title: "Tool Rental",
                description: "Rent high-end tools for your short-term projects",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <Image className="mx-auto" src="/assets/logos/dh-short-logo.svg" alt="Dalmia Hardware Short Logo" width={300} height={100} />
          <h2 className="text-4xl font-bold mb-8">Need Expert Advice?</h2>
          <p className="text-xl mb-8 text-neutral-600">
            Our team is ready to assist you with any hardware-related questions
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Chat with Us on
              WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
