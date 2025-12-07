"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const allProducts = [
  { id: 1, name: "Regular Hinges 0,8 Crank MS", category: "Hinges" },
  { id: 2, name: "Auto Hinges Slide On MS 0,8 Crank ", category: "Hinges" },
  { id: 3, name: "Auto Hinges Slide On SS 0,8 Crank ", category: "Hinges" },
  { id: 4, name: "Auto Hinges Clip On MS 0,8 Crank", category: "Hinges" },
  { id: 5, name: "Auto Hinges Clip On SS 0,8 Crank", category: "Hinges" },
  { id: 6, name: "Auto Hinges 3D MS 0,8 Crank", category: "Hinges" },
  { id: 7, name: "Auto Hinges 3D SS 0,8 Crank", category: "Hinges" },
  { id: 8, name: "Auto Hinges Regular 165 Crank MS", category: "Hinges" },
  { id: 9, name: "G-Profile", category: "Profiles" },
  { id: 10, name: "C-Gola", category: "Golas" },
  { id: 11, name: "L-Gola", category: "Golas" },
  { id: 12, name: "PVD T Patti 304 Grade 6mm", category: "T Patti" },
  { id: 13, name: "PVD T Patti 304 Grade 8mm", category: "T Patti" },
  { id: 14, name: "PVD T Patti 304 Grade 12mm", category: "T Patti" },
  { id: 15, name: "PVD T Patti 304 Grade 19mm", category: "T Patti" },
  { id: 16, name: "PVD T Patti 304 Grade 25mm", category: "T Patti" },
  { id: 17, name: "Gas Spring 9 inch 5kg", category: "Gas Springs" },
  { id: 18, name: "Gas Spring 9 inch 10kg", category: "Gas Springs" },
  { id: 19, name: "Gas Spring 9 inch 15kg", category: "Gas Springs" },
  { id: 20, name: "Gas Spring 9 inch 20kg", category: "Gas Springs" },
  { id: 21, name: "Gas Spring 9 inch 25kg", category: "Gas Springs" },
  { id: 22, name: "Gas Spring 9 inch 30kg", category: "Gas Springs" },
  { id: 23, name: "Telescopic Channel", category: "Others" },
  { id: 24, name: "Sky Track Wheel", category: "Others" },
  { id: 25, name: "Bed Fitting", category: "Others" },
  { id: 26, name: "Slim Tandem Basket", category: "Others" },
  { id: 27, name: "Sky Track", category: "Others" },
];

export default function Footer() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<typeof allProducts>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set current year only on client side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDropdown(true);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = (category: string) => {
    // Navigate to products page with category parameter
    router.push(`/products?category=${encodeURIComponent(category)}`);
    setSearchQuery("");
    setShowDropdown(false);
  };

  const handleViewAll = () => {
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setShowDropdown(false);
    }
  };

  return (
    <>
      <footer className="w-full bg-white text-black">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-4">
          <div className="py-8 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12">
            {/* LOGO AND DESCRIPTION */}
            <div className="flex flex-col items-center lg:items-start max-w-xs">
              <Image
                src="/assets/logos/dh-full-logo.svg"
                alt="Dalmia Hardware"
                width={180}
                height={60}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity mb-3"
              />
              <p className="text-sm text-neutral-400 text-center lg:text-left">
                Discover a complete range of trusted hardware solutions designed to help you build with confidence, precision, and long-lasting quality.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2 items-center lg:items-start">
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer"
                >
                  Products
                </Link>
                <Link
                  href="/blogs"
                  className="text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer"
                >
                  Blogs
                </Link>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* SEARCH PRODUCTS */}
            <div className="flex flex-col items-center lg:items-start w-full max-w-xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Search Products</h3>
              <div className="w-full relative" ref={dropdownRef}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                    className="w-full px-4 py-2 pr-10 text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                  />
                  <button
                    onClick={handleViewAll}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                    aria-label="Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dropdown */}
                {showDropdown && filteredProducts.length > 0 && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-neutral-300 rounded-md shadow-lg max-h-64 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.category)}
                        className="w-full px-4 py-3 text-left hover:bg-neutral-100 transition-colors border-b border-neutral-200 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-black">{product.name}</div>
                        <div className="text-xs text-neutral-500 mt-1">{product.category}</div>
                      </button>
                    ))}
                    
                    {filteredProducts.length > 0 && (
                      <button
                        onClick={handleViewAll}
                        className="w-full px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors text-center"
                      >
                        View all results →
                      </button>
                    )}
                  </div>
                )}

                {/* No results message */}
                {showDropdown && searchQuery.trim() && filteredProducts.length === 0 && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-neutral-300 rounded-md shadow-lg p-4">
                    <p className="text-sm text-neutral-500 text-center">No products found</p>
                  </div>
                )}

                <p className="text-xs text-neutral-400 mt-2 text-center lg:text-left">
                  Type to see suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="text-black bg-white py-1 border-t">
        <div className="text-center">
          <p>
            &copy; {currentYear} Dalmia Hardware. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}