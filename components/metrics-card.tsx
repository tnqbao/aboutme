import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface MetricsCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}

export function MetricsCard({ title, value, description, icon }: MetricsCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-white flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-400 mt-1">{description}</div>
      </CardContent>
    </Card>
  )
}
