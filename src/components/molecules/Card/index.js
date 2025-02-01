import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="p-2 shadow-xl bg-slate-100 rounded-lg">{children}</div>
    </>
  );
};

function Header({ image, link = "#", className = "rounded-t-lg" }) {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt="image-card"
        width={400}
        height={400}
        className={className}
      />
    </Link>
  );
}

function Footer({ link = "#", title, description }) {
  return (
    <div className="px-5 pb-5">
      <Link href={link}>
        <h3 className="text-xl text-slate-800 font-semibold">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-3">
          {description}
        </p>
      </Link>
    </div>
  );
}

Card.Header = Header;
Card.Footer = Footer;
export default Card;
