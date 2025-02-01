import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ChevronRight, Globe, Shield, Truck, Snowflake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-30">
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjMzcz..." animate-slide" /> */}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="magical-gradient p-6 rounded-xl">
              <Snowflake className="h-8 w-8 text-white mb-4" />
              <h3 className="text-white text-xl font-bold mb-4">SKI XPRESS</h3>
              <p className="text-gray-300">
                Ihr vertrauenswürdiger Partner für hochwertige Skiausrüstung und erstklassigen Service.
              </p>
            </div>
            <div className="space-y-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Musterstraße 123, 12345 Stadt</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3" />
                <span>+49 123 456789</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@skixpress.de</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Hilfe / Support', 'Versandbedingungen', 'Widerrufsrecht', 'AGB'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Unsere Vorteile</h3>
            <div className="space-y-6">
              {[
                { icon: Globe, title: 'Weltweiter Versand', desc: 'Lieferung in über 50 Länder' },
                { icon: Shield, title: 'Sicher Einkaufen', desc: '256-bit SSL Verschlüsselung' },
                { icon: Truck, title: 'Express Lieferung', desc: 'Versand innerhalb 24h' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start">
                  <div className="p-2 bg-white/10 rounded-lg mr-4">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{title}</h4>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Angebote.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="magical-button w-full">
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-6">
              <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal" className="h-8 opacity-75 hover:opacity-100 transition-opacity" />
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" alt="DHL" className="h-8 opacity-75 hover:opacity-100 transition-opacity" />
              <img src="https://gls-group.com/assets/images/logo-gls.svg" alt="GLS" className="h-8 opacity-75 hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-center mt-6 lg:mt-0">
              <p className="text-gray-400 text-sm">
                © 2024 Ski Xpress. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
