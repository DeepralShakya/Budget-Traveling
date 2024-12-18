import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Budget Traveling - Explore Affordable Travel Tips",
  description: "Discover budget-friendly travel tips, flight deals, and smart packing strategies to make your next trip affordable and memorable.",
  keywords: "budget travel, travel tips, affordable vacations, cheap flights, travel smart, travel gear, travel deals",
  author: "Deepral Shakya",
  robots: "index, follow", // Helps with SEO for search engines
  og: {
    title: "Budget Traveling - Explore Affordable Travel Tips",
    description: "Explore expert tips and resources for affordable travel, including flight deals and packing tips for budget-conscious travelers.",
    image: "/images/bg1.jpg", // Add a relevant image for social sharing
    site_name: "Budget Traveling",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6229661577531203" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6229661577531203"
        crossorigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
