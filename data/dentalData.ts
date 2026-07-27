export interface Treatment {
  id: string;
  title: string;
  category: 'implant' | 'cosmetic' | 'ortho' | 'general' | 'pediatric';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  painless: boolean;
  warranty: string;
  startingPrice: string;
  procedureSteps: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experienceYears: number;
  specialization: string;
  image: string;
  bio: string;
  achievements: string[];
}

export interface TechEquipment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefitToPatient: string;
  image: string;
  icon: string;
}

export interface Transformation {
  id: string;
  patientName: string;
  age: number;
  treatment: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
  story: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
  avatar: string;
  verified: boolean;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  keywords: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Implants' | 'Cosmetic' | 'Root Canal' | 'Aligners' | 'Costs';
}

export const CLINIC_INFO = {
  name: "Rekha Dental Clinic & Digital Implant Center",
  tagline: "Ghaziabad's Premier Center for Advanced Digital Dentistry & Smile Makeovers",
  phonePrimary: "+91 98712 34567",
  phoneEmergency: "+91 98712 99999",
  whatsapp: "+919871234567",
  whatsappMessage: "Hello Rekha Dental Clinic! I would like to book a consultation for digital dental treatment in Ghaziabad.",
  email: "care@rekhadental.com",
  address: "Plot 42, Sector 14, Main Road (Opp. Swarn Jayanti Park), Indirapuram / Raj Nagar Extension Belt, Ghaziabad, UP 201014",
  googleRating: 4.9,
  googleReviewCount: 1540,
  yearsExperience: 19,
  happySmiles: 8400,
  implantsDone: 12000,
  implantSuccessRate: "99.2%",
  hours: [
    { days: "Mon - Sat", time: "9:30 AM - 8:30 PM" },
    { days: "Sunday", time: "10:00 AM - 4:00 PM (By Prior Appointment)" }
  ],
  landmarks: ["Near Vaishali Metro Station", "Opp. Swarn Jayanti Park", "Adjacent to Raj Nagar Ext Link Road"]
};

