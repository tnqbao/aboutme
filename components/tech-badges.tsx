"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TechBadgesProps {
  technologies: string[]
}

export function TechBadges({ technologies }: TechBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.03 }}
        >
          <Badge variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
            {tech}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}
