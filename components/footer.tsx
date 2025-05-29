import { contactInfo, quickLinks, services, socialLinks } from "@/lib/constants";

export default function Footer() {

  const renderSocialLink = (social: any) => {
    const IconComponent = social.icon;
    return (
      <a
        key={social.label}
        href={social.href}
        className="text-white text-sm sm:text-base transition-colors hover:scale-125"
        aria-label={social.label}
      >
        <IconComponent size={20} />
      </a>
    );
  };

  const renderNavLink = (link: any) => (
    <li key={link.label}>
      <a
        href={link.href}
        className="text-white/70 hover:text-white text-sm sm:text-base transition-colors hover:scale-125"
      >
        {link.label}
      </a>
    </li>
  );

  const renderContactItem = (contact: any) => {
    const IconComponent = contact.icon;
    return (
      <li key={contact.text} className="text-white/70 text-sm sm:text-base flex flex-col sm:flex-row justify-start items-start gap-2">
        <IconComponent size={18} />
        <span className="text-wrap">{contact.text}</span>
      </li>
    );
  };

  return (
    <footer className="bg-[#3C3530] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-white/80 font-semibold text-base mb-6">
              Luxury interior design for discerning clients. We transform spaces into timeless works of art.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 px-4 sm:px-2">
              {socialLinks.map(renderSocialLink)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-base font-medium mb-4 underline underline-offset-4">Quick Links</div>
            <ul className="space-y-2">
              {quickLinks.map(renderNavLink)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-base font-medium mb-4 underline underline-offset-4">Services</div>
            <ul className="space-y-2">
              {services.map(renderNavLink)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-base font-medium mb-4 underline underline-offset-4">Contact</div>
            <ul className="space-y-2">
              {contactInfo.map(renderContactItem)}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/50 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Kathnicc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}