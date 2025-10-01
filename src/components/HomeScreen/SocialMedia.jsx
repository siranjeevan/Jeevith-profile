import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialMedia() {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/siranjeevan', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/siranjeevan', label: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com/siranjeevan', label: 'Twitter' },
    { icon: <FaInstagram size={24} />, url: 'https://instagram.com/siranjeevan', label: 'Instagram' }
  ];

  return (
    <div className="flex flex-col gap-4 absolute right-20 top-1/2 -translate-y-1/2">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#baa794] hover:text-white transition-all duration-300 hover:scale-110 p-3 rounded-full bg-black/20 backdrop-blur-sm hover:bg-[#baa794]/20"
          title={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}