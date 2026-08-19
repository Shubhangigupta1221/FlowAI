import { Sparkles, ArrowRight, Play, Check } from 'lucide-react'
import DashboardPreview from './DashboardPreview'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            
            {/* 1. Announcement Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3.5 py-1 text-xs font-medium text-blue-300 backdrop-blur-md shadow-inner transition-all hover:border-blue-500/50">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>AI-powered analytics, built for modern teams</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turn Your Data{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Into Decisions.
              </span>
            </h1>

            {/* 3. Supporting Text */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              FlowAI transforms scattered business data into clear insights, automated reports, and actions your team can actually use.
            </p>

            {/* 4. CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-1">
              <a
                href="#start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:from-blue-500 hover:to-purple-500 active:scale-95 transition-all duration-200"
              >
                <span>Start for Free</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-700 active:scale-95 transition-all duration-200 backdrop-blur-md"
              >
                <Play className="h-3.5 w-3.5 fill-slate-300 text-slate-300" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* 5. Supporting Trust Line */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
              <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="h-2.5 w-2.5" />
              </div>
              <span>No credit card required.</span>
            </div>
          </div>

          {/* Right Column: Product Preview Mockup */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
