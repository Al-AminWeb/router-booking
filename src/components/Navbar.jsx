import React from 'react';
import logoImg from '../assets/logo.png'
import {NavLink} from "react-router";

const Navbar = () => {
    return (
        <>
            <div className="navbar  p-0 bg-base-100  mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>Home</li>
                            <li>My-Bookings</li>
                            <li>Blogs</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <img src={logoImg} alt=""/>
                    <p className='text-[rgba(15,15,15,0.8)] text-[32px] font-extrabold  tracking-normal '>Law.BD</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4     ">
                        <li className='text-[rgba(15,15,15,0.7)]  text-[18px] font-medium '>

                            <NavLink className={({isActive})=>(isActive ? 'text-indigo-500 underline':'')} to='/'>Home</NavLink>

                        </li>
                        <li className='text-[rgba(15,15,15,0.7)]  text-[18px] font-medium '>

                            <NavLink className={({isActive})=>(isActive ? 'text-indigo-500 underline':'')} to='/bookings'>My-Bookings</NavLink>

                        </li>
                        <li className='text-[rgba(15,15,15,0.7)]  text-[18px] font-medium '>

                            <NavLink className={({isActive})=>(isActive ? 'text-indigo-500 ':'')} to='/blog'>Blogs</NavLink>

                        </li>
                        <li className='text-[rgba(15,15,15,0.7)]  text-[18px] font-medium '>
                           <NavLink className={({isActive})=>(isActive ? 'text-indigo-500 underline':'')} to='/about'> Contacts</NavLink>

                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-full bg-[#0ea106] text-white">Contact Now</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
