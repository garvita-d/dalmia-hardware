import Link from "next/link";

export default function DIYTelescopicChannelBlog() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <Link 
                    href="/blogs" 
                    className="text-blue-400 hover:text-blue-300 mb-6 inline-block transition-colors"
                >
                    ← Back to Blogs
                </Link>
                
                <h1 className="text-2xl md:text-3xl text-black mb-6">
                    DIY Guide: How to Install a Telescopic Drawer Channel Like a Pro
                </h1>

                <div className="text-black-300 space-y-8">
                    <section>
                        <p className="leading-relaxed">
                            If you enjoy DIY projects, installing a telescopic drawer channel is one of the easiest and most satisfying upgrades you can do. With the right tools and proper alignment, you can achieve smooth, professional-quality drawer movement at home.
                        </p>
                        <p className="leading-relaxed mt-4">
                            This guide walks you through the entire process- perfect for beginners and DIY enthusiasts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-black mb-4">Why DIY Installation Is Easier Than It Seems</h2>
                        <p className="leading-relaxed mb-4">
                            Unlike older slide systems, telescopic channels are:
                        </p>
                        <ul className="space-y-2 ml-6">
                            <li className="leading-relaxed">• Simple to mount</li>
                            <li className="leading-relaxed">• Fully adjustable</li>
                            <li className="leading-relaxed">• Designed for smooth alignment</li>
                            <li className="leading-relaxed">• Straightforward even for first-time users</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            With basic tools and accuracy, you can install them like a pro.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-black mb-4">Tools Required</h2>
                        <p className="leading-relaxed mb-2">
                            You only need:
                        </p>
                        <ul className="space-y-2 ml-6">
                            <li className="leading-relaxed">• Screwdriver</li>
                            <li className="leading-relaxed">• Drill machine</li>
                            <li className="leading-relaxed">• Measuring tape</li>
                            <li className="leading-relaxed">• Level</li>
                            <li className="leading-relaxed">• Pencil/marker</li>
                            <li className="leading-relaxed">• Screws (usually provided with channel)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-black mb-4">Step-by-Step Installation Guide</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg text-black mb-2">Step 1: Separate the Inner Slide</h3>
                                <p className="leading-relaxed">
                                    Most telescopic channels have a clip or lever that allows you to remove the inner slide from the main channel.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">Step 2: Mark the Mounting Height</h3>
                                <p className="leading-relaxed">
                                    Use a level to draw a straight horizontal line on both sides of the cabinet.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">Step 3: Fix the Outer Channel Inside the Cabinet</h3>
                                <p className="leading-relaxed">
                                    Align the channel with your markings and screw it firmly into place.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">Step 4: Mount the Inner Slide on the Drawer</h3>
                                <p className="leading-relaxed">
                                    Attach the inner slide to the side of the drawer using screws. Ensure it is parallel and aligned with the outer channel.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">Step 5: Slot the Drawer Into the Tracks</h3>
                                <p className="leading-relaxed">
                                    Insert the drawer slowly until the slides lock into place.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">Step 6: Test the Movement</h3>
                                <p className="leading-relaxed">
                                    Open and close the drawer several times to check smoothness.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl text-black mb-4">Common Mistakes to Avoid</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg text-black mb-2">❌ Misalignment</h3>
                                <p className="leading-relaxed">
                                    The number one cause of rough movement. Always use a level.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">❌ Uneven Gaps</h3>
                                <p className="leading-relaxed">
                                    If the drawer is crooked, re-check both sides.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">❌ Missing or Loose Screws</h3>
                                <p className="leading-relaxed">
                                    Loose hardware causes rattling- tighten all screws properly.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg text-black mb-2">❌ Overloading</h3>
                                <p className="leading-relaxed">
                                    Stay within the channels weight capacity.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl text-black mb-4">Get the Perfect Channel Set for Your DIY Project</h2>
                        <p className="leading-relaxed mb-4">
                            Whether you are upgrading drawers or building new furniture, high-quality telescopic channels guarantee smooth performance.
                        </p>
                        <div className="space-y-2">
                            <p className="leading-relaxed">Need the perfect channel set? Visit Dalmia Hardware or order via WhatsApp.</p>
                            <p className="leading-relaxed">Ask us for SS304, soft-close, and heavy-duty channel options.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}