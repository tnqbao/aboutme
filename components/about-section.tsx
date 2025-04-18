"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { ParallaxSection } from "@/components/ui/parallax-section"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full filter blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:gap-12">
          <div className="flex-1 space-y-8">
            <ParallaxSection offset={20}>
              <motion.h2
                className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
                variants={item}
              >
                About My Journey
              </motion.h2>
            </ParallaxSection>

            <div className="space-y-6">
              <ParallaxSection offset={15}>
                <motion.p className="text-gray-400 text-lg leading-relaxed" variants={item}>
                  I'm a Fullstack/DevOps Developer with{" "}
                  <span className="text-purple-400 font-semibold">6 months of professional experience</span> in building
                  microservices architecture and developing web applications. I'm passionate about creating robust,
                  scalable solutions that deliver exceptional user experiences.
                </motion.p>
              </ParallaxSection>

              <ParallaxSection offset={10}>
                <motion.p className="text-gray-400 text-lg leading-relaxed" variants={item}>
                  My projects have real-world impact with active users and growing traffic. I specialize in creating
                  high-performance applications using modern technologies like Golang, TypeScript, and Docker. Currently
                  studying Software Engineering at Duy Tan University with a strong academic record (GPA: 3.71).
                </motion.p>
              </ParallaxSection>
            </div>

            <ParallaxSection offset={5}>
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" variants={item}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 transform transition-transform hover:scale-105 duration-300">
                  <MapPin className="h-6 w-6 text-purple-400 mb-2" />
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Da Nang, Vietnam</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 transform transition-transform hover:scale-105 duration-300">
                  <Briefcase className="h-6 w-6 text-cyan-400 mb-2" />
                  <h3 className="text-white font-medium mb-1">Experience</h3>
                  <p className="text-gray-400 text-sm">3+ months professional</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 transform transition-transform hover:scale-105 duration-300">
                  <GraduationCap className="h-6 w-6 text-purple-400 mb-2" />
                  <h3 className="text-white font-medium mb-1">Education</h3>
                  <p className="text-gray-400 text-sm">Duy Tan University</p>
                </div>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection offset={5}>
              <motion.div className="flex flex-wrap gap-4 mt-6" variants={item}>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 transition-all duration-300 hover:scale-105"
                >
                  <Link href="#projects">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                >
                  <Link href="https://driver.daudoo.com/Tran_Nguyen_Quoc_Bao_FullstackDevops_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
