import prisma from "@/lib/prisma";
import { ArrowRight, BarChart3, Globe, Zap } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Check if we have any projects to show a quick stat
  const projectCount = await prisma.project.count();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">S</div>
          <span className="text-xl font-bold tracking-tight">SEO<span className="text-blue-500">Magic</span></span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Keywords</a>
          <a href="#" className="hover:text-white transition-colors">Settings</a>
          <button className="btn-primary ml-2">New Project</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="space-y-6 text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <Zap size={14} />
            <span>Now with Prisma Cloud Support</span>
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
            Scale your SEO with <br />
            <span className="gradient-text">Automated Intelligence</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            The all-in-one platform for keyword tracking, content gap analysis, and automated publishing.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              Launch Dashboard <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-colors font-medium">
              View Documentation
            </button>
          </div>
        </div>

        {/* Stats / Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold">Project Monitoring</h3>
            <p className="text-zinc-400">
              You currently have <span className="text-white font-semibold">{projectCount}</span> active projects being tracked in real-time.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold">SERP Snapshots</h3>
            <p className="text-zinc-400">
              Automated tracking of keyword rankings across Google, Bing, and more.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold">Content Automation</h3>
            <p className="text-zinc-400">
              Generate content briefs and push directly to WordPress in one click.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        &copy; 2026 SEO Magic. Built with Next.js, Prisma, and Vercel.
      </footer>
    </div>
  );
}
