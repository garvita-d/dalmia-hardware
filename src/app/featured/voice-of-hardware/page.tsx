"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Calendar, Award, Star } from "lucide-react";

export default function VoiceOfHardwarePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <Link 
          href="/" 
          className="text-blue-400 hover:text-blue-300 mb-6 inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Magazine Feature Image */}
          <div className="relative w-half max-w-2xl mx-auto h-auto mb-8 rounded-lg overflow-hidden bg-gray-50 border-2 border-gray-200 shadow-lg">
            <Image
              src="/assets/featured/magazine3.webp"
              alt="Dalmia Hardware Featured in Voice of Hardware Magazine"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured in Voice of Hardware Magazine
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Featured in 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} />
              <span>Industry Recognition</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-yellow-500 text-yellow-500" />
              <span>Dealers & Distributors Spotlight</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About Voice of Hardware Magazine
              </h2>
              <p className="leading-relaxed">
                Voice of Hardware is India&apos;s premier industry publication covering the latest trends, innovations, 
                and developments in the hardware and construction materials sector. The magazine reaches thousands 
                of industry professionals including manufacturers, distributors, retailers, and contractors across the nation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Dalmia Hardware&apos;s Feature
              </h2>
              <p className="leading-relaxed mb-4">
                Dalmia Hardware was prominently featured in Voice of Hardware Magazine with a comprehensive showcase 
                of our complete product range and business philosophy. Our feature highlighted:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">• <strong>Premium Auto Hinges:</strong> SS304 grade stainless steel hinges with slide-on, clip-on, and 3D adjustment options</li>
                <li className="leading-relaxed">• <strong>Gas Springs (Gas Pumps):</strong> High-quality lift systems for overhead and loft cabinets</li>
                <li className="leading-relaxed">• <strong>Profile Systems:</strong> Complete range including G Profile, J Profile, L&C Gola Profile, and aluminum T-Patti</li>
                <li className="leading-relaxed">• <strong>Kitchen Hardware:</strong> Slim tandem box systems, telescopic channels, and PVD T-Patti</li>
                <li className="leading-relaxed">• <strong>Quality Assurance:</strong> Quality...You can trust - our commitment to excellence</li>
                <li className="leading-relaxed">• <strong>Dealer Network:</strong> Active solicitation for dealers and distributors nationwide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Product Showcase
              </h2>
              <p className="leading-relaxed mb-4">
                The magazine feature showcased our diverse product portfolio through high-quality imagery:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Premium Hinges</h3>
                  <p className="text-sm text-gray-700">SS304 auto hinges with superior finish and durability, perfect for modular kitchens and premium furniture.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Profile Systems</h3>
                  <p className="text-sm text-gray-700">Multiple profile options in various finishes - Chrome, Black, Gold, and Wooden effects for handleless kitchen designs.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Aluminum Sections</h3>
                  <p className="text-sm text-gray-700">Precision-engineered aluminum profiles for modern kitchen and furniture applications.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Drawer Systems</h3>
                  <p className="text-sm text-gray-700">Smooth-operating tandem box systems and telescopic channels for effortless drawer movement.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Industry Recognition & Trust
              </h2>
              <p className="leading-relaxed">
                This feature in Voice of Hardware Magazine reinforces our position as a trusted supplier of premium 
                hardware solutions. Being recognized by India, and a leading hardware publication validates our efforts in 
                bringing world-class products to carpenters, contractors, interior designers, and furniture manufacturers 
                across the country.
              </p>
            </section>

            <section className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Quality...You can trust.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our tagline represents more than just words - its a promise to every customer. From SS304 grade materials 
                to precision engineering, every Dalmia Hardware product is designed to deliver lasting performance and 
                reliability. This feature in Voice of Hardware Magazine showcases our commitment to maintaining the highest 
                standards in the industry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Dealers & Distributors Welcome
              </h2>
              <p className="leading-relaxed mb-4">
                As featured in the magazine, we actively welcome dealers and distributors enquiries. Join our growing 
                network of partners across India and offer your customers:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">• Premium quality hardware with consistent performance</li>
                <li className="leading-relaxed">• Competitive pricing for bulk orders</li>
                <li className="leading-relaxed">• Comprehensive product range for one-stop sourcing</li>
                <li className="leading-relaxed">• Reliable delivery and customer support</li>
                <li className="leading-relaxed">• Industry-recognized brand trusted by professionals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="leading-relaxed mb-2">
                  <strong>WhatsApp:</strong> <a href="https://wa.me/918121525466" className="text-green-600 hover:text-green-700">+91 8121525466</a>
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>Email:</strong> <a href="mailto:dalmiahardware@gmail.com" className="text-blue-600 hover:text-blue-700">dalmiahardware@gmail.com</a>
                </p>
                <p className="leading-relaxed">
                  <strong>Social Media:</strong> Follow us on Instagram and Facebook for updates
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What This Means for You
              </h2>
              <p className="leading-relaxed">
                Whether you are a carpenter seeking reliable hinges for kitchen installations, a contractor sourcing 
                bulk hardware for multiple projects, an interior designer specifying premium fittings, or a dealer 
                looking to partner with a trusted brand - our feature in Voice of Hardware Magazine demonstrates the 
                quality, range, and reliability you can expect from Dalmia Hardware.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gray-100 rounded-lg shadow-xl text-black">
            <h3 className="text-2xl font-bold mb-3">
              Experience Industry-Recognized Quality
            </h3>
            <p className="text-black-50 mb-6 text-lg">
              Discover why industry leaders and professionals across India trust Dalmia Hardware for their premium hardware needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-md"
              >
                View Products
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 bg-transparent text-gray border-2 border-gray-300 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Become a Dealer
              </Link>
              <a 
                href="https://wa.me/918121525466"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}