"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center mt-32 text-xs text-gray-400">
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
        className="pl-1 text-white hover:text-gray-400"
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
      .<br></br>
      Designed and coded by
      <Link
        href="https://github.com/narmanguebraun"
        className="pl-1 text-white hover:text-gray-400"
      >
        Nina Armangué Braun
      </Link>
      .
      <Link
        href="https://github.com/narmanguebraun/quick-folio"
        className="px-1 text-white hover:text-gray-400"
      >
        View source code &rarr;
      </Link>
    </footer>
  );
};

export default Footer;
