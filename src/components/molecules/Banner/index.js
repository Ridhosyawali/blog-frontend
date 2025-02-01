import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = ({ children }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

function Header({ image, link = "#", className }) {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt="image-card"
        width={400}
        height={400}
        className={`${className}`}
      />
    </Link>
  );
}

function footer({ link = "#", title, description, className }) {
  return (
    <div className={`px-5 pb-5 ${className}`}>
      <Link href={link}>
        <h3 className="text-xl text-slate-800 font-semibold hover:underline">
          {title}
        </h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-3 ">
          {description}
        </p>
      </Link>
    </div>
  );
}

Banner.Header = Header;
Banner.footer = footer;
export default Banner;
