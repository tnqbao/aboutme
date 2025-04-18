"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MotionCard } from "@/components/ui/motion-card"
import { MotionBadge } from "@/components/ui/motion-badge"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ParallaxSection } from "@/components/ui/parallax-section"

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Golang", color: "bg-emerald-500/90" },
        { name: "C#", color: "bg-blue-500/90" },
        { name: "TypeScript", color: "bg-blue-600/90" },
      ],
      gradient: "from-purple-500/10",
    },
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", color: "bg-blue-500/90" },
        { name: "NextJS", color: "bg-black" },
        { name: "TailwindCSS", color: "bg-sky-500/90" },
        { name: "Redux", color: "bg-purple-500/90" },
      ],
      gradient: "from-cyan-500/10",
    },
    {
      title: "Backend",
      skills: [
        { name: "Golang", color: "bg-emerald-500/90" },
        { name: "Gorm", color: "bg-blue-500/90" },
        { name: "Gin", color: "bg-emerald-600/90" },
        { name: "Go-JWT", color: "bg-yellow-500/90" },
        { name: "PostgreSQL", color: "bg-blue-600/90" },
        { name: "Redis", color: "bg-red-500/90" },
      ],
      gradient: "from-purple-500/10",
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", color: "bg-orange-500/90" },
        { name: "GitHub Actions", color: "bg-gray-700" },
        { name: "Postman", color: "bg-orange-600/90" },
        { name: "Docker", color: "bg-blue-500/90" },
        { name: "Nginx", color: "bg-green-500/90" },
        { name: "Linux", color: "bg-gray-600/90" },
      ],
      gradient: "from-cyan-500/10",
    },
  ]

  return (
    <motion.section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <ParallaxSection offset={20}>
          <motion.h2
            className="mb-8 text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
            variants={item}
          >
            Skills & Expertise
          </motion.h2>
        </ParallaxSection>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <ParallaxSection key={category.title} offset={10 + index * 5}>
              <MotionCard
                className="border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden relative"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} to-transparent`}></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <MotionBadge
                        key={skill.name}
                        className={`${skill.color} hover:${skill.color.replace("/90", "")} text-white`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </MotionBadge>
                    ))}
                  </div>
                </CardContent>
              </MotionCard>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
