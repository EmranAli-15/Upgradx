import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/media/logo.svg'
import Image from 'next/image';

const NavList = () => {
    const navList = <>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
    </>
    return (
        <div className='flex flex-col justify-center mx-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="md:text-lg menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navList
                            }
                        </ul>
                    </div>
                    <div>
                        <Link href="/home" className="btn btn-ghost normal-case text-xl">
                            <Image width={96} src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="md:text-lg menu menu-horizontal px-1">
                        {
                            navList
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default NavList;