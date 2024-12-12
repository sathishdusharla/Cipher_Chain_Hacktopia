import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4 text-white"
        >
          Got Queries? Reach Out to Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Our team is here to help you with any questions
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="font-semibold mb-4 text-white">Faculty Conveners</h3>
            <div className="space-y-3">
              <p className="text-gray-300">Mrs.P.Vinayasree</p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>vinayasree.cse@anurag.edu.in</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="font-semibold mb-4 text-white">Student Conveners</h3>
            <div className="space-y-3">
              <p className="text-gray-300">M.Risha Reddy</p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+918328382486</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>22eg105g34@anurag.edu.in</span>
              </div>
            </div><br></br>
              <div className="space-y-3">
              <p className="text-gray-300">A.Manish Reddy</p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+918328113373</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>22eg105b12@anurag.edu.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
