import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./session/sessionWrapper";
import ReduxProvider from "./reduxprovider/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitTree - Your favorite link sharing site ",
  description: "Share your links, socials, projects, and more — all in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
