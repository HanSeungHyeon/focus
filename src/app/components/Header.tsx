"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "../../../public/images/logo.webp";

const navLinks = [
  { href: "/", label: "MAIN" },
  { href: "/menu", label: "MENU" },
  { href: "/#story", label: "STORY" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Header({ activePage = "/" }: { activePage?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logoImg} alt="FOCUS Logo" width={32} height={32} className="w-8 h-8 rounded-full" />
          <div className="text-2xl font-black tracking-tighter text-white">FOCUS</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-white/60">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`hover:text-white transition-colors ${link.href === activePage ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-[100px] hidden md:block" />

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-[65px] left-0 right-0 z-50 md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
            >
              <div className="flex flex-col items-center py-8 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-bold tracking-[0.15em] transition-colors ${
                      link.href === activePage ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
