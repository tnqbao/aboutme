"use client"

import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import Link from "next/link"
import {MotionCard} from "@/components/ui/motion-card"
import {Badge} from "@/components/ui/badge"
import {CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card"
import {ExternalLink, ArrowRight} from "lucide-react"
import {ProjectMetrics} from "@/components/project-metrics"
import {TechBadges} from "@/components/tech-badges"
import {ProjectTabs} from "@/components/project-tabs"
import {ParallaxSection} from "@/components/ui/parallax-section"

export function ProjectsSection() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    }

    const technologies = [
        "TypeScript",
        "ReactJS",
        "NextJS",
        "TailwindCSS",
        "Redux",
        "Golang",
        "PostgreSQL",
        "Redis",
        "Git",
        "Github Action",
        "Postman",
        "Docker",
        "Nginx",
    ]

    return (
        <motion.section
            id="projects"
            className="py-20 md:py-32 relative overflow-hidden"
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={container}
        >
            {/* Background elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <ParallaxSection offset={20}>
                    <motion.h2
                        className="mb-8 text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
                        variants={item}
                    >
                        Experience & Projects
                    </motion.h2>
                </ParallaxSection>

                <ParallaxSection offset={15}>
                    <MotionCard
                        className="mb-12 border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden relative"
                        variants={item}
                        whileHover={{y: -5}}
                        transition={{duration: 0.3}}
                    >
                        < div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
                        <CardHeader className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <CardTitle className="text-2xl text-white">Gau Entertainment</CardTitle>
                                <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">5/2024 -
                                    Present</Badge>
                            </div>
                            <CardDescription className="text-gray-400 text-base">
                                A cutting-edge project offering free access to comics and movies using a microservices
                                architecture.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 relative z-10">
                            <p className="text-gray-300">
                                Independent containers communicate via HTTPS and gRPC APIs, ensuring robust and scalable
                                operations. The
                                platform features a modular design for easy integration, delivering a high-performance
                                and user-friendly
                                experience while maintaining quality and user satisfaction.
                            </p>

                            <ProjectMetrics/>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-semibold text-white">Technologies Used:</h3>
                                <TechBadges technologies={technologies}/>
                            </div>

                            <ProjectTabs/>
                        </CardContent>
                        <CardFooter className="relative z-10">
                            <Link
                                href="https://system-diagram.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors group"
                            >
                                <ExternalLink className="mr-1 h-4 w-4"/>
                                View System Architecture Diagram
                                <ArrowRight
                                    className="ml-1 h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1"/>
                            </Link>
                        </CardFooter>
                    </MotionCard>
                </ParallaxSection>
            </div>
        </motion.section>
    )
}
