import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const SocialCard = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-10 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="flex flex-col items-center w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transform transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-6">Contact Us</h2>
        <div className="flex w-full justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="bg-blue-600 text-white hover:bg-blue-700 border-2 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="bg-blue-600 text-white hover:bg-blue-700 border-2 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="bg-blue-600 text-white hover:bg-blue-700 border-2 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:support@example.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="bg-blue-600 text-white hover:bg-blue-700 border-2 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
