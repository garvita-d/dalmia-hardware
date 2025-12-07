import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    {
        id: 1,
        title: "The Ultimate Guide to Choosing the Right Hinges for Your Furniture",
        description: "Hinges are one of the most overlooked yet essential components in furniture design. Learn about different types of hinges, their applications, materials, and installation tips to help you choose the perfect option for your next project.",
        image: "/images/img1.webp",
        slug: "guide-to-hinges"
    },
    {
        id: 2,
        title: "Smart Bed Fittings That Maximize Space in Modern Homes",
        description: "Modern urban homes demand smart, space-saving furniture- and bed fittings play a major role in achieving clutter-free living. This blog explores different types of hydraulic lift-up mechanisms, folding brackets, and under-bed storage systems, along with expert tips on choosing the right fittings based on bed size and weight. Ideal for homeowners and interior designers looking to maximize bedroom storage smartly.",
        image: "/images/img2.webp",
        slug: "smart-bed-fittings"
    },
    {
        id: 3,
        title: "A Designer’s Guide to G, C, and L Gola Profiles",
        description: "Handleless modular kitchens are a top trend in modern interior design, and gola profiles are the key to achieving that sleek, seamless look. This blog explains the difference between G, C, and L profiles, their applications, premium finishes, and how to choose the right style for your kitchen theme. Click to explore how Dalmia Hardware’s premium gola profiles can elevate your next project.",
        image: "/images/img3.webp",
        slug: "c-golas-profiles-guide"
    },
    {
        id: 4,
        title: "T Patti & PVD Patti Finishes That Transform Interiors",
        description: "T Pattis and PVD Pattis have become essential in modern interior design, adding luxury, depth, and clean detailing to wardrobes, wall panels, mirrors, and partitions. This blog explores their applications, premium SS304 PVD material, trending finishes like rose gold, matte black, brass, and chrome, and creative installation ideas for elegant interiors. Click to explore premium T & PVD Patti collections available at Dalmia Hardware.",
        image: "/images/img4.webp",
        slug: "t-patti-guide"
    },
    {
        id: 5,
        title: "Sky Track Systems: The Sleek Way to Install Sliding Doors",
        description: "Sky track systems offer a modern, minimal, and ultra-smooth solution for sliding wardrobes and doors. This blog explains how sky tracks enhance functionality with silent operation, hidden hardware, and space-saving design- perfect for wardrobes, kitchen partitions, and wooden or glass sliding doors. Click to explore why Dalmia Hardware’s sky tracks are a must-have for contemporary interiors.",
        image: "/images/img5.webp",
        slug: "sky-track-guide"
    },
    {
        id: 6,
        title: "Why Every Modular Kitchen Needs Tandem Baskets",
        description: "Tandem baskets are essential in modern modular kitchens for achieving better storage, smooth functionality, and maximum efficiency. This blog explains what tandem baskets are, how they enhance kitchen organization, their advantages like soft-close slides and space-saving design, and the most popular basket types used today. Click to discover why Dalmia Hardware’s tandem baskets are a must-have for every modern kitchen.",
        image: "/images/img6.webp",
        slug: "tandem-basket-guide"
    },
    {
        id: 7,
        title: "Telescopic Channels: The Backbone of Smooth Drawer Systems",
        description: "Telescopic channels ensure smooth, durable, and long-lasting drawer movement- making them essential for every modular kitchen and wardrobe. This blog explains the different types of channels, how to choose the right load capacity and material, and key installation tips to avoid rattling or misalignment. Click to explore premium-quality telescopic channels available at Dalmia Hardware.",
        image: "/images/img7.webp",
        slug: "channel-guide"
    },
    {
        id: 8,
        title: "How to Match Your Hardware Finishes for a Cohesive Interior Look",
        description: "Coordinated hardware finishes elevate the beauty of any modern home. This blog explains how to match gola profiles with PVD pattis, pair hinges and channels in the same tone, and choose trending finishes like gold, gunmetal, and matte black for a seamless, designer interior. Click to discover finish-matched hardware combinations available at Dalmia Hardware.",
        image: "/images/img8.webp",
        slug: "pvd-guide"
    },
    {
        id: 9,
        title: "DIY Guide: How to Install a Telescopic Drawer Channel Like a Pro",
        description: "Installing a telescopic drawer channel is simpler than most people think. This step-by-step DIY guide explains everything- from marking and alignment to mounting and testing- to help you achieve smooth, professional results. Click to learn how to install your telescopic channels with confidence using Dalmia Hardware components.",
        image: "/images/img9.webp",
        slug: "diy-channel-guide"
    },
    {
        id: 10,
        title: "How Quality Hardware Extends Furniture Life by Years",
        description: "Premium hardware significantly increases the strength, durability, and performance of furniture. This blog explains how hinges, channels, bed fittings, and profiles impact longevity, why SS304 materials resist corrosion, and the maintenance habits that keep furniture looking new. Click to learn why investing in quality hardware is essential for long-lasting furniture.",
        image: "/images/img10.webp",
        slug: "quality-guide"
    },
    {
        id: 11,
        title: "Gas Springs in Modular Kitchens: The Secret Behind Effortless Lift-Up Cabinets",
        description: "Gas springs (gas lifts) make overhead kitchen cabinets smoother, safer, and easier to operate. This blog explains how gas springs work, why they’re essential for modern lift-up shutters, the different types available, installation tips, and why choosing high-quality gas springs ensures long-lasting cabinet performance. Click to read how Dalmia Hardware’s premium gas springs upgrade every modular kitchen.",
        image: "/images/img11.webp",
        slug: "gas-spring-guide"
    },
               
];

export default function BlogsPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mb-4 sm:mb-6 text-black">
                    Blogs
                </h1>
                <div className="text-black text-center text-lg sm:text-xl mb-3 sm:mb-4 px-4" id="blog-sub-heading">
                    Hardware Insights & Expert Guides
                </div>
                <div className="text-black text-center max-w-4xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base px-4" id="blog-text">
                    Stay informed with the latest insights, industry updates, and practical strategies designed to help you make better hardware choices. Dive deep into expert guides, proven techniques, and thoughtful analyses that empower your projects with quality hardware solutions.
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {blogPosts.map((post) => (
                        <Link 
                            key={post.id} 
                            href={`/blogs/${post.slug}`}
                            className="bg-stone-100 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group shadow-md hover:shadow-xl"
                        >
                            <div className="relative w-full h-40 sm:h-48">
                                <Image 
                                    alt={post.title} 
                                    className="object-cover group-hover:opacity-90 transition-opacity"
                                    src={post.image}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-black text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}