"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { History, Award, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <History className="h-16 w-16 text-black flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600">
                  Founded by Mr. Naveen Dalmia, our company has grown from a
                  small family-run shop to one of the most trusted names in
                  hardware supplies in India.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <Award className="h-16 w-16 text-black flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Brand</h2>
                <p className="text-gray-600">
                  Dalmia Hardware is synonymous with quality, reliability, and
                  exceptional customer service. We pride ourselves on offering a
                  wide range of hardware products, from door handles and hinges
                  to power tools and plumbing supplies. Our commitment to
                  sourcing the best products from around the world has made us
                  the go-to destination.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <Lightbulb className="h-16 w-16 text-black flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading hardware solutions provider in India, known
                  for our comprehensive product range, innovative offerings, and
                  unparalleled customer experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <Target className="h-16 w-16 text-black flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower our customers with high-quality hardware solutions,
                  expert advice, and excellent service, contributing to the
                  success of their projects and the improvement of their living
                  spaces.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
