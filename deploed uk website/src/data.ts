import { Product, Category, BlogPost, Testimonial, TeamMember } from './types';

export const BUSINESS_INFO = {
  name: "NI Drip Central Electronics",
  legalName: "Drip Central Electronics Ltd",
  phone: "+44 28 9032 4455",
  altPhone: "+44 28 9032 4456",
  email: "support@nidripcentralelectronics.co.uk",
  altEmail: "sales@nidripcentralelectronics.co.uk",
  address: "Unit 2, Boucher Retail Park, Boucher Road, Belfast, BT12 6HR, Northern Ireland",
  openingHours: "Mon - Sat: 9:00 AM - 6:00 PM | Sun: 1:00 PM - 6:00 PM",
  socials: {
    facebook: "https://www.facebook.com/NIDripCentralElectronics",
    instagram: "https://www.instagram.com/NIDripCentralElectronics",
    twitter: "https://twitter.com/NIDripCentral",
    pinterest: "https://pinterest.com/NIDripCentral"
  }
};

export const CATEGORIES: Category[] = [
  {
    name: "Washing Machines",
    slug: "washing-machines",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Refrigerators",
    slug: "refrigerators",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "American Fridge Freezers",
    slug: "american-fridge-freezers",
    image: "https://images.unsplash.com/photo-1571175432247-fe033656ec62?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Integrated Appliances",
    slug: "integrated-appliances",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cookers & Ovens",
    slug: "cookers-ovens",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Smart TVs",
    slug: "smart-tvs",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Bosch Serie 6 WUU28T61GB Freestanding Washing Machine",
    brand: "Bosch",
    category: "Washing Machines",
    price: 499,
    compareAtPrice: 549,
    sku: "BOS-WW90-S6",
    mainImage: "https://images.unsplash.com/photo-1582730147233-ac8112440fd5?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    isSale: true,
    description: "Quiet and durable freestanding washing machine with EcoSilence Drive and AllergyPlus program. Delivers perfect wash results with minimal energy consumption.",
    stock: "Available",
    specs: {
      "Capacity": "9kg",
      "Spin Speed": "1400 rpm",
      "Energy Rating": "A",
      "Dimensions": "H84.8 x W59.8 x D59.0 cm",
      "Noise Level": "69dB",
      "Warranty": "2 Years"
    },
    colors: ["White", "Silver"]
  },
  {
    id: "p2",
    name: "Samsung SpaceMax RS68A8810S9 American Fridge Freezer",
    brand: "Samsung",
    category: "American Fridge Freezers",
    price: 1199,
    compareAtPrice: 1299,
    sku: "SAM-RS68-SM",
    mainImage: "https://images.unsplash.com/photo-1571175432247-fe033656ec62?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    isSale: true,
    description: "Multi-door American Style fridge freezer with SpaceMax technology. Features water & ice dispenser, All-Around Cooling, and Twin Cooling Plus.",
    stock: "Available",
    specs: {
      "Total Capacity": "634 Litres",
      "Fridge Capacity": "409 Litres",
      "Freezer Capacity": "225 Litres",
      "Energy Rating": "F",
      "Frost Free": "Yes",
      "Warranty": "5 Years"
    },
    colors: ["Silver", "Black"]
  },
  {
    id: "p3",
    name: "LG NatureFRESH GSLV70PZTF Side-By-Side Fridge Freezer",
    brand: "LG",
    category: "Refrigerators",
    price: 899,
    sku: "LG-GSLV70-NF",
    mainImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1571175432247-fe033656ec62?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    isSale: false,
    description: "Spacious side-by-side refrigerator featuring LG's Smart Inverter Compressor and NatureFRESH DoorCooling+ for longer-lasting freshness.",
    stock: "Available",
    specs: {
      "Total Capacity": "635 Litres",
      "Cooling Technology": "DoorCooling+",
      "Inverter Compressor": "Yes (Smart Inverter)",
      "Smart Connect": "ThinQ WiFi",
      "Water Dispenser": "Plumbed Water & Ice",
      "Warranty": "2 Years"
    },
    colors: ["Steel", "White"]
  },
  {
    id: "p4",
    name: "Neff N50 B57CR22N0B Built-in Slide & Hide Oven",
    brand: "Neff",
    category: "Cookers & Ovens",
    price: 749,
    compareAtPrice: 799,
    sku: "NEF-B57CR-SH",
    mainImage: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    isSale: true,
    description: "The unique fully-disappearing Slide&Hide oven door with CircoTherm hot air system and Pyrolytic self-cleaning technology.",
    stock: "Available",
    specs: {
      "Oven Volume": "71 Litres",
      "Cleaning Type": "Pyrolytic Self-Cleaning",
      "Control Type": "ShiftControl touch",
      "Energy Rating": "A+",
      "Safety": "Quadruple glazed door",
      "Warranty": "2 Years"
    },
    colors: ["Black", "Steel"]
  },
  {
    id: "p5",
    name: "LG OLED55B36LA 55\" Smart OLED 4K TV",
    brand: "LG",
    category: "Smart TVs",
    price: 1099,
    compareAtPrice: 1249,
    sku: "LG-OLED55-B3",
    mainImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    isSale: true,
    description: "Self-lit pixels deliver breathtaking picture quality, absolute contrast, and 100% color fidelity. Powered by the α7 AI Processor Gen6.",
    stock: "Available",
    specs: {
      "Screen Size": "55 Inches",
      "Display Tech": "OLED 4K",
      "Refresh Rate": "120Hz",
      "Smart OS": "webOS 23",
      "Gaming Features": "G-Sync, FreeSync, VRR",
      "Warranty": "5 Years"
    },
    colors: ["Black"]
  },
  {
    id: "p6",
    name: "Samsung Crystal UE55CU7100 55\" Smart 4K TV",
    brand: "Samsung",
    category: "Smart TVs",
    price: 429,
    sku: "SAM-55CU71-LED",
    mainImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    isSale: false,
    description: "Crystal Processor 4K upscale-tunes contrast and HDR, rendering beautiful 4K colors and sharp detail. Stream Netflix, Prime Video, and Disney+ easily.",
    stock: "Available",
    specs: {
      "Screen Size": "55 Inches",
      "Display Tech": "LED 4K",
      "HDR Standard": "HDR10+",
      "Smart TV Portal": "Tizen Smart Hub",
      "HDMI Inputs": "3 x HDMI 2.0",
      "Warranty": "1 Year"
    },
    colors: ["Black"]
  },
  {
    id: "p7",
    name: "Beko Pro BDFN26430W Freestanding Dishwasher",
    brand: "Beko",
    category: "Integrated Appliances",
    price: 329,
    compareAtPrice: 349,
    sku: "BEK-BDFN26",
    mainImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    isSale: true,
    description: "Energy-efficient freestanding dishwasher with Quick&Shine program, CornerIntense spray arm, and 14 place setting capacity.",
    stock: "Available",
    specs: {
      "Place Settings": "14",
      "Programs": "6",
      "Noise Level": "44dB",
      "Water Usage": "9.5L per cycle",
      "Energy Rating": "D",
      "Warranty": "2 Years"
    },
    colors: ["White", "Silver"]
  },
  {
    id: "p8",
    name: "Sage Barista Express Espresso Coffee Machine",
    brand: "Bosch", // Kenwood or other listed brands, we can group under Kenwood or Bosch
    category: "Integrated Appliances", // or Small Appliances
    price: 549,
    compareAtPrice: 599,
    sku: "SAG-BES875-CM",
    mainImage: "https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    isSale: true,
    description: "Create third-wave specialty coffee at home from bean to espresso in less than a minute. Integrated conical burr grinder with dose control.",
    stock: "Available",
    specs: {
      "Pump Pressure": "15 Bar",
      "Grinder": "Conical Burr Grinder",
      "Bean Hopper": "250g Capacity",
      "Water Tank": "2.0 Litre Capacity",
      "Heating System": "1600W Thermocoil",
      "Warranty": "2 Years"
    },
    colors: ["Stainless Steel", "Black Sesame"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Choosing the Perfect Washing Machine: A Complete Buying Guide",
    category: "Laundry Appliances",
    date: "July 15, 2026",
    author: "Richard McAllister",
    summary: "Confused by drum capacities, energy classes, and spin speeds? Read our guide to finding the ideal washing machine for your Northern Ireland home.",
    content: "When it is time to replace your old washing machine, the sheer volume of choices can feel overwhelming. Today's modern appliances do much more than simply spin your clothes with soapy water; they incorporate AI-driven dosing, steam cycles, specialized eco-settings, and smart home connectivity.\n\nAt NI Drip Central Electronics, we recommend starting your search with drum capacity. A 7kg-8kg machine is typically ideal for couples and small families, while active households with children will benefit greatly from a larger 9kg, 10kg, or even 12kg model. Larger drums not only let you wash more laundry in one go, but also allow larger items like duvets and sheets to wash more effectively.\n\nEnergy efficiency is another critical factor. With modern utility costs, choosing a machine with an 'A' or 'B' energy rating will save you hundreds of pounds over the machine's lifespan. Brands like Bosch and Samsung excel in this department, incorporating quiet brushless inverter motors that use less friction and significantly reduce energy draw.\n\nDrop in to our showroom on Boucher Road in Belfast to see these washing machines in action and let our expert advisors help you make the perfect choice!",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b2",
    title: "Best Refrigerator Buying Guide: Top Models for Modern Kitchens",
    category: "Kitchen Appliances",
    date: "July 12, 2026",
    author: "Fiona Henderson",
    summary: "Discover the latest trends in luxury refrigerators and American Fridge Freezers, featuring smart cooling zones, water dispensers, and SpaceMax tech.",
    content: "The refrigerator is the undisputed heartbeat of the kitchen. Today's models are designed not just to keep food cold, but to preserve nutrients, reduce food waste, and seamlessly blend into modern cabinetry.\n\nFor spacious kitchens, American Style Fridge Freezers are highly popular. Brands like Samsung and LG offer models with plumbed or non-plumbed water and ice dispensers, allowing instant cold water and crushed ice at the touch of a button. Samsung's SpaceMax technology utilizes high-performance insulation to make the cabinet walls much thinner, creating substantial internal space without increasing the external footprint.\n\nIf you prefer a streamlined kitchen aesthetic, Integrated Fridge Freezers are the way to go. These appliances sit behind custom cabinet doors that match your kitchen styling. When choosing integrated, always measure twice to ensure custom dimensions fit perfectly. Let our technicians handle the built-in installation for a flawless finish!",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b3",
    title: "Kitchen Appliance Maintenance: How to Extend Their Lifespan",
    category: "Maintenance Tips",
    date: "June 28, 2026",
    author: "Thomas Wright",
    summary: "Keep your ovens, hobs, and washing machines running like brand new with these simple, highly effective appliance cleaning and maintenance tips.",
    content: "Purchasing premium home appliances is an investment in your home. To protect that investment and prevent sudden breakdowns, simple routine maintenance is vital.\n\nFor washing machines, we highly recommend running a monthly maintenance wash on a high temperature (60°C or 90°C) with an empty drum and a cup of soda crystals. This removes built-up limescale, detergent sludge, and bacteria that thrive in low-temperature cycles. Additionally, leave the door and detergent drawer slightly open after every wash to allow fresh air circulation and prevent mold growth.\n\nIn refrigerators, vacuuming the condenser coils located at the back or bottom once a year will prevent the motor from working too hard, saving electricity and prolonging compressor life. Clean door seals with a damp microfiber cloth to ensure an airtight seal.\n\nBy following these simple steps, your appliances will remain energy-efficient and run reliably for many years to come!",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "James Patterson",
    role: "Homeowner in Lisburn",
    rating: 5,
    title: "Incredible Service and Installation",
    comment: "I purchased a premium Bosch washing machine from NI Drip Central Electronics. Not only was the price better than online competitors, but their delivery team fitted it into my kitchen flawlessly, leveled it, and carried my old machine away. Highly recommend them!",
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    productImage: "https://images.unsplash.com/photo-1582730147233-ac8112440fd5?auto=format&fit=crop&w=150&q=80",
    productName: "Bosch Washing Machine"
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Belfast Resident",
    rating: 5,
    title: "Fantastic Fridge Freezer!",
    comment: "We upgraded to a luxury Samsung American Fridge Freezer. The SpaceMax design is absolutely stunning. Our vegetables stay fresh so much longer, and the cold water dispenser is a blessing in the summer. The NI Drip Central staff on Boucher Road were incredibly helpful.",
    clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    productImage: "https://images.unsplash.com/photo-1571175432247-fe033656ec62?auto=format&fit=crop&w=150&q=80",
    productName: "Samsung SpaceMax Fridge"
  },
  {
    id: "t3",
    name: "Mark O'Connor",
    role: "Landlord in Derry",
    rating: 5,
    title: "Highly Reliable Appliance Partner",
    comment: "As a landlord, I need reliable and affordable integrated appliances for my rental properties. Beko cookers, hobs, and washing machines from NI Drip Central have been perfect. Fast dispatch, outstanding warranties, and bulletproof reliability.",
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    productImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=150&q=80",
    productName: "Beko Integrated Appliances"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm1",
    name: "Thomas Drip",
    role: "Managing Director & Co-Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80",
    socials: {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    id: "tm2",
    name: "Clara Drip",
    role: "Operations Director & Co-Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80",
    socials: {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "tm3",
    name: "Gary Johnston",
    role: "Head of Appliance Installation & Delivery",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com"
    }
  }
];
