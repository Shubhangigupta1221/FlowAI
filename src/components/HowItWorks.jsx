import { motion } from 'framer-motion'
import { Database, Cpu, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Data',
      description: 'Bring your business data together from the tools and sources you already use.',
      icon: Database,
      accent: 'from-blue-500 to-cyan-400',
      badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    },
    {
      number: '02',
      title: 'Let AI Analyze',
      description: 'FlowAI analyzes your data and identifies important trends, patterns, and opportunities.',
      icon: Cpu,
      accent: 'from-indigo-500 to-purple-400',
      badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    },
    {
      number: '03',
      title: 'Take Action',
      description: 'Get clear recommendations that help your team make faster, smarter decisions.',
      icon: Rocket,
      accent: 'from-purple-500 to-pink-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 lg:py-20 border-t border-slate-800/60 bg-slate-950 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 lg:mb-14">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            HOW IT WORKS
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
            From Data to Decisions in{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Three Simple Steps
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed">
            Connect your data, let FlowAI find the patterns, and turn those insights into action.
          </p>
        </div>

        {/* Steps Grid with Thin Connecting Line */}
        <div className="relative">
          {/* Desktop Thin Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 -z-0"
          />

          {/* Mobile/Tablet Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className="block lg:hidden absolute top-10 bottom-10 left-6 w-0.5 bg-gradient-to-b from-blue-500/30 via-indigo-500/30 to-purple-500/30 -z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Icon & Number Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${step.badgeBg} shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-black tracking-wider text-slate-700 group-hover:text-slate-500 transition-colors font-mono">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line on Hover */}
                  <div className={`mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${step.accent} opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-300`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
