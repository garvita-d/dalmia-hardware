"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+918121525466";
  const message = "Hello, I'm interested in your hardware products.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Button
        className="rounded-full bg-green-500 hover:bg-green-600 text-white"
        size="lg"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          <span className="hidden sm:inline">Chat with Us</span>
        </a>
      </Button>
    </motion.div>
  );
}
