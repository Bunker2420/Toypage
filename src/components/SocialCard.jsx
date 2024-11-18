import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const SocialCard = () => {
  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center py-8 px-6 bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform transition-all duration-300">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-6 group-hover:text-pink-600 transition-colors duration-300">
          Stay Connected
        </h2>

        {/* Icons */}
        <div className="flex w-full justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/toys.store2024/profilecard/?igsh=b3RqMzZlemF4OGt6"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="relative flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-green-400 border-2 border-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568977801319&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="relative flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <Facebook className="w-6 h-6" />
            <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-green-400 border-2 border-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="relative flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <Twitter className="w-6 h-6" />
            <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-green-400 border-2 border-white" />
          </a>
          <a
            href="mailto:toyspaget@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="relative flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-teal-500 text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
            <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-green-400 border-2 border-white" />
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-600 mb-4 px-4 text-center group-hover:text-gray-800 transition-colors duration-300">
          Follow us on social media and stay updated with the latest toys and offers!
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
