import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Sparkles,
  Users,
  Zap,
  Activity,
  ArrowUpRight,
  Send,
  Bot,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Search,
} from 'lucide-react'

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState('overview')
  const [aiQuery, setAiQuery] = useState('')
  const [aiResponse, setAiResponse] = useState(null)
  const [isAsking, setIsAsking] = useState(false)

  const samplePrompts = [
    "What's driving revenue growth this month?",
    'Summarize potential risks for Q3',
    'Which channel has the highest conversion?',
  ]

  const handleAskAi = (promptText) => {
    const query = promptText || aiQuery
    if (!query.trim()) return

    setAiQuery(query)
    setIsAsking(true)
    setAiResponse(null)

    setTimeout(() => {
      setIsAsking(false)
      if (query.toLowerCase().includes('risk') || query.toLowerCase().includes('q3')) {
        setAiResponse({
          title: 'Q3 Risk Analysis',
          text: 'Paid acquisition CAC increased by 6% last week. Recommended action: Shift 15% budget to organic search optimization.',
          type: 'warning',
        })
      } else if (query.toLowerCase().includes('conversion') || query.toLowerCase().includes('channel')) {
        setAiResponse({
          title: 'Channel Conversion Breakdown',
          text: 'Direct referral leads converted at 6.2% (highest), followed by Organic Search at 5.1%.',
          type: 'insight',
        })
      } else {
        setAiResponse({
          title: 'Growth Drivers',
          text: 'Monthly revenue is up +18.4%, driven by a 24% increase in enterprise plan upgrades.',
          type: 'success',
        })
      }
    }, 350)
  }

  return (
    <section id="resources" className="relative py-12 sm:py-16 lg:py-20 border-t border-slate-800/60 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            SEE FLOWAI IN ACTION
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
            Your Business,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Clearly Explained.
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed">
            Explore the insights that FlowAI turns from complex data into simple, actionable information.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="rounded-2xl border border-slate-800/90 bg-slate-900/80 p-3.5 sm:p-5 lg:p-6 shadow-2xl backdrop-blur-xl">
          {/* Top Bar: Tabs & Demo Badge */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-800 pb-3.5 mb-5">
            <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-lg border border-slate-800 self-start sm:self-auto overflow-x-auto max-w-full">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'analytics', label: 'Analytics', icon: Activity },
                { id: 'insights', label: 'AI Insights', icon: Sparkles },
              ].map((tab) => {
                const TabIcon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800/80 self-end sm:self-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono">Interactive Demo Mode</span>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* 4 Compact Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                      <span>Total Revenue</span>
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white">$128,450</div>
                    <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                      <span>+18.4%</span>
                      <span className="text-slate-500 font-normal">vs last mo</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                      <span>Active Users</span>
                      <Users className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <div className="text-xl font-bold text-white">2,420</div>
                    <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-blue-400">
                      <span>+12.1%</span>
                      <span className="text-slate-500 font-normal">this week</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                      <span>Conversion</span>
                      <Activity className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <div className="text-xl font-bold text-white">4.8%</div>
                    <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-purple-400">
                      <span>+0.6%</span>
                      <span className="text-slate-500 font-normal">vs goal</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                      <span>Automations</span>
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <div className="text-xl font-bold text-white">1,280</div>
                    <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-amber-400">
                      <span>99.9%</span>
                      <span className="text-slate-500 font-normal">uptime</span>
                    </div>
                  </div>
                </div>

                {/* Chart & Activity Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-8 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xs font-bold text-white">Revenue & Trend Overview</h3>
                        <p className="text-[10px] text-slate-400">Multi-platform analytics</p>
                      </div>
                      <span className="text-[10px] text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                        Jan - Jun 2026
                      </span>
                    </div>

                    <div className="h-36 w-full pt-2">
                      <svg className="h-full w-full overflow-visible" viewBox="0 0 500 130" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="overviewGradCompact" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0,95 Q 100,75 200,80 T 380,35 T 500,10 L 500,130 L 0,130 Z" fill="url(#overviewGradCompact)" />
                        <path d="M 0,95 Q 100,75 200,80 T 380,35 T 500,10" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="200" cy="80" r="4" fill="#60a5fa" />
                        <circle cx="500" cy="10" r="5" fill="#38bdf8" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                      <span>Jan ($42k)</span>
                      <span>Feb ($58k)</span>
                      <span>Mar ($71k)</span>
                      <span>Apr ($89k)</span>
                      <span>May ($104k)</span>
                      <span>Jun ($128k)</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-white mb-0.5">Recent Activity</h3>
                      <p className="text-[10px] text-slate-400 mb-3">Background sync logs</p>

                      <div className="space-y-2.5">
                        <div className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                            <CheckCircle2 className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-slate-200">Shopify Sync Complete</p>
                            <span className="text-[9px] text-slate-500">2m ago</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 shrink-0">
                            <Sparkles className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-slate-200">AI Report Generated</p>
                            <span className="text-[9px] text-slate-500">45m ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-8 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xs font-bold text-white">Monthly Performance Breakdown</h3>
                        <p className="text-[10px] text-slate-400">Organic vs Paid media</p>
                      </div>
                      <div className="flex items-center gap-2.5 text-[10px]">
                        <span className="flex items-center gap-1 text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-blue-500" /> Organic
                        </span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-purple-500" /> Paid
                        </span>
                      </div>
                    </div>

                    <div className="h-44 w-full pt-2">
                      <svg className="h-full w-full overflow-visible" viewBox="0 0 500 140" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="blueGradCompact" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0,100 Q 120,75 240,55 T 360,35 T 500,15 L 500,140 L 0,140 Z" fill="url(#blueGradCompact)" />
                        <path d="M 0,100 Q 120,75 240,55 T 360,35 T 500,15" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                        <path d="M 0,120 Q 120,100 240,85 T 360,65 T 500,40" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeDasharray="4,4" />
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

                  <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                    <h3 className="text-xs font-bold text-white">Acquisition Channels</h3>

                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Organic Search</span>
                          <span className="font-semibold text-blue-400">45%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-[45%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Direct Referral</span>
                          <span className="font-semibold text-purple-400">32%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full w-[32%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Paid Ads</span>
                          <span className="font-semibold text-indigo-400">23%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full w-[23%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'insights' && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-emerald-500/30 bg-slate-950/70 p-3.5 space-y-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Opportunity</span>
                    </div>
                    <h4 className="text-xs font-bold text-white">Expand Enterprise Plan</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      24 accounts reached 85% usage limits this week.
                    </p>
                    <button type="button" className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:underline">
                      <span>Create Email Workflow</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="rounded-xl border border-blue-500/30 bg-slate-950/70 p-3.5 space-y-2">
                    <div className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-blue-400" />
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Recommendation</span>
                    </div>
                    <h4 className="text-xs font-bold text-white">Optimize Ad Spend</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Reallocate $4,000 to search campaigns for 3.2x ROI.
                    </p>
                    <button type="button" className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:underline">
                      <span>Apply Auto-Rule</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="rounded-xl border border-amber-500/30 bg-slate-950/70 p-3.5 space-y-2">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Alert Warning</span>
                    </div>
                    <h4 className="text-xs font-bold text-white">Churn Risk in Segment B</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Logins dropped 12% in user cohort registered in April.
                    </p>
                    <button type="button" className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:underline">
                      <span>View Risk Cohort</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive "Ask AI" Prompt Bar */}
          <div className="mt-5 pt-4 border-t border-slate-800/80">
            <div className="rounded-xl border border-indigo-500/30 bg-slate-950/90 p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <h4 className="text-xs font-bold text-white">Ask FlowAI Assistant (Demo)</h4>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAskAi(prompt)}
                    className="text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1 rounded-md border border-slate-800 transition-colors"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleAskAi()
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                  <input
                    type="text"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Ask FlowAI anything about your business data..."
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/90 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isAsking}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-xs font-semibold text-white hover:from-blue-500 hover:to-indigo-500 active:scale-95 transition-all disabled:opacity-50 shrink-0"
                >
                  <span>{isAsking ? 'Analyzing...' : 'Ask AI'}</span>
                  <Send className="h-3 w-3" />
                </button>
              </form>

              {aiResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 rounded-lg border border-indigo-500/20 bg-indigo-950/30 p-3 text-xs text-slate-200"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-indigo-300 mb-0.5">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{aiResponse.title}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">{aiResponse.text}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
