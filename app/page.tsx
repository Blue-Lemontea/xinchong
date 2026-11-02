export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <span className="rounded-full border border-zinc-300 px-4 py-1 text-xs tracking-widest text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        骨架已就绪 · SKELETON READY
      </span>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        芯宠
      </h1>

      <p className="max-w-md text-balance text-zinc-600 dark:text-zinc-400">
        AI 个性化互动桌宠 —— 一个能记住你、回应你、陪你一起成长的桌面伙伴。
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <code className="rounded bg-black/[.06] px-2 py-1 font-mono dark:bg-white/[.08]">
          pnpm dev
        </code>
        <span className="text-zinc-400">→</span>
        <span className="text-zinc-600 dark:text-zinc-400">改 app/page.tsx 开始</span>
      </div>

      <p className="text-xs text-zinc-400">
        Next.js · TypeScript · Tailwind CSS
      </p>
    </main>
  );
}
