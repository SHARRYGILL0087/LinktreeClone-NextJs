'use client'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '@/lib/slices/loginSlice';
import { ToastContainer, toast } from 'react-toastify'


const Navbar = () => {
    const { data: session } = useSession()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const handleLogOut = () => {
        toast('LogOut Successfully!')
        setTimeout(() => {
            signOut();
            dispatch(logOut());
        }, 3000);
    }

    return (
        <nav
            className='bg-violet-200 fixed top-2 left-1/2 transform -translate-x-1/2 w-[99%] md:w-[85%] border border-gray-500 flex  items-center justify-between md:px-3 py-4 rounded-full shadow z-50'
        >
            <div
                className='flex gap-14'
            >
            <ToastContainer />
                <div className="logo">
                   <span className='text-xl md:text-4xl font-sans tracking-wide md:mr-4'>Linktree</span>
                </div>

                <div className=' hidden lg:flex items-center gap-2 font-mono text-black'>
                    <Link className='px-4 py-3 hover:bg-slate-100 rounded-lg' href={'#'} >Products</Link>
                    <Link className='px-4 py-3 hover:bg-slate-100 rounded-lg' href={'#'} >Templates</Link>
                    <Link className='px-4 py-3 hover:bg-slate-100 rounded-lg' href={'#'} >Marketplace</Link>
                    <Link className='px-4 py-3 hover:bg-slate-100 rounded-lg' href={'#'} >Learn</Link>
                    <Link className='px-4 py-3 hover:bg-slate-100 rounded-lg' href={'#'} >Pricing</Link>
                </div>
            </div>
            <div
                className='space-x-2'
            >

                {session || isLoggedIn ? (
                    <>
                        <Link href="/login">
                            <button onClick={handleLogOut} className="font-semibold text-lg px-5 py-3 mx-3 rounded-lg bg-slate-100 cursor-pointer ">
                                Log out
                            </button>
                        </Link>
                        <button className="font-semibold text-lg w-[150px] py-3 mr-1 rounded-4xl text-white bg-gray-950 hover:bg-gray-900 cursor-pointer">
                            <Link href="/generate">Go To Linktrees</Link>
                        </button>
                    </>
                ) : (
                    <>
                        <button className="font-semibold text-lg px-5 py-3 rounded-lg bg-slate-100 cursor-pointer">
                            <Link href="/login">Log in</Link>
                        </button>

                        <button className="font-semibold text-lg w-[150px] py-3 mr-1 rounded-4xl text-white bg-gray-950 hover:bg-gray-900 cursor-pointer">
                            <Link href="/signup">Sign up free</Link>
                        </button>
                    </>

                )}

            </div>
        </nav>
    )
}

export default Navbar
