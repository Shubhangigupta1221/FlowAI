import { motion } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Zap,
  Activity,
  ArrowUpRight,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react'

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl border border-slate-800/80 bg-slate-900/75 p-3.5 sm:p-4 shadow-xl backdrop-blur-xl transition-all"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-purple-600/15 blur-lg opacity-40" />

      {/* App Window Controls Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="hidden sm:inline-block text-[11px] text-slate-500 font-mono ml-1.5">
            flowai-dashboard-v2.app
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Live</span>
          </div>
          <button
            type="button"
            aria-label="Refresh data"
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <RefreshCw className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Main Grid Mockup */}
      <div className="space-y-3">
        {/* Row 1: 3 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
              <span>Total Revenue</span>
              <TrendingUp className="h-3 w-3 text-emerald-400" />
            </div>
            <div className="text-lg font-bold text-white">$128,450</div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
              <span>+18.4%</span>
              <span className="text-slate-500 font-normal">vs last mo</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
              <span>Active Users</span>
              <Users className="h-3 w-3 text-blue-400" />
            </div>
            <div className="text-lg font-bold text-white">2,420</div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-blue-400">
              <span>+12.1%</span>
              <span className="text-slate-500 font-normal">active now</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
              <span>Conversion</span>
              <Activity className="h-3 w-3 text-purple-400" />
            </div>
            <div className="text-lg font-bold text-white">4.8%</div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-purple-400">
              <span>+0.6%</span>
              <span className="text-slate-500 font-normal">benchmark</span>
            </div>
          </div>
        </div>

        {/* Row 2: Analytics Chart */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-xs font-bold text-slate-200">Revenue Growth Trend</h3>
              <p className="text-[10px] text-slate-500">Automated multi-channel aggregation</p>
            </div>
            <span className="text-[10px] font-medium text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
              6 Months
            </span>
          </div>

          <div className="h-24 w-full pt-1">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 400 90"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradientCompact" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,70 Q 70,50 140,55 T 280,25 T 400,8 L 400,90 L 0,90 Z"
                fill="url(#chartGradientCompact)"
              />
              <path
                d="M 0,70 Q 70,50 140,55 T 280,25 T 400,8"
                fill="none"
                stroke="#818cf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="140" cy="55" r="3.5" fill="#6366f1" />
              <circle cx="400" cy="8" r="4.5" fill="#38bdf8" />
            </svg>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>

        {/* Row 3: AI Recommendation & Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 to-slate-900/60 p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Zap className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span className="text-xs font-bold text-indigo-300">AI Recommendation</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Revenue projected +14% next quarter. Recommended action: Shift 10% ad spend to West region.
            </p>
            <button
              type="button"
              className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Apply Auto-Rule</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
              <span className="font-semibold text-slate-300">Automated Pipeline</span>
              <Activity className="h-3 w-3 text-slate-500" />
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-center justify-between text-slate-300">
                <span className="truncate flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                  Shopify data synced
                </span>
                <span className="text-slate-500 text-[10px] shrink-0">2m ago</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span className="truncate flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                  Weekly report sent
                </span>
                <span className="text-slate-500 text-[10px] shrink-0">1h ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
