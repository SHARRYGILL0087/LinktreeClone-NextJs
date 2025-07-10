import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = ({ link, handleChange, handleStart }) => {
    return (
        <footer
            className="bg-[url('/assets/footer.svg')]"
        >
            <div
                className='h-screen flex flex-col items-center justify-center'
            >
                <h1
                    className='text-7xl font-extrabold w-[70%] items-center text-violet-700'
                >Jumpstart your corner of the internet today
                </h1>
                <div className='flex gap-3 items-center mt-5 '>
                    <input onChange={handleChange} value={link} type="text" className={`text-gray-500 font-normal  text-2xl bg-white w-full px-4 py-5 rounded-xl `} />
                    <button
                        onClick={handleStart}
                        className="rounded-4xl py-5 text-lg text-black font-medium bg-yellow-300 w-[310px] mx-2 cursor-pointer "
                    >
                        Claim your Linktree
                    </button>
                </div>


            </div>

            <div className="bg-white px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    {/* Footer Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                        {/* Column 1: Company */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link href="#">The Linktree Blog</Link></li>
                                <li><Link href="#">Engineering Blog</Link></li>
                                <li><Link href="#">Marketplace</Link></li>
                                <li><Link href="#">What’s New</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Press</Link></li>
                                <li><Link href="#">Careers</Link></li>
                                <li><Link href="#">Link in Bio</Link></li>
                                <li><Link href="#">Social Good</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Community */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Community</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link href="#">Linktree for Enterprise</Link></li>
                                <li><Link href="#">2023 Creator Report</Link></li>
                                <li><Link href="#">2022 Creator Report</Link></li>
                                <li><Link href="#">Charities</Link></li>
                                <li><Link href="#">What’s Trending</Link></li>
                                <li><Link href="#">Creator Profile Directory</Link></li>
                                <li><Link href="#">Explore Templates</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Support */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link href="#">Help Topics</Link></li>
                                <li><Link href="#">Getting Started</Link></li>
                                <li><Link href="#">Linktree Pro</Link></li>
                                <li><Link href="#">Features & How-Tos</Link></li>
                                <li><Link href="#">FAQs</Link></li>
                                <li><Link href="#">Report a Violation</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Trust & Legal */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Trust & Legal</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link href="#">Terms & Conditions</Link></li>
                                <li><Link href="#">Privacy Notice</Link></li>
                                <li><Link href="#">Cookie Notice</Link></li>
                                <li><Link href="#">Trust Center</Link></li>
                                <li><Link href="#">Cookie Preferences</Link></li>
                                <li><Link href="#">Transparency Report</Link></li>
                                <li><Link href="#">Law Enforcement Access Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Buttons and Icons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Buttons */}
                        <div className="flex gap-4">
                            <Link href={'/login'}>
                                <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">Log in</button>
                            </Link>
                            <Link href={'/signup'}>
                                <button
                                    onClick={handleStart} className="px-5 py-2 bg-lime-300 text-black font-semibold rounded-md text-sm hover:bg-lime-400 cursor-pointer">
                                    Get started for free
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
