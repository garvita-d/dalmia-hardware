"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Calendar, Award, Building2 } from "lucide-react";

export default function WisdomYellowPagesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
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
                        src="/assets/featured/magazine4.webp"
                        alt="Dalmia Hardware Featured in Wisdom Yellow Pages Magazine"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wisdom Yellow Pages Magazine
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Listed in 2024 Edition</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={18} />
              <span>Verified Business Directory</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} />
              <span>Trusted Supplier</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About Wisdom Yellow Pages
              </h2>
              <p className="leading-relaxed">
                Wisdom Yellow Pages is one of India&apos;s most comprehensive business directories, 
                connecting buyers and suppliers across various industries. With a focus on verified 
                businesses and quality service providers, the directory serves as a trusted resource 
                for professionals seeking reliable partners in their respective fields.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Listing
              </h2>
              <p className="leading-relaxed mb-4">
                Dalmia Hardware is proud to be listed in Wisdom Yellow Pages as a verified supplier 
                of premium furniture hardware and construction materials. Our listing showcases:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">• Complete product range including hinges, gas springs, and sliding systems</li>
                <li className="leading-relaxed">• SS304 grade stainless steel hardware specialization</li>
                <li className="leading-relaxed">• Serving carpenters, contractors, and furniture manufacturers</li>
                <li className="leading-relaxed">• Nationwide delivery and bulk order capabilities</li>
                <li className="leading-relaxed">• Commitment to quality and timely service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Verified Business Status
              </h2>
              <p className="leading-relaxed">
                Being listed in Wisdom Yellow Pages means our business has undergone verification 
                processes that confirm our legitimacy, reliability, and commitment to customer satisfaction. 
                This verification gives our customers additional confidence when choosing Dalmia Hardware 
                for their hardware needs.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
              <p className="text-lg font-medium text-gray-900 mb-2">
                Why Choose a Verified Supplier?
              </p>
              <p className="text-gray-600">
                Verified listings in Wisdom Yellow Pages ensure you&apos;re working with legitimate businesses 
                that meet quality standards and maintain professional practices. Our verified status 
                demonstrates our commitment to transparency and excellence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Connect with a Trusted Partner
              </h2>
              <p className="leading-relaxed mb-4">
                Our presence in Wisdom Yellow Pages makes it easier for industry professionals to find 
                and connect with us. Whether you need:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="leading-relaxed">• Premium hinges for modular kitchens</li>
                <li className="leading-relaxed">• Gas springs for lift-up cabinets</li>
                <li className="leading-relaxed">• Sliding wheels and drawer systems</li>
                <li className="leading-relaxed">• Bulk hardware supplies for projects</li>
              </ul>
              <p className="leading-relaxed">
                You can trust that you&apos;re working with a verified, reliable supplier committed to your success.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Industry Network and Reach
              </h2>
              <p className="leading-relaxed">
                Through Wisdom Yellow Pages, we&apos;ve expanded our network and connected with numerous 
                professionals across India. This platform has enabled us to serve more customers and 
                build lasting relationships with carpenters, interior designers, contractors, and 
                furniture manufacturers nationwide.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Work with a Verified Supplier
            </h3>
            <p className="text-gray-700 mb-4">
              Join thousands of satisfied customers who trust Dalmia Hardware for their premium hardware needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Browse Products
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-3 bg-white text-gray-600 border-2 border-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}