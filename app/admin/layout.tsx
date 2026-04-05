import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../main/globals.css";
import { Anek_Tamil } from 'next/font/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
