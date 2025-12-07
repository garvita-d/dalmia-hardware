"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Contact Us
      </motion.h1>
      <div className="space-y-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <iframe
                src="https://app.youform.com/forms/yegzaaog"
                loading="lazy"
                width="100%"
                height="700"
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:hello@dalmiahardware.com">
                  hello@dalmiahardware.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+918121525466">+91 81215 25466</a>
              </div>
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <p>
                  2249, Kinari Bazar, Dariba Kalan, Chandni Chowk, New Delhi,
                  Delhi 110006
                </p>
              </div> */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61555283650331&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/dalmiahardware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1743835604!2d77.22048911508346!3d28.668481682403705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683f9b0b7%3A0x2d1999ee9a71fce!2sDalmia Hardware!5e0!3m2!1sen!2sin!4v1672901234567!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div> */}
      </div>
    </div>
  );
}
