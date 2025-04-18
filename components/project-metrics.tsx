import { BarChart3, Users, Activity, Clock } from "lucide-react"
import { MetricsCard } from "@/components/metrics-card"

export function ProjectMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <MetricsCard
        title="Traffic"
        value="3K+"
        description="Monthly page views"
        icon={<BarChart3 className="w-5 h-5 mr-2 text-purple-400" />}
      />
      <MetricsCard
        title="Users"
        value="180+"
        description="Monthly new users"
        icon={<Users className="w-5 h-5 mr-2 text-cyan-400" />}
      />
      <MetricsCard
        title="Events"
        value="5K+"
        description="User interactions"
        icon={<Activity className="w-5 h-5 mr-2 text-purple-400" />}
      />
      <MetricsCard
        title="Session Duration"
        value="10.21 min"
        description="User interactions"
        icon={<Clock className="w-5 h-5 mr-2 text-cyan-400" />}
      />
    </div>
  )
}
