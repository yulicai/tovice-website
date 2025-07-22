export const siteConfig = {
  brand: {
    name: "TOVICE",
    tagline: "Life Flows Better with Water",
    description: "A Place for Water Lovers, where you can find uinque water bottle accessories for your lifestyle."
  },
  
  navigation: {
    home: "Home",
    products: "Products", 
    about: "About Us"
  },
  
  hero: {
    title: "Life Flows Better with Water",
    subtitle: "A place for water lovers, where you can find unique water bottle accessories for your lifestyle.",
    cta: "Explore Products",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  
  categories: {
    title: "Product Collections",
    bestSellers: {
      name: "Best Sellers",
      slogan: "Our most loved products",
      description: "Customer favorites that never disappoint"
    },
    carry: {
      name: "Carry Series",
      slogan: "Hydration on the go, stylishly stowed.",
      description: "Carrying bag for water bottles in different scenarios"
    },
    iceMold: {
      name: "In the Water",
      slogan: "Keep your drink cool, longer.",
      description: "Ice molds, special designed for water bottles with straws."
    },
    accessories: {
      name: "Accessories & Decorations",
      slogan: "Accessories & Decorations",
      description: "Make your water bottle one and only."
    }
  },
  
  products: {
    title: "Our Products",
    allProducts: "All Products",
    featuredProducts: "Featured Products",
    viewCompatibleBottles: "View Compatible Bottles →",
    buyNow: "Buy Now",
    addToWishlist: "Add to Wishlist",
    mainFeatures: "Key Features:",
    rating: "rating",
    reviews: "reviews"
  },
  
  about: {
    title: "About Us",
    whyChooseUs: "Why Choose TOVICE?",
    ourStory: {
      title: "Our Story",
      subtitle: "Chill Smarter: Perfect Ice, Perfect Fit, Every Sip!",
      content: "TOVICE was born from a simple observation: while sports water bottles have evolved significantly, the way we keep drinks cold hasn't changed much. We set out to create the perfect ice mold specifically designed for modern sports bottles, combining innovative design with premium materials."
    },
    qualityCommitment: {
      title: "Our Commitment to Quality",
      content: "We believe that what goes into your water bottle matters. That's why we:",
      points: [
        "Use only premium food-grade silicone",
        "Test every batch for quality and safety", 
        "Design products specifically for sports bottles",
        "Focus on user experience and ease of use"
      ],
      siliconeInfoLink: "Why do some ice molds leave white residue?"
    },
    uniqueFeatures: {
      title: "The TOVICE Difference",
      points: [
        "Off-Center Design: Fits water bottles with side-positioned straws without bending or blocking",
        "Easy release design: no more frustration popping ice out",
        "Efficient & Space-Saving: Larger ice fills bottles faster, lasts longer, and stacks easily in your freezer",
        "Perfect fit: Specifically crafted to work seamlessly with popular water bottles like Owala",
        "100% satisfaction guarantee"
      ]
    },
    contact: {
      title: "Contact Us",
      content: "Have questions or suggestions? We'd love to hear from you. Our customer service team will respond within 24 hours.",
      hours: "Customer Support Hours:",
      hoursDetail: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      email: "contact@tovice.com"
    }
  },
  
  modals: {
    compatibleBottles: "Compatible Bottles",
    siliconeInfo: {
      title: "Why Do Some Ice Molds Leave White Residue?",
      understanding: {
        title: "Understanding Silicone Quality in Ice Molds",
        content: "Not all silicone ice molds are created equal. Some manufacturers use lower-grade silicone or skip crucial manufacturing steps, leading to:",
        issues: [
          "White residue leaching into ice",
          "Potential harmful chemicals release", 
          "Shorter product lifespan"
        ]
      },
      process: {
        title: "Our Premium Manufacturing Process",
        content: "At TOVICE, we use only premium food-grade silicone and follow a rigorous manufacturing process that includes:",
        steps: [
          "Multiple curing cycles",
          "Thorough quality testing",
          "Regular third-party lab verification"
        ],
        conclusion: "This ensures our ice molds never leave any residue and remain safe for years of use."
      }
    }
  }
};

export const productsData = [
  // Classic Series
  {
    id: 1,
    name: "Ice Molds for Owala 24-40oz, Set of 3 - Rose Pink",
    category: 'iceMold',
    isBestSeller: true,
    color: "#ebcbbe",
    price: "$12.98",
    rating: 4.8,
    reviews: 156,
    description: "Keep your drink cool, longer.",
    features: [
      "Off center design, straw sits to one side",
      "Side wing design, easy to release",
      "Extended cooling duration",
      "Stackable design, take little space",
      "Dishwasher safe",
    ],
    amazonLink: "https://www.amazon.com/Ice-Mold-Accessories-Placement-Compatible/dp/B0DHNTM3J7",
    images: [
      "/assets/images/products/pink-mold/1.jpg",
      "/assets/images/products/pink-mold/2.jpg",
      "/assets/images/products/pink-mold/3.jpg",
      "/assets/images/products/pink-mold/4.jpg",
      "/assets/images/products/pink-mold/5.jpg",
      "/assets/images/products/pink-mold/6.jpg",
      "/assets/images/products/pink-mold/7.jpg",
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      },
      {
        name: "Stanley Cup",
        image:  "/assets/images/bottles/Stanley_Cup.png",
        description: "Compatible with 30oz, 40oz bottles"
      }
    ]
  },
  {
    id: 2,
    name: "Ice Molds for Owala 24-40oz, Set of 3 - Sage Green",
    category: 'iceMold',
    color: "#a1cd9d",
    price: "$12.98",
    rating: 4.7,
    reviews: 142,
    description: " Keep your drink cool, longer.",
    features: [
      "Off center design, straw sits to one side",
      "Side wing design, easy to release",
      "Extended cooling duration",
      "Stackable design, take little space",
      "Dishwasher safe",
    ],
    amazonLink: "https://www.amazon.com/Ice-Food-Grade-Silicone-Placement-Compatible/dp/B0DJ33LBHG",
    images: [
      "/assets/images/products/green-mold/1.jpg",
      "/assets/images/products/green-mold/2.jpg",
      "/assets/images/products/green-mold/3.jpg",
      "/assets/images/products/green-mold/4.jpg",
      "/assets/images/products/green-mold/5.jpg",
      "/assets/images/products/green-mold/6.jpg",
      "/assets/images/products/green-mold/7.jpg",
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      },
      {
        name: "Stanley Cup",
        image:  "/assets/images/bottles/Stanley_Cup.png",
        description: "Compatible with 30oz, 40oz bottles"
      }
    ]
  },
  // Limited Edition
  {
    id: 3,
    name: "Ice Molds for Owala 24-40oz, Set of 3 - Mint Blue",
    category: 'iceMold',
    color: "#d4b5d8",
    price: "$12.98",
    rating: 4.9,
    reviews: 89,
    description: " Keep your drink cool, longer.",
    features: [
      "Off center design, straw sits to one side",
      "Side wing design, easy to release",
      "Extended cooling duration",
      "Stackable design, take little space",
      "Dishwasher safe",
    ],
    amazonLink: "https://www.amazon.com/Ice-Food-Grade-Silicone-Placement-Compatible/dp/B0DQLG4Q7R",
    images: [
        "/assets/images/products/blue-mold/Owala Ice Mold-Blue-01.jpg",
        "/assets/images/products/blue-mold/Owala Ice Mold-Blue-02.jpg",
        "/assets/images/products/blue-mold/Owala Ice Mold-Blue-03.jpg",
        "/assets/images/products/blue-mold/Owala Ice Mold-Blue-04.jpg",
        "/assets/images/products/blue-mold/Owala Ice Mold-Blue-05.jpg",
        "/assets/images/products/blue-mold/Owala Ice Mold-Blue-06.jpg"
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      }
    ]
  },
  {
    id: 4,
    name: "Ice Molds for Owala 24-40oz, Set of 3 - Dark Grey",
    category: 'iceMold',
    color: "#f4a261",
    price: "$12.98",
    rating: 4.8,
    reviews: 67,
    description: "Keep your drink cool, longer. ",
    features: [
      "Off center design, straw sits to one side",
      "Side wing design, easy to release",
      "Extended cooling duration",
      "Stackable design, take little space",
      "Dishwasher safe",
    ],
    
    amazonLink: "https://www.amazon.com/Ice-Food-Grade-Silicone-Placement-Compatible/dp/B0DQLF3BKF",
    images: [
        "/assets/images/products/darkGrey-mold/Owala Ice Mold-Dark Grey-01.jpg",
        "/assets/images/products/darkGrey-mold/Owala Ice Mold-Dark Grey-02.jpg",
        "/assets/images/products/darkGrey-mold/Owala Ice Mold-Dark Grey-03.jpg",
        "/assets/images/products/darkGrey-mold/Owala Ice Mold-Dark Grey-04.jpg",
        "/assets/images/products/darkGrey-mold/Owala Ice Mold-Dark Grey-05.jpg",
        "/assets/images/products/darkGrey-mold/Owala Ice Mold-Dark Grey-06.jpg"
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      }
    ]
  },
  // Accessories Sets
  {
    id: 5,
    name: "Letter Charm Set - Pink",
    category: 'accessories',
    isBestSeller: true,
    color: "#74c0fc",
    price: "$9.99",
    rating: 4.6,
    reviews: 45,
    description: "Personalized charms set for your water bottle.",
    features: [
      "Unique & Cute",
      "Functional as a handle strap",
      "Premium quality",
      
    ],
    amazonLink: "https://www.amazon.com/dp/B0DQVFZPH6/",
    images: [
        "/assets/images/products/letter-charm-pink/Owala Charms Initial_01.jpg",
     "/assets/images/products/letter-charm-pink/Owala Charms Initial_02.jpg",
     "/assets/images/products/letter-charm-pink/Owala Charms Initial_03.jpg",
     "/assets/images/products/letter-charm-pink/Owala Charms Initial_04.jpg",
     "/assets/images/products/letter-charm-pink/Owala Charms Initial_05.jpg",
     "/assets/images/products/letter-charm-pink/Owala Charms Initial_06.jpg",
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      }
    ]
  },
  {
    id: 6,
    name: "Letter Charm Set - Mint Green",
    category: 'accessories',
    color: "#ffd43b",
    price: "$9.99",
    rating: 4.7,
    reviews: 38,
    amazonLink: "https://www.amazon.com/dp/B0F9P7HKSS",
    
    description: "Personalized charms set for your water bottle.",
    features: [
      "Unique & Cute",
      "Functional as a handle strap",
      "Premium quality",
    ],

    images: [
        "/assets/images/products/letter-charm-mint/Owala Charms Initial_mint_green_01.jpg",
        "/assets/images/products/letter-charm-mint/Owala Charms Initial_mint_green_02.jpg",
        "/assets/images/products/letter-charm-mint/Owala Charms Initial_mint_green_03.jpg",
        "/assets/images/products/letter-charm-mint/Owala Charms Initial_mint_green_04.jpg",
        "/assets/images/products/letter-charm-mint/Owala Charms Initial_mint_green_05.jpg",
        "/assets/images/products/letter-charm-mint/Owala Charms Initial_mint_green_06.jpg",
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      }
    ]
  },

  {
    id: 7,
    name: "Letter Charm Set - White",
    category: 'accessories',
    color: "#adb5bd",
    price: "$9.99",
    rating: 4.5,
    reviews: 23,
    description: "Personalized charms set for your water bottle.",
    features: [
      "Unique & Cute",
      "Functional as a handle strap",
      "Premium quality",
    ],
    amazonLink: "https://www.amazon.com/dp/B0F9P7NYSF",
    images: [
        "/assets/images/products/letter-charm-white/Owala Charms Initial_white_01.jpg",
        "/assets/images/products/letter-charm-white/Owala Charms Initial_white_02.jpg",
        "/assets/images/products/letter-charm-white/Owala Charms Initial_white_03.jpg",
        "/assets/images/products/letter-charm-white/Owala Charms Initial_white_04.jpg",
        "/assets/images/products/letter-charm-white/Owala Charms Initial_white_05.jpg",
        "/assets/images/products/letter-charm-white/Owala Charms Initial_white_06.jpg",
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      }
    ]
  },
    // Carry
  {
    id: 8,
    name: "Tote Bag with Stanley Cup Holder",
    category: 'carry',
    color: "#6c757d",
    price: "$34.99",
    isBestSeller: true,
    rating: 4.4,
    reviews: 18,
    description: "Pockets for every bottles, handle, no handle, it handles all. ",
    features: [
      "Two elastic cup holders inside",
      "Large capacity",
      "Laptop padding pocket",
      "Easy to wipe inside",
      "Washing machine safe"
    ],
    amazonLink: "https://www.amazon.com/dp/B0FD7XDVLT",
    images: [
      "/assets/images/products/tote-bag-stl/Tote Bag With Stanley Holder-1.jpg",
      "/assets/images/products/tote-bag-stl/Tote Bag With Stanley Holder-2.jpg",
      "/assets/images/products/tote-bag-stl/Tote Bag With Stanley Holder-3.jpg",
      "/assets/images/products/tote-bag-stl/Tote Bag With Stanley Holder-4.jpg",
      "/assets/images/products/tote-bag-stl/Tote Bag With Stanley Holder-5.jpg",
      "/assets/images/products/tote-bag-stl/Tote Bag With Stanley Holder-6.jpg",
 
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      },
      {
        name: "Stanley Cup",
        image:  "/assets/images/bottles/Stanley_Cup.png",
        description: "Compatible with 30oz, 40oz bottles"
      }
    ]
  },
  {
    id: 9,
    name: "Magnetic Gym Bag for Stanley Cup",
    category: 'carry',
    color: "#495057",
    price: "$34.99",
    rating: 4.6,
    reviews: 31,
    description: "Release your hands in the gym, no more mess on the groud.",
    features: [
      "Powerful magnetic",
      "Hold 40oz water bottle",
      "Water-proof material",
      "Carrying strap included",
    ],
    amazonLink: "https://www.amazon.com/dp/B0F4DXV2SK",
    images: [
      "/assets/images/products/mag-bag-stl/1.jpg",
      "/assets/images/products/mag-bag-stl/2.png",
      "/assets/images/products/mag-bag-stl/3.jpg",
      "/assets/images/products/mag-bag-stl/4.png",
      "/assets/images/products/mag-bag-stl/5.png",
      "/assets/images/products/mag-bag-stl/6.png",
    ],
    compatibleBottles: [
      {
        name: "Stanley Cup",
        image:  "/assets/images/bottles/Stanley_Cup.png",
        description: "Compatible with 30oz, 40oz handle water bottles"
      }
    ]
  },
  {
    id: 10,
    name: "Bag Insert with Stanley Cup Holder",
    category: 'carry',
    color: "#495057",
    price: "$19.99",
    rating: 4.6,
    reviews: 31,
    description: "Secure your bottles in any of your tote bags",
    features: [
      "Fit for handle/no handle water bottles",
      "Water proof material inside",
      "Smart organization system",
      "Lightweight and durable",

    ],
    amazonLink: "https://www.amazon.com/dp/B0FD7YKQW1",
    images: [
      "/assets/images/products/bag-insert/Bag Insert with Stanley Holder-01.jpg",
      "/assets/images/products/bag-insert/Bag Insert with Stanley Holder-02.jpg",
      "/assets/images/products/bag-insert/Bag Insert with Stanley Holder-03.jpg",
      "/assets/images/products/bag-insert/Bag Insert with Stanley Holder-04.jpg",
      "/assets/images/products/bag-insert/Bag Insert with Stanley Holder-05.jpg",
      "/assets/images/products/bag-insert/Bag Insert with Stanley Holder-06.jpg",
    ],
    compatibleBottles: [
      {
        name: "Owala Freesip",
        image:  "/assets/images/bottles/Owala_Freesip.png",
        description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
      },
      {
        name: "Stanley Cup",
        image:  "/assets/images/bottles/Stanley_Cup.png",
        description: "Compatible with 30oz, 40oz bottles"
      }
    ]
  }
]; 