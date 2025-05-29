import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock, MessageSquare, Facebook } from "lucide-react";
import { FaPinterestP } from "react-icons/fa6";

export const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: FaPinterestP, href: "#", label: "Pinterest", isCustom: true },
    { icon: MessageSquare, href: "#", label: "WhatsApp" },
];

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
]

export const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
];

export const services = [
    { href: "#services", label: "Interior Design" },
    { href: "#services", label: "Home Décor Curation" },
    { href: "#services", label: "Luxury Home Makeovers" },
    { href: "#services", label: "Color & Material Consultation" },
    { href: "#services", label: "Turnkey Styling for Real Estate" },
];

export const contactInfo = [
    { icon: Phone, text: "+91-XXXXXXXXXX", label: "Phone"  },
    { icon: Mail, text: "hello@kathnicc.com", label: "Email"  },
    { icon: MapPin, text: "Available Globally", label: "Location"  },
    { icon: Clock, text: "Mon - Fri: 9:00 AM - 6:00 PM", label: "Hours"  },
];

export const testimonials = [
    {
        id: 1,
        name: "Rhea M.",
        location: "Mumbai",
        quote: "Kathnicc turned our home into a work of art. Every corner tells a story.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "David L.",
        location: "Dubai",
        quote: "From the mood boards to the final reveal, the process was seamless. It's luxury without the fuss.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "Priya & Arjun S.",
        location: "Bengaluru",
        quote: "They truly listened to what we wanted and elevated it beyond anything we imagined.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 4,
        name: "Natasha M.",
        location: "Pune",
        quote:
            "Kathnicc made our dream home a reality. Every corner reflects our taste and personality — beyond expectations.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 5,
        name: "Aman & Reema T.",
        location: "Dubai",
        quote: "Working with them was seamless and inspiring. They respected our ideas and elevated them beautifully.",
        image: "/placeholder.svg?height=100&width=100",
    },
]


export const ourServices = [
    {
        id: 1,
        title: "Interior Design",
        description:
            "Tailored interior solutions for new builds, renovations, or redesigns. We combine spatial planning, mood setting, and aesthetic harmony to create truly unique environments.",
        icon: "✦",
    },
    {
        id: 2,
        title: "Home Décor Curation",
        description:
            "From art pieces to textiles and lighting, we handpick décor that complements your space and enhances your home's character.",
        icon: "✦",
    },
    {
        id: 3,
        title: "Luxury Home Makeovers",
        description:
            "Transform your living space with full-service makeovers. We handle everything from concept to completion — including sourcing, styling, and installation — with a focus on elegance and quality.",
        icon: "✦",
    },
    {
        id: 4,
        title: "Color & Material Consultation",
        description:
            "Need help choosing the perfect palette or finishes? Our consultation service helps guide your decisions with expert insights and visual clarity.",
        icon: "✦",
    },
    {
        id: 5,
        title: "Turnkey Styling for Real Estate",
        description:
            "Selling your home? Our luxury staging service makes your property unforgettable and market-ready with elevated presentation.",
        icon: "✦",
    },
]

export const portfolioItems = [
    {
        id: 1,
        title: "Modern Minimalist Penthouse",
        location: "NYC",
        image: "/image1.jpg",
    },
    {
        id: 2,
        title: "Bohemian Luxe Villa",
        location: "Goa",
        image: "/image2.jpg",
    },
    {
        id: 3,
        title: "Classic Glamour Living Room",
        location: "London",
        image: "/image3.jpg",
    },
    {
        id: 4,
        title: "Art-Deco Inspired Makeover",
        location: "Dubai",
        image: "/image1.jpg",
    },
    {
        id: 5,
        title: "Contemporary Coastal Retreat",
        location: "Miami",
        image: "/image2.jpg",
    },
    {
        id: 6,
        title: "Scandinavian Inspired Loft",
        location: "Stockholm",
        image: "/image3.jpg",
    },
]



  // Form fields configuration
  export const contactFormFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Your name"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "your.email@example.com"
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      required: false,
      placeholder: "+91-XXXXXXXXXX"
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your project...",
      rows: 4
    }
  ]


  
export const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Color in Interiors",
    excerpt: "How different colors affect mood, perception, and behavior in your living spaces.",
    image: "/image1.jpg",
    date: "May 10, 2025",
  },
  {
    id: 2,
    title: "How to Style a Luxury Living Room",
    excerpt: "Expert tips for creating a sophisticated, inviting living space that exudes luxury.",
    image: "/image2.jpg",
    date: "April 28, 2025",
  },
  {
    id: 3,
    title: "Timeless vs. Trendy: What's Right for Your Home?",
    excerpt: "Finding the perfect balance between enduring design and contemporary trends.",
    image: "/image3.jpg",
    date: "April 15, 2025",
  },
  {
    id: 4,
    title: "Our Favorite Statement Pieces This Season",
    excerpt: "Discover the standout furniture and décor items that are making waves this season.",
    image: "/image3.jpg",
    date: "March 30, 2025",
  },
]