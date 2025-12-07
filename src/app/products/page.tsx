"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const categories = [
  {
    name: "Hinges",
    products: [
      {
        name: "Regular Hinges 0,8 Crank MS",
      },
      {
        name: "Auto Hinges Slide On MS 0,8 Crank ",
      },
      {
        name: "Auto Hinges Slide On SS 0,8 Crank ",
      },
      {
        name: "Auto Hinges Clip On MS 0,8 Crank",
      },
      {
        name: "Auto Hinges Clip On SS 0,8 Crank",
      },
      {
        name: "Auto Hinges 3D MS 0,8 Crank",
      },
      {
        name: "Auto Hinges 3D SS 0,8 Crank",
      },
      {
        name: "Auto Hinges Regular 165 Crank MS",
      },
    ],
  },
  {
    name: "Profiles",
    products: [
      {
        name: "G Profile",
        colors: [
          "Chrome",
          "Rosegold",
          "Bronze",
          "Brush",
          "Gold",
          "Grey",
          "Z-Black",
        ],
      },
    ],
  },
  {
    name: "Golas",
    products: [
      {
        name: "C Gola",
        colors: ["Chrome", "Rosegold", "SS Brush", "Grey", "Z-Black"],
      },
      {
        name: "L Gola",
        colors: ["Chrome", "Rosegold", "SS Brush", "Grey", "Z-Black"],
      },
    ],
  },
  {
    name: "T Patti",
    products: [
      {
        name: "PVD T Patti 304 Grade 6mm",
        colors: ["Mirror Finish", "Chrome", "Rosegold", "Glod", "Black"],
      },
      {
        name: "PVD T Patti 304 Grade 8mm",
        colors: ["Mirror Finish", "Chrome", "Rosegold", "Glod", "Black"],
      },
      {
        name: "PVD T Patti 304 Grade 12mm",
        colors: ["Mirror Finish", "Chrome", "Rosegold", "Glod", "Black"],
      },
      {
        name: "PVD T Patti 304 Grade 19mm",
        colors: ["Mirror Finish", "Chrome", "Rosegold", "Glod", "Black"],
      },
      {
        name: "PVD T Patti 304 Grade 25mm",
        colors: ["Mirror Finish", "Chrome", "Rosegold", "Glod", "Black"],
      },
    ],
  },
  {
    name: "Gas Springs",
    products: [
      {
        name: "Gas Spring 9 inch 5kg",
        color: ["Silver"],
      },
      {
        name: "Gas Spring 9 inch 10kg",
        color: ["Silver"],
      },
      {
        name: "Gas Spring 9 inch 15kg",
        color: ["Silver"],
      },
      {
        name: "Gas Spring 9 inch 20kg",
        color: ["Silver"],
      },
      {
        name: "Gas Spring 9 inch 25kg",
        color: ["Silver"],
      },
      {
        name: "Gas Spring 9 inch 30kg",
        color: ["Silver"],
      },
    ],
  },
  {
    name: "Others",
    products: [
      {
        name: "Telescopic",
      },
      {
        name: "Sky Track Wheel",
      },
      {
        name: "Bed Fitting",
      },
      {
        name: "Slim Tandem Basket",
      },
      {
        name: "Sky Track",
      },
    ],
  },
];

// Separate component that uses useSearchParams
function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(categories[0].name);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    
    // If category parameter exists and is valid, set it as active tab
    if (categoryParam) {
      const categoryExists = categories.find(
        (cat) => cat.name.toLowerCase() === categoryParam.toLowerCase()
      );
      if (categoryExists) {
        setActiveTab(categoryExists.name);
      }
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto py-16 px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Our Products
      </motion.h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex justify-center mb-16 sm:mb-8 flex-wrap gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className="whitespace-nowrap"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      {"colors" in product && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">
                            Available colors:
                          </p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {product.colors.map((color) => (
                              <span
                                key={color}
                                className="text-sm bg-gray-100 px-2 py-1 rounded"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {"color" in product && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">
                            Available colors:
                          </p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {product.color.map((c) => (
                              <span
                                key={c}
                                className="text-sm bg-gray-100 px-2 py-1 rounded"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// Main export with Suspense wrapper
export default function Products() {
  return (
    <Suspense fallback={
      <div className="container mx-auto py-16 px-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}