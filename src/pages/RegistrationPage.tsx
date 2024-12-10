import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { RegistrationForm } from '../components/RegistrationForm';
import { Footer } from '../components/Footer';

const bannerImage = '/dechack.png';

export function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-6 border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="flex items-center hover:text-blue-300 transition-colors mb-4 md:mb-0">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex items-center justify-center h-auto mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/20"
        >
          <img src={bannerImage} alt="Banner Image" className="w-full h-auto object-contain" />
        </motion.div>
          </div>
        </div>
      </header>
      <RegistrationForm />
      <Footer clubLogo="/blockckainlogo.png" />
    </div>
  );
}
