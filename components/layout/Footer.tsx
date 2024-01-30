"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-center mt-16 text-xs text-gray-400">
      <div>
        <Link
          href="https://github.com/narmanguebraun/quick-folio"
          className="text-white hover:text-gray-400"
        >
          Quick-Folio
        </Link>
        , made with
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
        </Link>{" "}
        by
        <Link
          href="https://github.com/narmanguebraun"
          className="pl-1 text-white hover:text-gray-400"
        >
          Nina Armangué Braun
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
