import Image from "next/image";
import { SquareArrowOutUpRight } from 'lucide-react';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

import Picture from '../../../public/me.jpeg';

const Bio = () => {
    return (
        <div className="max-w-2xl px-4">
            <header className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="relative flex size-24 shrink-0 overflow-hidden rounded-full border-none">
                        <Image loading="lazy" unoptimized src={Picture} width={0} height={0} alt="pedro photo" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="flex scroll-m-20 text-[1.4rem] sm:text-2xl font-semibold tracking-tight">Pedro Vitor Mantovani</h1>
                        <p className="text-sm text-slate-500 dark:text-gray-500">Full stack software developer</p>
                        <div className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 w-fit">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="text-xs font-semibold text-green-700">Available for work</div>
                    </div>
                    </div>
                   
                </div>
                <section className="space-y-2">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-medium text-slate-800 dark:text-white text-lg">About</h2>
                        <p className="leading-7 text-slate-500 dark:text-gray-500">
                        Full-stack developer with 4+ years of web and back-end experience and a degree in Information Systems. Skilled in Docker, AWS, Linux, and Redis caching. Proficient in troubleshooting configuration issues and managing production deployments across various environments. Quick learner and dedicated to continuous improvement. My main development technologies that I often use:
                            <code className="rounded-md bg-zinc-100 dark:bg-card px-1 py-0.5 text-sm mr-1 ml-1">Nest Js</code>
                            <code className="rounded-md bg-zinc-100 dark:bg-card px-1 py-0.5 text-sm mr-1 ml-1">Next Js</code>
                            <code className="rounded-md bg-zinc-100 dark:bg-card px-1 py-0.5 text-sm ml-1">Laravel</code>
                            <code className="rounded-md bg-zinc-100 dark:bg-card px-1 py-0.5 text-sm ml-1">React Native</code>
                            <code className="rounded-md bg-zinc-100 dark:bg-card px-1 py-0.5 text-sm ml-1">Jest</code>
                            <code className="rounded-md bg-zinc-100 dark:bg-card px-1 py-0.5 text-sm ml-1">PostgresSQL</code>
                        </p>
                        <ul className="mt-1">
                            <li className="flex flex-wrap items-start gap-2">
                                <a href="https://www.linkedin.com/in/pedro-vitor-mantovani/" className="dark:bg-card dark:border-none dark:shadow-md not-prose inline-flex items-center space-x-1.5 rounded-md border border-slate-200 px-2 py-1 text-sm font-medium shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank" title="Linkedin">
                                    <IoLogoLinkedin size={20}/>
                                    <span className="not-prose text-black"></span>
                                    <span className="not-prose text-xs font-normal text-slate-500">Linkedin</span>
                                    <SquareArrowOutUpRight size={10} color="gray"/>
                                </a>
                                <a href="https://github.com/pedrinvits" className="dark:bg-card dark:border-none dark:shadow-md not-prose inline-flex items-center space-x-1.5 rounded-md border border-slate-200 px-2 py-1 text-sm font-medium shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank" title="Linkedin">
                                    <IoLogoGithub size={20}/>
                                    <span className="not-prose text-black"></span>
                                    <span className="not-prose text-xs font-normal text-slate-500">Github</span>
                                    <SquareArrowOutUpRight size={10} color="gray"/>
                                </a>
                                <a href="https://medium.com/@pedromantovani26" className="dark:bg-card dark:border-none dark:shadow-md not-prose inline-flex items-center space-x-1.5 rounded-md border border-slate-200 px-2 py-1 text-sm font-medium shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank" title="Linkedin">
                                    <FaMedium  size={20}/>
                                    <span className="not-prose text-black"></span>
                                    <span className="not-prose text-xs font-normal text-slate-500">Medium</span>
                                    <SquareArrowOutUpRight size={10} color="gray"/>
                                </a>
                                <a href="https://leetcode.com/u/DhzKgTqkl0/" className="dark:bg-card dark:border-none dark:shadow-md not-prose inline-flex items-center space-x-1.5 rounded-md border border-slate-200 px-2 py-1 text-sm font-medium shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank" title="Linkedin">
                                    <TbBrandLeetcode  size={20}/>
                                    <span className="not-prose text-black"></span>
                                    <span className="not-prose text-xs font-normal text-slate-500">Leet Code</span>
                                    <SquareArrowOutUpRight size={10} color="gray"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </section>
            </header>
        </div>
    );
}

export default Bio;