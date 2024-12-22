'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/../public/logo.webp';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative flex items-center justify-between py-4 px-6 bg-gray-800 shadow-md z-20">
            {/* Logo Section */}
            <div className="flex items-center">
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 sm:w-16 sm:h-16 max-w-[40px] sm:max-w-none"
                    priority
                />
            </div>

            {/* Hamburger Menu Button */}
            <button
                onClick={toggleMenu}
                className="sm:hidden text-white text-2xl focus:outline-none z-30"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Navigation Links */}
            <div
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col sm:flex sm:flex-row items-center gap-4 absolute sm:static top-full left-0 right-0 bg-gray-800 sm:bg-transparent w-full sm:w-auto z-20`}
            >
                {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/catalogue", label: "Catalogue" },
                    { href: "/contact", label: "Contact Us" },
                    { href: "/login", label: "Login" },
                    { href: "/stores", label: "Stores" },
                ].map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-white font-medium px-3 py-2 rounded-md hover:bg-gray-700 cursor-pointer transition duration-300 text-center"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
