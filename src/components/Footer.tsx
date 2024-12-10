import { Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  clubLogo: string;
}

export function Footer({ clubLogo }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={clubLogo} alt="Club Logo" className="w-8 h-8 mr-3 object-contain" />
            <h3 className="text-xl font-bold">BlockChain Club | AU</h3>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/blockchain_au/" className="hover:text-blue-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://chat.whatsapp.com/J44kL9YY4SD4NcjGbO8bRU" className="hover:text-blue-400 transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/blockchain-club-anurag-university/posts/?feedView=all" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Blockchain Club | AU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}