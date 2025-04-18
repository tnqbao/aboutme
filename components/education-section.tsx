"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MotionCard } from "@/components/ui/motion-card"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function EducationSection() {
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
      id="education"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <ParallaxSection offset={20}>
          <motion.h2
            className="mb-8 text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
            variants={item}
          >
            Education & Learning Journey
          </motion.h2>
        </ParallaxSection>

        <ParallaxSection offset={15}>
          <MotionCard
            className="border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden relative"
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 rounded-full bg-purple-500/10">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">Duy Tan University</CardTitle>
                    <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">5/2024 - Present</Badge>
                  </div>
                  <CardDescription className="text-gray-400">Software Engineering of Majoring (CMU)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-purple-500 text-purple-400 flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  GPA: 3.71
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="p-1.5 rounded-full bg-cyan-500/10 h-fit">
                    <BookOpen className="h-4 w-4 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">
                    Complete the core courses, algorithms, and computational subjects proficiently
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="p-1.5 rounded-full bg-purple-500/10 h-fit">
                    <BookOpen className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    Good foundational knowledge and apply it effectively to major projects or academic assignments
                  </p>
                </div>
              </div>
            </CardContent>
          </MotionCard>
        </ParallaxSection>
      </div>
    </motion.section>
  )
}
