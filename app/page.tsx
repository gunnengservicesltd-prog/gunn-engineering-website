export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-12">
      <div className="max-w-3xl rounded-3xl border border-zinc-200 bg-zinc-50 p-10 shadow-lg shadow-zinc-200/30">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
          Gunn Engineering Website
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The Next.js dev server is running and this page should be visible at
          <span className="font-semibold"> http://localhost:3000</span>.
        </p>
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm shadow-zinc-200/50">
          <p className="text-base text-zinc-600">
            Edit <code className="text-sm font-mono">app/page.tsx</code> to update the homepage content.
          </p>
        </div>
      </div>
    </main>
  );
}
