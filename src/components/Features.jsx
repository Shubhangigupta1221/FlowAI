import { motion } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Bot,
  User,
  Zap,
} from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="relative py-12 sm:py-16 lg:py-20 border-t border-slate-800/60 bg-slate-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-blue-400" />
            <span>AI Feature Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
            Everything Your Data Has Been{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Trying to Tell You
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed">
            FlowAI doesn't just show you numbers. It helps you understand what they mean and what to do next.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          
          {/* FEATURE 1 — AI Insights (Large Bento Card: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="mb-4">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-3 shadow-sm">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                AI That Understands Your Data
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
                Ask questions in plain language and get clear insights without digging through spreadsheets.
              </p>
            </div>

            {/* Mock AI Conversation UI Preview */}
            <div className="rounded-xl border border-slate-800/90 bg-slate-950/80 p-3 space-y-2.5">
              <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800/60 pb-1.5">
                <span className="flex items-center gap-1 font-mono text-slate-400">
                  <Bot className="h-3 w-3 text-blue-400" /> Natural Language AI Query
                </span>
                <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Live Response
                </span>
              </div>

              {/* User Bubble */}
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl rounded-tr-none px-3 py-1.5 text-xs text-slate-200">
                  <p className="font-medium text-blue-200 text-[11px]">"Why did revenue drop this month?"</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 text-[10px] shrink-0">
                  <User className="h-3 w-3" />
                </div>
              </div>

              {/* FlowAI Response Bubble */}
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shrink-0 shadow-sm">
                  <Sparkles className="h-3 w-3" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl rounded-tl-none p-2.5 text-[11px] space-y-1">
                  <span className="font-semibold text-indigo-300">FlowAI Assistant:</span>
                  <p className="text-slate-300 leading-snug">
                    Revenue decreased 8% primarily due to lower conversion in social ad campaigns. Direct traffic remained steady at <span className="text-emerald-400 font-semibold">+4%</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2 — Live Analytics (Medium Bento Card: 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-5 group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="mb-4">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-3 shadow-sm">
                <TrendingUp className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                See What Matters, Live
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Track your most important metrics with real-time dashboards and visual trends.
              </p>
            </div>

            {/* Live Metrics & Mini Chart */}
            <div className="rounded-xl border border-slate-800/90 bg-slate-950/80 p-3 space-y-3">
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-1.5">
                  <span className="text-[9px] text-slate-500 block">MRR</span>
                  <span className="text-xs font-bold text-white">$128.4k</span>
                  <span className="text-[9px] font-semibold text-emerald-400 flex items-center justify-center">
                    +18%
                  </span>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-1.5">
                  <span className="text-[9px] text-slate-500 block">Churn</span>
                  <span className="text-xs font-bold text-white">0.8%</span>
                  <span className="text-[9px] font-semibold text-emerald-400 flex items-center justify-center">
                    -0.2%
                  </span>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-1.5">
                  <span className="text-[9px] text-slate-500 block">ARPU</span>
                  <span className="text-xs font-bold text-white">$142</span>
                  <span className="text-[9px] font-semibold text-purple-400 flex items-center justify-center">
                    +6%
                  </span>
                </div>
              </div>

              <div className="h-16 w-full pt-1">
                <svg className="h-full w-full overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="liveGradCompact" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,50 Q 60,35 120,42 T 240,18 T 300,8 L 300,70 L 0,70 Z" fill="url(#liveGradCompact)" />
                  <path d="M 0,50 Q 60,35 120,42 T 240,18 T 300,8" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="300" cy="8" r="3.5" fill="#c084fc" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 3 — Automated Reports (Medium Bento Card: 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="lg:col-span-5 group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="mb-4">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-3 shadow-sm">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                Reports Without the Busywork
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Turn your latest data into clean, presentation-ready reports in seconds.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/90 bg-slate-950/80 p-3 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Q3_Executive_Summary.pdf</h4>
                    <span className="text-[10px] text-slate-500">Auto-generated in 1.2s</span>
                  </div>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white transition-colors">
                  <Download className="h-3.5 w-3.5" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-medium text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="h-2.5 w-2.5" /> Compiled
                  </span>
                  <span>100% Ready</span>
                </div>
                <div className="h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 4 — Smart Recommendations (Wide Bento Card: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="lg:col-span-7 group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="mb-4">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 shadow-sm">
                <Zap className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                From Insight to Action
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
                FlowAI highlights opportunities and potential problems so your team knows what deserves attention.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-emerald-500/30 bg-slate-950/80 p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                    High Priority
                  </span>
                  <Sparkles className="h-3 w-3 text-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-white">Upgrade High-Volume Accounts</h4>
                <p className="text-[10px] text-slate-400 leading-tight">
                  24 accounts hit 85% bandwidth limit.
                </p>
                <div className="pt-0.5 flex items-center justify-between text-[10px] text-emerald-400 font-medium">
                  <span>Rec: Email Campaign</span>
                  <ArrowUpRight className="h-2.5 w-2.5" />
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-slate-950/80 p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">
                    Optimization
                  </span>
                  <AlertCircle className="h-3 w-3 text-amber-400" />
                </div>
                <h4 className="text-xs font-bold text-white">Reallocate Ad Spend</h4>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Shift $4k to search ads.
                </p>
                <div className="pt-0.5 flex items-center justify-between text-[10px] text-amber-400 font-medium">
                  <span>Rec: Shift Budget</span>
                  <ArrowUpRight className="h-2.5 w-2.5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
