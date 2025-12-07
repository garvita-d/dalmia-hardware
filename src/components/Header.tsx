"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "+918121525466";
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in your hardware products."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/logos/dh-short-logo.svg" alt="Logo" width={60} height={0} />
          <Image src="/assets/logos/dh-full-logo.svg" alt="Logo" width={150} height={40} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/products">Products</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blogs">Blogs</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white border-b"
          >
            <nav className="flex flex-col p-4 space-y-2">
              <Button variant="ghost" asChild onClick={toggleMenu}>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild onClick={toggleMenu}>
                <Link href="/products">Products</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/blogs">Blogs</Link>
              </Button>
              <Button variant="ghost" asChild onClick={toggleMenu}>
                <Link href="/blogs">Blogs</Link>
              </Button>
              <Button variant="ghost" asChild onClick={toggleMenu}>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild onClick={toggleMenu}>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white w-full"
                asChild
                onClick={toggleMenu}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}