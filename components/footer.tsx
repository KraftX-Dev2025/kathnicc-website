import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock, MessageSquare, Facebook } from "lucide-react";
import { FaPinterestP } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#3C3530] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-serif mb-4 font-bold">Kathnicc</div>
            <p className="text-white/80 text-sm mb-6">
              Luxury interior design for discerning clients. We transform spaces into timeless works of art.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-125" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-125" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-125" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-125" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors hover:scale-125"
                aria-label="Pinterest"
              >
                <FaPinterestP size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-125" aria-label="WhatsApp">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Home Décor Curation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Luxury Home Makeovers
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Color & Material Consultation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors hover:scale-125">
                  Turnkey Styling for Real Estate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70 flex items-center gap-2">
                <Phone size={16} />
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="text-white/70 flex items-center gap-2">
                <Mail size={16} />
                <span>hello@kathnicc.com</span>
              </li>
              <li className="text-white/70 flex items-center gap-2">
                <MapPin size={16} />
                <span>Mumbai, Available Globally</span>
              </li>
              <li className="text-white/70 flex items-center gap-2">
                <Clock size={16} />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Kathnicc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}