export const STATS = [
  { value: 19, label: "Years Experience", suffix: "+" },
  { value: 8400, label: "Happy Smiles Delivered", suffix: "+" },
  { value: 12000, label: "Dental Implants Placed", suffix: "+" },
  { value: 99.2, label: "Implant Success Rate", suffix: "%" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Experienced Specialists",
    desc: "Led by MDS Prosthodontists & Implantologists with over 19+ years of clinical excellence in complex dental rehabilitations."
  },
  {
    icon: "Cpu",
    title: "Advanced Digital Dentistry",
    desc: "3D Intraoral scanners, 3D CBCT imaging, and AI-guided precision planning for zero-error treatments."
  },
  {
    icon: "Sparkles",
    title: "Pain-Free Procedures",
    desc: "Laser dentistry and micro-anesthesia technology ensure complete comfort during root canals, fillings, and surgeries."
  },
  {
    icon: "ShieldCheck",
    title: "International Sterilization Standards",
    desc: "Strict 6-step B-Class autoclave sterilization protocol following OSHA & ISO guidelines for 100% infection control."
  },
  {
    icon: "UserCheck",
    title: "Personalized Treatment Plans",
    desc: "Custom digital smile designs tailored to your facial symmetry, lifestyle, budget, and oral health goals."
  },
  {
    icon: "Zap",
    title: "Latest Dental Technology",
    desc: "Equipped with painless lasers, computer-guided implant guides, and ultra-quiet Swiss micromotors."
  },
  {
    icon: "CreditCard",
    title: "Transparent Pricing & 0% EMI",
    desc: "No hidden charges. Flexible zero-interest monthly EMI options starting at just ₹2,499/month."
  },
  {
    icon: "HeartHandshake",
    title: "Comfortable Patient Experience",
    desc: "Ergonomic massage dental chairs, relaxing ambience, gentle bedside manner, and dedicated patient relationship managers."
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "implant",
    icon: "Shield",
    shortDesc: "Permanent, natural-looking replacement for missing teeth using computer-guided Swiss implants.",
    fullDesc: "Restore full chewing power and natural aesthetics with computer-guided dental implants. We specialize in Single Tooth Implants, All-on-4 / All-on-6 Full Mouth Rehabilitation, and Immediate Loading Implants.",
    benefits: [
      "Lifetime Warranty options available",
      "Feels & functions exactly like natural teeth",
      "Prevents facial bone loss & structural sagging",
      "Same-day teeth option for eligible candidates"
    ],
    duration: "1 to 3 visits",
    painless: true,
    warranty: "Lifetime Manufacturer Warranty",
    startingPrice: "₹18,500 per implant",
    procedureSteps: [
      "3D CBCT Bone Scan & Digital Simulation",
      "Computer-Guided Flapless Implant Placement",
      "Custom Porcelain/Zirconia Crown Attachment"
    ]
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    category: "cosmetic",
    icon: "Sparkles",
    shortDesc: "Transform your smile in just 2 sessions with Digital Smile Design & Porcelain Veneers.",
    fullDesc: "Craft your dream celebrity smile using AI-driven Digital Smile Design (DSD). Correct crooked, discolored, gapped, or worn-down teeth with ultra-thin porcelain laminate veneers.",
    benefits: [
      "Custom preview of your new smile before treatment",
      "Stain-resistant ultra-durable porcelain materials",
      "Minimally invasive tooth preparation",
      "Boosts self-confidence instantly"
    ],
    duration: "2 Sessions (5 - 7 Days)",
    painless: true,
    warranty: "15 Years Warranty",
    startingPrice: "₹7,500 per unit",
    procedureSteps: [
      "3D Intraoral Scan & DSD Smile Preview",
      "Micro-preparation & Mock-up Trial",
      "Permanent Bonding of Ultra-Thin Veneers"
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment (RCT)",
    category: "general",
    icon: "Activity",
    shortDesc: "Painless single-sitting root canal treatment under dental microscope technology.",
    fullDesc: "Save infected or severely decayed teeth without pain. Our microscopic single-sitting RCT uses rotary endodontics and laser sterilization for maximum tooth preservation.",
    benefits: [
      "100% Painless procedure with micro-anesthesia",
      "Completed in just 30-45 minutes in a single visit",
      "Eliminates tooth infection & severe throbbing pain",
      "Crowned with unbreakable CAD/CAM Zirconia"
    ],
    duration: "Single Sitting (45 Mins)",
    painless: true,
    warranty: "10 Years Crown Warranty",
    startingPrice: "₹3,500 per tooth",
    procedureSteps: [
      "Digital X-ray & Pain Relief Anesthesia",
      "Rotary Cleansing & Laser Canal Deinfection",
      "Biocompatible Gutta Percha Sealing + Crown"
    ]
  },
  {
    id: "dental-veneers",
    title: "Dental Veneers & Laminates",
    category: "cosmetic",
    icon: "Gem",
    shortDesc: "Ultra-thin E-Max porcelain laminates to correct gaps, chips, and deep discoloration.",
    fullDesc: "E-Max Porcelain Veneers are wafer-thin shells customized to cover the front surface of teeth to improve appearance, masking stains, cracks, and slight misalignments.",
    benefits: [
      "Ultra-natural light translucency",
      "Non-staining surface resistant to coffee/tea",
      "Custom shade matching to your skin tone"
    ],
    duration: "2 Visits",
    painless: true,
    warranty: "10-15 Years Warranty",
    startingPrice: "₹8,000 per veneer",
    procedureSteps: [
      "Consultation & Shade Selection",
      "3D Digital Impressions",
      "Bonding with Medical-Grade Resin"
    ]
  },
  {
    id: "braces-aligners",
    title: "Clear Aligners & Braces",
    category: "ortho",
    icon: "Grid",
    shortDesc: "Invisible aligners & self-ligating ceramic braces for perfectly straight teeth.",
    fullDesc: "Straighten your teeth discreetly with US-FDA approved clear aligners or Damon ceramic self-ligating braces. Suitable for teens and working professionals.",
    benefits: [
      "Nearly 100% invisible clear aligners",
      "No food restrictions — removable while eating",
      "Faster treatment time compared to metal braces",
      "3D simulation shows final results upfront"
    ],
    duration: "6 to 14 Months",
    painless: true,
    warranty: "Retention Guaranteed",
    startingPrice: "₹35,000 (Aligners Package)",
    procedureSteps: [
      "3D iTero Intraoral Scan",
      "Virtual 3D Teeth Alignment Plan",
      "Custom Aligner Sets Delivered"
    ]
  },
  {
    id: "teeth-whitening",
    title: "Laser Teeth Whitening",
    category: "cosmetic",
    icon: "Sun",
    shortDesc: "Get up to 8 shades whiter teeth in 45 minutes with Zoom Laser Whitening.",
    fullDesc: "In-office cold laser whitening removes stubborn tea, coffee, wine, and age-related stains safely without weakening tooth enamel.",
    benefits: [
      "Up to 8 shades lighter in 1 hour",
      "Enamel-safe cold LED laser system",
      "Includes anti-sensitivity protective gel",
      "Instant camera-ready results"
    ],
    duration: "45 Minutes",
    painless: true,
    warranty: "Long-lasting brightness",
    startingPrice: "₹6,500 session",
    procedureSteps: [
      "Gum Protection Barrier Application",
      "Whitening Gel Application",
      "3x 15-Min Laser Activation Cycles"
    ]
  },
  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    category: "general",
    icon: "Zap",
    shortDesc: "Bloodless, quiet, and needle-free laser treatments for gums, ulcers, and cavities.",
    fullDesc: "Advanced diode dental laser technology replaces conventional scalpels and drills for painless gum reshaping, depigmentation, and cavity removal.",
    benefits: [
      "No scalpels, no stitches, minimal swelling",
      "Accelerated tissue healing",
      "Sterilizes treatment area instantly"
    ],
    duration: "15 to 30 Mins",
    painless: true,
    warranty: "Standard Clinical Care",
    startingPrice: "₹2,500 session",
    procedureSteps: [
      "Targeted Laser Calibration",
      "Gentle Tissue Contouring / Deinfection",
      "Instant Hemostasis & Healing"
    ]
  },
  {
    id: "kids-dentistry",
    title: "Pediatric (Kids) Dentistry",
    category: "pediatric",
    icon: "Smile",
    shortDesc: "Gentle, fear-free dental care for children in a play-filled environment.",
    fullDesc: "Preventive fluoridation, cavity seals, habit breakers, and pain-free pediatric fillings delivered by gentle kids dental specialists.",
    benefits: [
      "Child-friendly dedicated play area",
      "Preventive pit & fissure sealants",
      "Positive dental experiences from early age"
    ],
    duration: "20 to 30 Mins",
    painless: true,
    warranty: "Child Protection Care",
    startingPrice: "₹1,200 consultation & cleaning",
    procedureSteps: [
      "Fun & Friendly Acclimatization",
      "Visual Examination & Digital Scan",
      "Preventive Gel / Micro-filling"
    ]
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Extraction",
    category: "general",
    icon: "CheckCircle",
    shortDesc: "Gentle, atraumatic removal of impacted wisdom teeth by Maxillofacial Surgeons.",
    fullDesc: "Surgical precision removal of pain-causing impacted or tilted wisdom teeth using piezosurgery lasers and micro-techniques.",
    benefits: [
      "Performed by Senior Oral & Maxillofacial Surgeons",
      "Quick 20-minute painless extraction",
      "Rapid post-op healing protocol"
    ],
    duration: "30 Minutes",
    painless: true,
    warranty: "Post-op Care Included",
    startingPrice: "₹4,500 per tooth",
    procedureSteps: [
      "Local Micro-Anesthesia",
      "Atraumatic Tooth Sectioning & Removal",
      "Dissectible Dissolvable Sutures"
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-rekha-sharma",
    name: "Dr. Rekha Sharma",
    title: "Founder & Chief Dental Surgeon",
    qualifications: "BDS, MDS (Prosthodontics & Implantology), FICOI (USA)",
    experienceYears: 19,
    specialization: "Digital Dental Implants, Full Mouth Rehabilitation & Smile Design",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    bio: "Dr. Rekha Sharma is a pioneer in digital implantology and cosmetic smile design in Ghaziabad & NCR. With over 19 years of clinical expertise, she has successfully placed over 12,000 implants and crafted thousands of celebrity smile makeovers.",
    achievements: [
      "Fellow of International Congress of Oral Implantologists (USA)",
      "Best Cosmetic Dentist Award - NCR Healthcare Excellence 2023",
      "Certified Digital Smile Design Specialist (Germany)",
      "12,000+ Successful Dental Implants Placed"
    ]
  },
  {
    id: "dr-ankit-sharma",
    name: "Dr. Ankit Sharma",
    title: "Senior Orthodontist & Clear Aligner Specialist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experienceYears: 14,
    specialization: "Invisalign, Invisible Clear Aligners & Damon Braces",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    bio: "Dr. Ankit Sharma specializes in non-extraction teeth straightening using state-of-the-art clear aligner systems and ceramic self-ligating braces, treating over 3,200 aligner patients.",
    achievements: [
      "Diamond Invisalign Certified Provider",
      "Member of Indian Orthodontic Society (IOS)",
      "Specialist in Complex Adult Orthodontics"
    ]
  },
  {
    id: "dr-meera-verma",
    name: "Dr. Meera Verma",
    title: "Senior Endodontist & Micro-RCT Specialist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experienceYears: 12,
    specialization: "Microscopic Single-Sitting Root Canals & Laser Dentistry",
    image: "https://images.unsplash.com/photo-1594824813566-7885a3977336?q=80&w=800&auto=format&fit=crop",
    bio: "Dr. Meera Verma is renowned for her gentle, zero-pain root canal treatments. She utilizes dental operating microscopes to save failing teeth and perform complex re-RCTs effortlessly.",
    achievements: [
      "Over 15,000 Painless Root Canals Performed",
      "Ex-Consultant at Fortis Healthcare",
      "Pioneer in Diode Laser Endodontics"
    ]
  }
];

export const TECHNOLOGIES: TechEquipment[] = [
  {
    id: "cbct-3d",
    name: "3D CBCT Bone Scanner",
    tagline: "Ultra-low Radiation 3D Jaw Anatomy Mapping",
    description: "Captures high-resolution 3D volumetric images of jawbones, nerve pathways, and sinus cavities in under 10 seconds.",
    benefitToPatient: "Enables 100% accurate implant positioning with zero risk of nerve damage.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    icon: "Scan"
  },
  {
    id: "intraoral-scanner",
    name: "3D iTero Intraoral Digital Scanner",
    tagline: "No More Messy Impression Trays!",
    description: "Scans 6,000 optical frames per second to render an exact 3D color model of your teeth in 2 minutes.",
    benefitToPatient: "Gag-free, instant 3D simulation of your aligned smile right in front of your eyes.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    icon: "Cpu"
  },
  {
    id: "laser-unit",
    name: "Biolase Dental Laser System",
    tagline: "Silent, Needle-Free & Bloodless Dental Care",
    description: "Replaces noisy dental drills for gum contouring, teeth whitening, and deep cavity sterilization.",
    benefitToPatient: "Zero vibration noise, virtually painless, fast healing with no stitches.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    icon: "Zap"
  },
  {
    id: "guided-implants",
    name: "Computer Guided Surgical Templates",
    tagline: "Keyhole Implant Placement Technology",
    description: "3D printed surgical guides tailored to your exact bone dimensions for flapless implant insertion.",
    benefitToPatient: "No scalpel cuts, no sutures, 50% faster procedure and virtually zero recovery downtime.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    icon: "Crosshair"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "t1",
    patientName: "Vikram Malhotra",
    age: 44,
    treatment: "All-on-4 Full Mouth Implants",
    duration: "3 Days",
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    story: "Lost multiple teeth due to severe gum weakness and was unable to chew solid food. Received immediate loading Swiss implants at Rekha Dental Clinic.",
    quote: "I can eat hard apples and steaks again! Dr. Rekha Sharma restored my confidence completely."
  },
  {
    id: "t2",
    patientName: "Ananya Gupta",
    age: 28,
    treatment: "Digital Smile Makeover (E-Max Veneers)",
    duration: "5 Days",
    beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    story: "Discolored, chipped front teeth made her self-conscious in work meetings. 8 Porcelain Veneers transformed her smile naturally.",
    quote: "People constantly compliment my smile now! It looks so incredibly natural and radiant."
  },
  {
    id: "t3",
    patientName: "Rohan Saxena",
    age: 31,
    treatment: "Clear Aligners Teeth Alignment",
    duration: "9 Months",
    beforeImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    story: "Crowded lower teeth corrected discreetly without metal wires or mouth sores.",
    quote: "Nobody even noticed I was wearing aligners. Dr. Ankit Sharma's plan was flawless."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Sunil Rastogi",
    location: "Indirapuram, Ghaziabad",
    rating: 5,
    treatment: "Dental Implants",
    comment: "Hands down the best dental clinic in Ghaziabad! Got 2 dental implants done by Dr. Rekha. The entire procedure was completely painless. The clinic feels like a 5-star international hospital.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    verified: true
  },
  {
    id: "rev-2",
    name: "Pooja Singhal",
    location: "Raj Nagar Extension, Ghaziabad",
    rating: 5,
    treatment: "Smile Makeover",
    comment: "I traveled from Noida for my smile makeover after seeing Dr. Rekha's work. The 3D scan preview was accurate to the millimeter. My veneers look stunning and natural!",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    verified: true
  },
  {
    id: "rev-3",
    name: "Dr. Alok Verma",
    location: "Kavi Nagar, Ghaziabad",
    rating: 5,
    treatment: "Microscopic Root Canal",
    comment: "Being a physician myself, I am extremely particular about sterilization and technology. Rekha Dental Clinic has world-class CBCT and microscopic RCT equipment. Completed my RCT in 35 mins without any pain.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop",
    verified: true
  },
  {
    id: "rev-4",
    name: "Meenakshi Chaudhary",
    location: "Vaishali, Ghaziabad",
    rating: 5,
    treatment: "Clear Aligners",
    comment: "Super smooth aligner treatment with Dr. Ankit. Transparent pricing with 0% EMI options made it very affordable for me.",
    date: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "dental-implant-cost-in-ghaziabad",
    title: "Dental Implant Cost in Ghaziabad: 2026 Price Breakdown & Types",
    category: "Dental Implants",
    readTime: "5 min read",
    date: "July 24, 2026",
    author: "Dr. Rekha Sharma",
    summary: "Discover everything about dental implant prices in Ghaziabad, single tooth vs full mouth costs, Swiss vs Korean implants, and 0% EMI options.",
    content: `
## Understanding Dental Implant Costs in Ghaziabad

Replacing a missing tooth is no longer just about aesthetics — it is crucial for maintaining your jawbone density and overall health. If you are researching **dental implant costs in Ghaziabad**, pricing typically ranges from **₹18,500 to ₹45,000 per implant**, depending on the brand, bone condition, and technology used.

### Factors Influencing Dental Implant Prices in Ghaziabad

1. **Implant Brand & Material**: Premium Swiss brands (like Straumann or Nobel Biocare) offer lifetime international warranties and faster osseointegration.
2. **3D Guided Surgery**: Utilizing 3D CBCT scans and computer-guided templates eliminates keyhole surgery risks and speeds up recovery.
3. **Crown Material**: High-translucency Zirconia crowns provide superior durability over traditional metal-fused ceramic crowns.
4. **Bone Grafting Need**: If your tooth has been missing for years, bone grafting or sinus lift procedures may be required.

### Dental Implant Price Comparison Table

| Implant Type | Brand Country | Cost Range (INR) | Warranty |
| :--- | :--- | :--- | :--- |
| Standard German / Korean | Korea / Germany | ₹18,500 - ₹24,000 | 10 Years |
| Premium Swiss Guided | Switzerland | ₹28,000 - ₹38,000 | Lifetime |
| Immediate Loading (Same Day) | Switzerland / USA | ₹35,000 - ₹48,000 | Lifetime |
| All-on-4 Full Mouth Rehabilitation | Global Standard | ₹1,65,000 / arch | Lifetime |

At **Rekha Dental Clinic, Ghaziabad**, we offer flexible 0% EMI payment options starting from **₹2,499/month**, ensuring world-class dental care is accessible to all.
    `,
    keywords: ["Dental Implant Cost in Ghaziabad", "Best Implant Dentist Ghaziabad", "Full Mouth Implants Price", "Painless Dental Implants"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b2",
    slug: "best-dentist-in-ghaziabad-guide",
    title: "How to Choose the Best Dentist in Ghaziabad: 7 Essential Criteria",
    category: "Patient Guide",
    readTime: "4 min read",
    date: "July 20, 2026",
    author: "Dr. Ankit Sharma",
    summary: "Selecting the right dental clinic in Ghaziabad can make all the difference between a painful trial and a smooth, lifelong smile solution.",
    content: `
## Selecting Top Dental Care in Ghaziabad

Finding the **best dentist in Ghaziabad** requires checking more than just distance. Advanced procedures like computer-guided implants, invisible aligners, and microscopic root canals require specialized expertise and cutting-edge technology.

### 7 Key Criteria to Evaluate:

1. **Specialist Qualifications (MDS)**: Ensure your dentist has completed a Master of Dental Surgery in Prosthodontics, Orthodontics, or Endodontics.
2. **Digital Technology**: Look for clinics equipped with **3D CBCT scanners**, intraoral cameras, and laser dental units.
3. **Sterilization Protocols**: Verify Class-B autoclave sterilization to prevent cross-contamination.
4. **Transparent Pricing**: Avoid clinics with hidden charges for X-rays or follow-up consultations.
5. **Real Patient Reviews**: Check verified Google reviews and before/after transformation galleries.
6. **Emergency Support**: Ensure 24/7 helpline availability for acute toothaches or dental trauma.
7. **Patient Comfort**: Ergonomic chairs, gentle anesthesia techniques, and reassuring bedside manner.
    `,
    keywords: ["Best Dentist in Ghaziabad", "Top Dental Clinic Indirapuram", "Dental Hospital Raj Nagar Extension"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b3",
    slug: "root-canal-treatment-guide",
    title: "Root Canal Treatment Guide: Single Sitting & 100% Painless Technology",
    category: "Root Canal",
    readTime: "6 min read",
    date: "July 15, 2026",
    author: "Dr. Meera Verma",
    summary: "Debunking root canal myths: Learn how microscopic single-sitting RCT at Rekha Dental Clinic relieves severe pain in 35 minutes.",
    content: `
## Painless Single-Sitting Micro-RCT in Ghaziabad

The fear of root canals is a thing of the past. Thanks to microscopic endodontics and computer-controlled local anesthesia, **Root Canal Treatment (RCT) in Ghaziabad** is now completely painless and completed in just one sitting.

### Why Choose Single-Sitting Micro-RCT?

- **35-Minute Completion**: No need for multiple painful injections over several weeks.
- **Microscopic Accuracy**: Dental operating microscopes illuminate tiny root canals that would otherwise be missed.
- **Laser Decontamination**: Diode lasers eradicate 99.9% of bacteria deep inside root tubules.
- **CAD/CAM Zirconia Crowns**: High-strength crowns placed immediately to prevent tooth fractures.
    `,
    keywords: ["Root Canal Ghaziabad", "Painless Root Canal Cost", "Single Sitting RCT Indirapuram"],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b4",
    slug: "smile-makeover-explained",
    title: "Smile Makeover Explained: Cost, E-Max Veneers & Digital Design",
    category: "Smile Makeover",
    readTime: "5 min read",
    date: "July 10, 2026",
    author: "Dr. Rekha Sharma",
    summary: "Step-by-step walkthrough of digital smile makeovers using ultra-thin porcelain veneers in Ghaziabad.",
    content: `
## Transform Your Smile with Digital Precision

A **Smile Makeover** combines aesthetic dentistry with facial harmony analysis to correct gaps, yellow stains, gummy smiles, and crooked teeth.

### What is Digital Smile Design (DSD)?

DSD allows patients to see a high-definition 3D preview of their final smile on a computer screen BEFORE any work begins on their teeth. You can even try on a 3D physical mock-up in your mouth!
    `,
    keywords: ["Smile Makeover Ghaziabad", "Dental Veneers Cost Ghaziabad", "Digital Smile Design"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b5",
    slug: "braces-vs-aligners-comparison",
    title: "Braces vs Clear Aligners: Which is Best for Your Smile in 2026?",
    category: "Orthodontics",
    readTime: "5 min read",
    date: "July 05, 2026",
    author: "Dr. Ankit Sharma",
    summary: "Detailed comparison between traditional metal braces, ceramic braces, and invisible clear aligners in terms of price, comfort, and duration.",
    content: `
## Comparing Teeth Alignment Solutions

Choosing between **braces and clear aligners** depends on your lifestyle, budget, and dental misalignments.

### Quick Comparison Matrix:

- **Visibility**: Clear aligners are virtually invisible; metal braces are highly noticeable.
- **Comfort**: Aligners have smooth plastic edges; braces can cause minor wire pricks.
- **Dietary Freedom**: Aligners are removed while eating, allowing you to enjoy all foods.
- **Cost in Ghaziabad**: Metal Braces (₹25k-₹35k), Ceramic Braces (₹35k-₹50k), Clear Aligners (₹35k-₹90k).
    `,
    keywords: ["Braces vs Aligners", "Invisalign Cost Ghaziabad", "Clear Aligners Indirapuram"],
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b6",
    slug: "how-to-maintain-oral-hygiene",
    title: "How to Maintain Oral Hygiene for Lifetime Healthy Smiles",
    category: "Oral Health",
    readTime: "3 min read",
    date: "June 28, 2026",
    author: "Dr. Rekha Sharma",
    summary: "Essential daily habits, correct brushing techniques, water flossing, and preventive dental tips from senior dental specialists.",
    content: `
## 5 Golden Rules for Perfect Dental Health

1. **Brush Twice Daily for 2 Minutes**: Use a soft-bristled electric toothbrush at a 45-degree angle.
2. **Floss or Water-Floss Daily**: Cleans 35% of tooth surfaces that toothbrushes cannot reach.
3. **Limit Sugary & Acidic Drinks**: Prevents enamel erosion and cavity formation.
4. **Professional Scaling Every 6 Months**: Removes hardened tartar that causes gum bleeding and bone loss.
5. **Never Ignore Bleeding Gums**: Early-stage gingivitis is 100% reversible if treated promptly.
    `,
    keywords: ["Oral Hygiene Tips", "Preventive Dental Care Ghaziabad", "Teeth Cleaning"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Where is Rekha Dental Clinic located in Ghaziabad?",
    answer: "We are conveniently located at Plot 42, Sector 14, Main Road (Opposite Swarn Jayanti Park), easily accessible from Indirapuram, Raj Nagar Extension, Vaishali, Vasundhara, and Kavi Nagar in Ghaziabad."
  },
  {
    id: "faq-2",
    category: "Implants",
    question: "Are dental implants really permanent and painless?",
    answer: "Yes! Dental implants integrate directly into your jawbone through osseointegration, giving them a 99.2% success rate and lifetime longevity. The procedure is performed under local micro-anesthesia or keyhole guided surgical templates, making it completely painless."
  },
  {
    id: "faq-3",
    category: "Costs",
    question: "Do you offer 0% EMI financing for major procedures?",
    answer: "Yes, we offer flexible 0% interest EMI options through leading healthcare finance partners. You can spread payment for dental implants, smile makeovers, and clear aligners over 3 to 12 monthly installments with zero hidden fees."
  },
  {
    id: "faq-4",
    category: "Root Canal",
    question: "Can a root canal really be completed in a single 45-minute visit?",
    answer: "Absolutely. With our advanced rotary endodontics, apex locators, and laser deinfection systems, over 95% of root canal treatments are safely completed in a single sitting without pain."
  },
  {
    id: "faq-5",
    category: "Cosmetic",
    question: "How long do porcelain veneers last for a smile makeover?",
    answer: "High-grade E-Max porcelain veneers are stain-resistant and exceptionally strong. With basic oral care and regular checkups, they last 15 to 20+ years."
  },
  {
    id: "faq-6",
    category: "Aligners",
    question: "How are clear aligners better than traditional metal braces?",
    answer: "Clear aligners are transparent, removable, and custom 3D printed. You can take them off to eat and brush comfortably, and nobody will notice you are wearing them during meetings or events."
  }
];
