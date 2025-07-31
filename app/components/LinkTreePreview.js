'use client';
import React from 'react';
import Image from 'next/image';

const LinkTreePreview = ({ data }) => {
  const { handle, avatar, description, links } = data;
  console.log(data)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4">

      {Object.keys(data).length === 0 ? (
        <div className="text-center text-gray-400 text-sm py-6">
          🚫 No Linktree present
        </div>
      ) : (
        <div className="max-w-md min-h-[500px] w-full bg-[#121212] rounded-2xl shadow-2xl p-6 text-white text-center space-y-6">
          {/* Avatar */}
          <Image
            src={avatar}
            alt={handle}
            width={24}
            height={24}
            className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700 object-cover"
          />

          {/* Handle */}
          <h2 className="text-2xl font-bold">@{handle}</h2>

          {/* Description */}
          <p className="text-gray-400 text-sm">{description}</p>

          {/* Links */}
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link._id || link.id}
                href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 transition-all duration-200 py-3 px-4 rounded-xl shadow-md border border-gray-700 hover:scale-[1.02] font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkTreePreview;
