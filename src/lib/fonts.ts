import { Geist, Geist_Mono, Pacifico } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  weight: "400",
});
