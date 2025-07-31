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
            className='bg-violet-200 fixed top-2 left-1/2 transform -translate-x-1/2 w-[96%] sm:w-[85%] border border-gray-500 flex  items-center justify-between md:px-3 py-3 sm:py-4 rounded-full shadow z-50'
        >
            <div
                className='flex gap-14'
            >
                <ToastContainer />
                <div className="logo">
                    <span className='text-xl font-bold md:text-4xl font-sans tracking-wide md:mr-4'>Linktree</span>
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
                    <div className='flex gap-2 '>
                        <button onClick={handleLogOut} className="font-semibold  text-sm sm:text-lg px-5 py-1.5 sm:py-3 mx-3 rounded-lg bg-slate-100 cursor-pointer ">
                            Log out
                        </button>
                        <Link
                            href="/generate"
                            className="font-semibold text-sm sm:text-lg w-fit py-1.5 text-center sm:py-3 px-1 mr-1 rounded-4xl text-white bg-gray-950 hover:bg-gray-900 cursor-pointer"
                        >
                            Go To Linktrees
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="font-semibold text-lg px-5 py-3 rounded-lg bg-slate-100 cursor-pointer"
                        >
                            Log in
                        </Link>

                        <Link href="/signup" className="font-semibold text-lg w-[150px] py-3 px-1.5 sm:px-2.5 mr-1 rounded-lg text-white bg-gray-950 hover:bg-gray-900 cursor-pointer">
                                Sign up free
                        </Link>
                    </>

                )}

            </div>
        </nav >
    )
}

export default Navbar
