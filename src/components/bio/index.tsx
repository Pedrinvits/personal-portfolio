import Image from "next/image";
import { SquareArrowOutUpRight } from 'lucide-react';
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import Picture from '../../../public/me.jpeg';

const Bio = () => {
    return (
        <div className="max-w-2xl px-4">
            <header className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className="relative flex size-24 shrink-0 overflow-hidden rounded-full border border-white shadow-md shadow-slate-200">
                        <Image src={Picture} alt="pedro photo" className="object-cover w-full h-full" />
                    </div>
                    <div>
                        <h1 className="flex scroll-m-20 text-2xl font-semibold tracking-tight">Pedro Vitor Mantovani</h1>
                        <p className="text-sm text-slate-500">Full stack software developer</p>
                    </div>
                </div>
                <section className="space-y-2">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-slate-800">About</h3>
                        <p className="leading-7 text-slate-500">
                            Passionate about creating innovative technological solutions, I have programming experience in Javascript, Laravel and web development with React and Next Js, and in MySQL and PostgreSQL databases. I am hard-working, self-motivated and quick to learn new skills. Techs that I often use:
                            <code className="rounded-md bg-zinc-100 px-1 py-0.5 text-sm mr-1">Nest Js</code>
                            <code className="rounded-md bg-zinc-100 px-1 py-0.5 text-sm ml-1">Laravel</code>
                            <code className="rounded-md bg-zinc-100 px-1 py-0.5 text-sm ml-1">React Native</code>
                            <code className="rounded-md bg-zinc-100 px-1 py-0.5 text-sm ml-1">Jest</code>
                            <code className="rounded-md bg-zinc-100 px-1 py-0.5 text-sm ml-1">PostgresSQL</code>
                        </p>
                        <ul className="mt-1 flex flex-wrap items-start gap-1.5">
                            <li>
                                <a  href="https://www.linkedin.com/in/pedro-vitor-mantovani/" className="not-prose inline-flex items-center space-x-1.5 rounded-md border border-slate-200 px-2 py-1 text-sm font-medium shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank" title="Linkedin">
                                    <IoLogoLinkedin size={20}/>
                                    <span className="not-prose text-black">Pedro</span>
                                    <span className="not-prose text-xs font-normal text-slate-500">Linkedin</span>
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