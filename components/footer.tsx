"use client"

import Link from "next/link"
import { Github, Mail, Phone, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-[#0f172a] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-50"></div>

      <div className="container relative z-10">
        <div className="py-10 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Tran Nguyen Quoc Bao</h3>
              <p className="text-sm text-gray-400">
                Fullstack / DevOps Developer based in Da Nang, Vietnam. Specializing in building exceptional digital
                experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#hero" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Projects
                </Link>
                <Link href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Skills
                </Link>
                <Link href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/tnqbao"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="mailto:quocbao.job106204@gmail.com"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Mail className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                  <span className="sr-only">Email</span>
                </motion.a>
                <motion.a
                  href="tel:+84367641617"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Phone className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                  <span className="sr-only">Phone</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © {currentYear} Tran Nguyen Quoc Bao. All rights reserved.
          </p>
          <p className="text-center text-sm leading-loose text-gray-400 md:text-right flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
