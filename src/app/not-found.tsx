import { ModeToggle } from "@/components/mode-toggle";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-between sm:p-24">
      <ModeToggle />
      <section className="max-w-3xl px-0 md:px-4 mt-20">
        <div className="bg-zinc-100 dark:bg-card p-6 rounded-2xl">
          <h3 className="font-medium text-slate-800 dark:text-white text-lg">404 Page not found</h3>
          <p className="leading-7 text-slate-500 dark:text-slate-300 font-normal text-sm">Go back home</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <article className="flex flex-row gap-4 rounded-2xl dark:bg-neutral-900 dark:border-none border dark:shadow-lg border-slate-200 dark:border-secondary bg-white p-3 shadow-md shadow-slate-200" >
              <Link href={'/'}><span className="text-xs font-normal text-slate-500 dark:text-gray-500 flex items-center justify-center gap-2 hover:text-slate-500"><MoveLeft size={15} /> Home</span></Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}