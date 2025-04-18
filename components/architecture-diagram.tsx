"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ArchitectureDiagram() {
  const [isAnimating, setIsAnimating] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <Card className="p-6 border-gray-700 bg-gray-800/30 overflow-hidden relative">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">System Architecture</h3>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10"
          onClick={() => setIsAnimating(!isAnimating)}
        >
          {isAnimating ? "Pause Animation" : "Resume Animation"}
        </Button>
      </div>

      <div className="relative h-[400px] w-full">
        <motion.div
          className="absolute inset-0"
          variants={containerVariants}
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
        >
          {/* Static Image Version */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ipud1tnwLM3A6wwIpcuXvsctiDWfuO.png"
            alt="System Architecture Diagram"
            className="w-full h-full object-contain"
          />

          {/* Interactive SVG Version - Uncomment to use instead of static image */}
          {/* <svg viewBox="0 0 800 400" className="w-full h-full">
            <motion.path
              d="M100,200 L200,200"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M200,200 L300,200"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M300,200 L400,200"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M400,150 L500,150"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M400,200 L500,200"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M400,250 L500,250"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M500,150 L600,150"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M500,200 L600,200"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M500,250 L600,250"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M600,150 L700,150"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M600,200 L700,200"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M600,250 L700,250"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />

            <motion.g variants={itemVariants}>
              <circle cx="100" cy="200" r="30" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="70" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <circle cx="200" cy="200" r="30" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="170" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Cloud className="h-6 w-6 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <circle cx="300" cy="200" r="30" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="270" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Server className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="370" y="170" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="370" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <ArrowRight className="h-6 w-6 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="470" y="120" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="470" y="120" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="470" y="170" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="470" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Server className="h-6 w-6 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="470" y="220" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="470" y="220" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="570" y="120" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="570" y="120" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="570" y="170" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="570" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="570" y="220" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="570" y="220" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="670" y="120" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="670" y="120" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="670" y="170" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="670" y="170" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <rect x="670" y="220" width="60" height="60" rx="5" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="670" y="220" width="60" height="60">
                <div className="flex items-center justify-center h-full">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
              </foreignObject>
            </motion.g>

            <motion.g variants={itemVariants}>
              <circle cx="100" cy="150" r="20" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
              <foreignObject x="80" y="130" width="40" height="40">
                <div className="flex items-center justify-center h-full">
                  <Smartphone className="h-4 w-4 text-cyan-400" />
                </div>
              </foreignObject>
            </motion.g>
          </svg> */}
        </motion.div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-400">
          This architecture diagram shows how our microservices communicate via HTTPS and gRPC APIs. The system includes
          frontend applications, backend services, and database components, all containerized with Docker and
          orchestrated for high availability.
        </p>
      </div>
    </Card>
  )
}
