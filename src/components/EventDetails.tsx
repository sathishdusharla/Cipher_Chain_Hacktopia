import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Laptop } from 'lucide-react';

export function EventDetails() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Event Details
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Calendar className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Date</h3>
                <p className="text-gray-300">December 13th, 2024</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Clock className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Time</h3>
                <p className="text-gray-300">9:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <MapPin className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Venue</h3>
                <p className="text-gray-300">Seminar Hall, G - Block</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Users className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Eligibility</h3>
                <ul className="text-gray-300 list-disc list-inside">
                  <li>Open 1st, 2nd, 3rd Year Students</li>
                  <li>Team Size 1 - 3 </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Laptop className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Requirements</h3>
                <ul className="text-gray-300 list-disc list-inside">
                  <li>Bring Your Own Laptop</li>
                  <li>Student ID card</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-800/50 p-6 rounded-xl border border-gray-700 overflow-hidden">
               <img src="/ey.png" alt="Event Image" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
