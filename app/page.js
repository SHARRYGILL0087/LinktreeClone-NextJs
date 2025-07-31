'use client'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";


export default function Home() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const { data: session } = useSession()
  const router = useRouter()
  const [link, setLink] = useState('linktr.ee/')



  const handleChange = (e) => {
    const { value } = e.target
    setLink(value)
  }

  const handleStart = () => {
    router.push('/signup')
  }

  return (
    <div>
      <Navbar />
      <main>
        <section
          className="bg-[url('/assets/bg.svg')] min-h-screen px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center"
        >
          <div
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <h1
              className="font-extrabold text-3xl sm:text-5xl md:text-7xl text-violet-400"
            >Everything you are. In one, simple link in bio.
            </h1>
            <p
              className="text-white mt-3 text-base sm:text-lg md:text-xl"
            >
              Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>
            <div className="flex flex-col sm:flex-row items-center mt-8 gap-4">
              <input type="text" onChange={handleChange} value={link} className="text-gray-400 bg-white text-base sm:text-lg md:text-xl w-full sm:w-1/2 rounded-lg px-4 py-3 sm:py-5 " />
              <button
                onClick={handleStart}
                className="rounded-4xl py-3 sm:py-5 text-base sm:text-lg text-black font-medium bg-purple-600 w-full sm:w-1/3 mx-0 sm:mx-2 cursor-pointer "
              >
                Claim your Linktree
              </button>
            </div>
          </div>
        </section>
        <section
          className="bg-[url('/assets/bg1.svg')] min-h-screen px-4 sm:px-8 md:px-12 flex items-center justify-center"
        >
          <div
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <h1
              className="font-extrabold text-3xl sm:text-5xl md:text-7xl text-pink-400"
            >Create and customize your Linktree in minutes
            </h1>
            <p
              className="text-white mt-3 text-base sm:text-lg md:text-xl"
            >
              Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
            </p>
            <button
              onClick={handleStart}
              className="rounded-4xl mt-8 sm:mt-12 py-3 sm:py-5 text-base sm:text-lg text-black font-medium bg-pink-600 w-full sm:w-1/3 mx-0 sm:mx-2 cursor-pointer "
            >
              Get started for free
            </button>
          </div>
        </section>
        <section
          className="bg-[url('/assets/bg2.svg')] min-h-screen px-4 sm:px-8 md:px-12 flex items-center justify-center"
        >
          <div
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <h1
              className="font-extrabold text-3xl sm:text-5xl md:text-7xl text-yellow-400"
            >Share your Linktree from your Instagram, TikTok, Twitter and other bios
            </h1>
            <p
              className="text-white mt-3 text-base sm:text-lg md:text-xl"
            >
              Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
            </p>
            <button
              onClick={handleStart}
              className="rounded-4xl mt-8 sm:mt-12 py-3 sm:py-5 text-base sm:text-lg text-black font-medium bg-green-200 w-full sm:w-1/3 mx-0 sm:mx-2 cursor-pointer "
            >
              Get started for free
            </button>
          </div>
        </section>
        <section
          className="bg-[url('/assets/bg3.svg')] min-h-screen px-4 sm:px-8 md:px-12 flex items-center justify-center"
        >
          <div
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <h1
              className="font-extrabold text-3xl sm:text-5xl md:text-7xl text-black"
            >Analyze your audience and keep your followers engaged
            </h1>
            <p
              className="text-black mt-3 text-base sm:text-lg md:text-xl"
            >
              Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
            </p>
            <button
              onClick={handleStart}
              className="rounded-4xl mt-8 sm:mt-12 py-3 sm:py-5 text-base sm:text-lg text-black font-medium bg-red-200 w-full sm:w-1/3 mx-0 sm:mx-2 cursor-pointer "
            >
              Get started for free
            </button>
          </div>
        </section>
        <section
          className="min-h-screen px-2 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-4 py-8 sm:py-16"
        >
          <div
            className="flex flex-col h-full gap-7 w-full lg:w-auto"
          >
            <div
              className="bg-pink-200 rounded-4xl px-4 sm:px-7 py-4 sm:py-8 w-full lg:w-[670px]"
            >
              <Image src="/assets/img1.png" width={300} height={120} alt="img1" className="h-[120px] sm:h-[180px] w-full object-contain" />
              <p className="text-xl sm:text-3xl mt-8 sm:mt-20 font-bold tracking-wide">Share your content in limitless ways in linktree.</p>
            </div>
            <div
              className="bg-yellow-300 rounded-4xl px-4 sm:px-7 py-4 sm:py-8 w-full lg:w-[670px]"
            >
              <Image width={300} height={120} src="/assets/img2.png" alt="img1" className="h-[150px] sm:h-[250px] w-full px-2 sm:px-6 object-contain" />
              <p className="text-xl sm:text-3xl mt-8 sm:mt-20 font-bold tracking-wide">{`Sell products and collect payment. It's monetization made simple.`}</p>
            </div>
          </div>
          <div
            className="bg-blue-800 rounded-4xl px-4 sm:px-7 py-4 w-full lg:w-auto"
          >
            <Image width={300} height={100} src="/assets/img3.png" alt="img1" className="h-[100px] sm:h-[70%] w-full px-2 sm:px-6 object-contain" />
            <p className="text-xl sm:text-3xl mt-8 sm:mt-20 font-bold tracking-wide text-white">Grow, own and engaged your audience by unifying them in one place.</p>
          </div>
        </section>

      </main>
      <Footer link={link} handleChange={handleChange} handleStart={handleStart} />
    </div>
  );
}
