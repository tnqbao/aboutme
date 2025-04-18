"use client"

import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, FileText, ArrowRight } from "lucide-react"

export function ProjectTabs() {
  return (
      <Tabs defaultValue="gauphim" className="mt-6">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800/70">
          <TabsTrigger
              value="gauphim"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
          >
            Gau Phim
          </TabsTrigger>
          <TabsTrigger
              value="gautruyen"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
          >
            Gau Truyen
          </TabsTrigger>
          <TabsTrigger
              value="services"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
          >
            Services
          </TabsTrigger>
        </TabsList>
        <TabsContent value="gauphim" className="space-y-4 mt-4">
          <div className="rounded-lg border border-gray-700 p-4 bg-gray-800/30">
            <div className="aspect-video w-full overflow-hidden rounded-md mb-4 bg-gray-950 relative">
              <iframe
                  src="https://gauphim.daudoo.com"
                  title="Gau Phim Website"
                  className="w-full h-full absolute inset-0 border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
            <h4 className="mb-2 font-medium text-white text-lg">Gau Phim Platform</h4>
            <p className="text-gray-300 mb-4">
              Movie streaming platform with a modern UI and robust backend services. Features include user authentication,
              content management, and a responsive design for all devices.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <Link
                  href="https://github.com/tnqbao/gauphim-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="mr-1 h-4 w-4" />
                Repository
              </Link>
              <Link
                  href="https://gauphim.daudoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
              <Link
                  href="https://nzs2rc26yh.apidog.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <FileText className="mr-1 h-4 w-4" />
                API Documentation
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-gray-900/50 p-3 rounded-md">
                <div className="text-xs text-gray-400">Monthly Users</div>
                <div className="text-xl font-bold text-white">10,000+</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-md">
                <div className="text-xs text-gray-400">Content Library</div>
                <div className="text-xl font-bold text-white">500+ titles</div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="gautruyen" className="space-y-4 mt-4">
          <div className="rounded-lg border border-gray-700 p-4 bg-gray-800/30">
            <div className="aspect-video w-full overflow-hidden rounded-md mb-4 bg-gray-950 relative">
              <iframe
                  src="https://gautruyen.daudoo.com"
                  title="Gau Truyen Website"
                  className="w-full h-full absolute inset-0 border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
            <h4 className="mb-2 font-medium text-white text-lg">Gau Truyen Platform</h4>
            <p className="text-gray-300 mb-4">
              Comic reading platform with a user-friendly interface and comprehensive comic library. Features include
              bookmarking, reading history, and personalized recommendations.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <Link
                  href="https://github.com/tnqbao/gau_truyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="mr-1 h-4 w-4" />
                Repository
              </Link>
              <Link
                  href="https://gautruyen.daudoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
              <Link
                  href="https://nzs2rc26yh.apidog.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <FileText className="mr-1 h-4 w-4" />
                API Documentation
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-gray-900/50 p-3 rounded-md">
                <div className="text-xs text-gray-400">Monthly Readers</div>
                <div className="text-xl font-bold text-white">8,500+</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-md">
                <div className="text-xs text-gray-400">Comic Titles</div>
                <div className="text-xl font-bold text-white">300+</div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="services" className="space-y-4 mt-4">
          <div className="rounded-lg border border-gray-700 p-4 bg-gray-800/30">
            <h4 className="mb-2 font-medium text-white text-lg">Gau Account Service</h4>
            <p className="text-gray-300 mb-4">
              User account & data service with secure authentication, profile management, and data persistence.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <Link
                  href="https://github.com/tnqbao/gau_user_service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="mr-1 h-4 w-4" />
                Repository
              </Link>
              <Link
                  href="https://k0qdk86nfe.apidog.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                API Documentation
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-700 p-4 bg-gray-800/30">
            <h4 className="mb-2 font-medium text-white text-lg">Gau Notification Service</h4>
            <p className="text-gray-300 mb-4">
              SMS and Mail service for user notifications, alerts, and marketing communications.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <Link
                  href="https://github.com/tnqbao/gau_validation_service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="mr-1 h-4 w-4" />
                Repository
              </Link>
              <Link
                  href="https://nzs2rc26yh.apidog.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                API Documentation
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-700 p-4 bg-gray-800/30">
            <h4 className="mb-2 font-medium text-white text-lg">API Documentation</h4>
            <p className="text-gray-300 mb-4">
              Comprehensive API documentation for both Gau Phim and Gau Truyen services, including authentication, content
              management, and user interactions.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                <h5 className="text-white font-medium mb-2">Gau Phim API</h5>
                <p className="text-gray-300 text-sm mb-3">
                  RESTful API for movie streaming platform with endpoints for authentication, content browsing, and user
                  preferences.
                </p>
                <Link
                    href="https://nzs2rc26yh.apidog.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-green-400 hover:text-green-300 transition-colors group"
                >
                  <FileText className="mr-1 h-4 w-4" />
                  View Documentation
                  <ArrowRight className="ml-1 h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                <h5 className="text-white font-medium mb-2">Gau Truyen API</h5>
                <p className="text-gray-300 text-sm mb-3">
                  RESTful API for comic reading platform with endpoints for user management, comic browsing, and reading
                  history.
                </p>
                <Link
                    href="https://nzs2rc26yh.apidog.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-green-400 hover:text-green-300 transition-colors group"
                >
                  <FileText className="mr-1 h-4 w-4" />
                  View Documentation
                  <ArrowRight className="ml-1 h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
  )
}
