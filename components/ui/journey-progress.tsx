"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Plane } from "lucide-react"

export function JourneyProgress() {
  const [activeSection, setActiveSection] = useState("hero")
  const sections = ["hero", "about", "projects", "skills", "education", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="h-[300px] w-0.5 bg-gray-700 relative">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          animate={{
            top: `${(sections.indexOf(activeSection) / (sections.length - 1)) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="relative -left-[9px] -top-[9px]">
            <Plane className="h-5 w-5 text-purple-500 rotate-90" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
