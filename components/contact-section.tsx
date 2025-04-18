"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MotionCard } from "@/components/ui/motion-card"
import { Button } from "@/components/ui/button"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone, Send } from "lucide-react"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { useState } from "react"

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState)
      setIsSubmitting(false)
      setFormState({ name: "", email: "", message: "" })
      alert("Message sent successfully!")
    }, 1500)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full filter blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <ParallaxSection offset={20}>
          <motion.h2
            className="mb-8 text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
            variants={item}
          >
            Let's Connect
          </motion.h2>
        </ParallaxSection>

        <div className="grid gap-6 md:grid-cols-2">
          <ParallaxSection offset={15}>
            <MotionCard
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden relative"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white">Get In Touch</CardTitle>
                <CardDescription className="text-gray-400">
                  Feel free to contact me through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <a
                    href="mailto:quocbao.job106204@gmail.com"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    quocbao.job106204@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <a href="tel:+84367641617" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +84 367 641 617
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <a
                    href="https://github.com/tnqbao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    github.com/tnqbao
                  </a>
                </motion.div>

                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-sm">
                    "I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                    vision."
                  </p>
                </div>
              </CardContent>
            </MotionCard>
          </ParallaxSection>

          <ParallaxSection offset={10}>
            <MotionCard
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden relative"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-400">I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </MotionCard>
          </ParallaxSection>
        </div>
      </div>
    </motion.section>
  )
}
