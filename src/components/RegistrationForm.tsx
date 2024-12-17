import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    hallTicket: '',
    email: '',
    branch: '',
    year: '',
    section: '',
    mobile: '',
    whatsappGroup: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    const data = new FormData();
    data.append('name', formData.fullName);
    data.append('mobile', formData.mobile);
    data.append('email', formData.email);
    data.append('age', formData.year);
    data.append('idNumber', formData.hallTicket);
    data.append('address', formData.branch);
    data.append('password', formData.section);
    data.append('confirmPassword', formData.whatsappGroup);

    try {
      const response = await fetch(
        '',
        {
          method: 'POST',
          body: data,
        }
      );

      const result = await response.json();
      if (result.success) {
        setMessage(result.message);
        setTimeout(() => {
          window.location.href = '/'; // Adjust the path as needed
        }, 3000);

        setFormData({
          fullName: '',
          hallTicket: '',
          email: '',
          branch: '',
          year: '',
          section: '',
          mobile: '',
          whatsappGroup: '',
        });
      } else {
        setError(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Register Now</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'fullName', label: 'Full Name', type: 'text' },
              { name: 'hallTicket', label: 'Hall Ticket Number', type: 'text' },
              { name: 'email', label: 'Email ID (@anurag.edu.in)', type: 'email' },
              { name: 'branch', label: 'Branch (ex: CSE)', type: 'text' },
              { name: 'mobile', label: 'Mobile Number', type: 'tel' },
              { name: 'section', label: 'Section', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-blue-300 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">Year</label>
              <select
                name="year"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="I">First Year</option>
                <option value="II">Second Year</option>
                <option value="III">Third Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">Joined WhatsApp Group?</label>
              <select
                name="whatsappGroup"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                value={formData.whatsappGroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://chat.whatsapp.com/IFcleHJrAfz8La97QxRmEK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 block mb-6"
            >
              Join WhatsApp Group
            </a>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 flex items-center mx-auto"
              disabled={loading}
            >
              <Send className="w-5 h-5 mr-2" />
              {loading ? 'Submitting...' : 'Submit Registration'}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {message && <p className="text-green-500 mt-4">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export { RegistrationForm };
