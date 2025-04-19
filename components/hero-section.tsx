"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Phone, ChevronDown } from "lucide-react"
import { ParallaxSection } from "@/components/ui/parallax-section"

export function HeroSection() {
  return (
      <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden"
      >
        {/* Background gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container relative z-10 flex flex-col items-center justify-center space-y-10 text-center">
          <ParallaxSection offset={30}>
            <motion.div
                className="mb-4 overflow-hidden rounded-full border-4 border-purple-500/30 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
              <img
                  src="https://i.imgur.com/O5lFgNz.jpeg?height=150&width=150"
                  alt="Tran Nguyen Quoc Bao"
                  width={150}
                  height={150}
                  className="h-[150px] w-[150px] object-cover relative z-10"
              />
            </motion.div>
          </ParallaxSection>

          <div className="space-y-6">
            <ParallaxSection offset={20}>
              <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                TRAN NGUYEN QUOC BAO
              </motion.h1>
            </ParallaxSection>

            <ParallaxSection offset={15}>
              <motion.p
                  className="text-xl text-gray-400 md:text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
              >
                Fullstack / DevOps Developer
              </motion.p>
            </ParallaxSection>

            <ParallaxSection offset={10}>
              <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                >
                  <Link href="https://github.com/tnqbao" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
                >
                  <Link href="mailto:quocbao.job106204@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                >
                  <Link href="tel:+84367641617">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Link>
                </Button>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>

        <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </Link>
        </motion.div>
      </section>
  )
}
