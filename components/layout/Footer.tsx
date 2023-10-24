"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-16 text-xs text-gray-400">
      Made with
      <Link
        href="https://nextjs.org/"
        className="pl-1 text-white hover:text-gray-400"
      >
        Next.js
      </Link>
      ,
      <Link
        href="https://tailwindcss.com/"
        className="px-1 text-white hover:text-gray-400"
      >
        Tailwind CSS
      </Link>
      , and
      <Link
        href="https://github.com/"
        className="pl-1 text-white hover:text-gray-400"
      >
        GitHub API
      </Link>
      .
    </footer>
  );
};

export default Footer;
