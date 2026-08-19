import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Check } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative py-12 sm:py-16 border-t border-slate-800/60 bg-slate-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 p-6 sm:p-10 lg:p-12 text-center backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-[110px] rounded-full pointer-events-none -z-10" />

          {/* Top Border Line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="max-w-2xl mx-auto space-y-4">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3.5 py-1 text-xs font-medium text-blue-300 backdrop-blur-md shadow-inner">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Get started in less than 2 minutes</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Make{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Smarter Decisions?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
              Turn your data into clear insights and meaningful action with FlowAI.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:from-blue-500 hover:to-purple-500 active:scale-95 transition-all duration-200"
              >
                <span>Start for Free</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-700 active:scale-95 transition-all duration-200 backdrop-blur-md"
              >
                <span>Explore FlowAI</span>
              </a>
            </div>

            {/* Honest Line */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
              <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="h-2.5 w-2.5" />
              </div>
              <span>No credit card required.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
