'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/user/context/CartContext";
import { usePathname } from "next/navigation";
import { DashboardNav } from "@/components/admin/Layout/dashboard-nav";
import { NotificationBar } from "@/components/admin/Layout/NotificationBar";
import Image from "next/image";
import Link from "next/link";
import { Store } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return (
      <html lang="en">
        <body>
          <div className="flex flex-col min-h-screen">
            <NotificationBar />
            <div className="flex flex-1">
              <aside className="hidden w-64 border-r bg-background md:block">
                <div className="flex h-16 items-center border-b px-6 bg-primary/10">
                  <Link href="/admin" className="flex items-center gap-2 text-primary-foreground justify-center">
                    <Image
                      src={"/Image/Admin/logo.png"}
                      width={50}
                      height={50}
                      alt="logo"
                    />
                    <span className="font-bold text-orange-400">Prime Gurkha</span>
                  </Link>
                </div>
                <div className="px-3 py-4 h-[calc(100vh-4rem-40px)] overflow-auto">
                  <DashboardNav />
                </div>
              </aside>
              <div className="flex w-full flex-1 flex-col">
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  if (pathname.includes("vendor")) {
    return (
      <html lang="en">
        <body>
          return (
          <div className="flex flex-col min-h-screen">
            <NotificationBar />
            <div className="flex flex-1">
              <aside className="hidden w-64 border-r bg-background md:block">
                <div className="flex h-16 items-center border-b px-6 bg-primary/10">
                  <Link href="/vendor" className="flex items-center gap-2 text-primary-foreground">
                    <Image
                      src={"/Image/Admin/logo.png"}
                      width={50}
                      height={50}
                      alt="logo"
                    />
                    <span className="font-bold text-foreground">Prime Gurkha</span>
                  </Link>
                </div>
                <div className="px-3 py-4 h-[calc(100vh-4rem-40px)] overflow-auto">
                  <DashboardNav />
                </div>
              </aside>
              <div className="flex w-full flex-1 flex-col">
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
              </div>
            </div>
          </div>
          )
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
