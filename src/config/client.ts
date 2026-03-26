export const client = {
  // Business Details
  name: "Taylor Tripp Landscape Design",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Winchester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01962 859458",
  email: "",
  website: "",

  // Location
  address: "Winchester",
  city: "Winchester",
  county: "",
  postcode: "",
  basedIn: "Winchester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Sophie Busk", rating: 5, text: "Taylor Tripp have always been our first ‘must-go’ choice for our landscape designer. Over the last 30 years we have tackled some quite simple and some quite elaborate projects together, most recently the new Oriental Garden at Houghton …  ", date: "2 years ago" },
    { name: "leon mead", rating: 5, text: "Richard and Nick design the most beautiful creations and give excellent personal service.  Having award winning designs from Chelsea Flower Show under their belt, they really must be one of THE go to garden and landscape design companies! …  ", date: "8 years ago" },
    { name: "Emma Hooton", rating: 5, text: "As one of the top landscape designers, Taylor Tripp and their team work seamlessly from start to finish, producing stunning results.  They have a talented team with a passion for design, always extremely professional and original in their …  ", date: "3 years ago" },
    { name: "Joe Brown", rating: 5, text: "The guys were amazing - So pleased with the project. My garden was fully taken under the control of the team. The understood exactly what I was looking for and the finish product is above and beyond my expectations. They were kind, friendly and profe", date: "2 years ago" },
    { name: "Keith Abel", rating: 5, text: "A fantastic experience from start to finish. Nick and Richard made the whole process of designing and building a large garden enjoyable, creative and the best part of restoring our home. …  ", date: "6 years ago" },
    { name: "Anna Blaxland", rating: 5, text: "I've worked with Nick and Rich for about ten years, their quality of work is of an exceptionally high standard, and all my clients have been thrilled with the final product.  Individuality, attention to detail and professionalism means I'll recommend", date: "9 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Taylor Tripp Landscape Design | Landscaper in Winchester",
    description: "Professional landscaper in Winchester. 5.0-star rated on Google. Call for a free quote.",
  },
};
