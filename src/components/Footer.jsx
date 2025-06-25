import React from 'react';
import footerImg from '../assets/logo-footer.png'
import {NavLink} from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content py-10">
            <div className="flex flex-col items-center space-y-6">

                <div className="flex items-center border-2 border-dotted border-white px-6 py-2">
                    <img src={footerImg} alt="Law.BD Logo" className="w-10 h-10 mr-2" />
                    <h1 className="text-white text-[32px] font-extrabold tracking-normal">Law.BD</h1>
                </div>


                <ul className="flex gap-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-indigo-500 underline'
                                    : 'text-[rgba(255,255,255,0.7)] text-[18px] font-medium'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bookings"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-indigo-500 underline'
                                    : 'text-[rgba(255,255,255,0.7)] text-[18px] font-medium'
                            }
                        >
                            My-Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-indigo-500 underline'
                                    : 'text-[rgba(255,255,255,0.7)] text-[18px] font-medium'
                            }
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-indigo-500 underline'
                                    : 'text-[rgba(255,255,255,0.7)] text-[18px] font-medium'
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex gap-6">
                    <li>
                        <a href="https://www.facebook.com/share/1H74BCNxiU/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Al-AminWeb" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/md-alamin-459253275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <FaYoutube size={30} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
