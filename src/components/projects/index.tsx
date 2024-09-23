"use client"
import { TbExternalLink } from "react-icons/tb";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'

type Project = {
    title: string;
    desc: string;
    link: string;
    bgcolor: string;
    textcolor: string;
    tech: string;
    image: StaticImageData;
  };

type ProjectsProps = {
ProjectList: Project[];
};

const Projects = ({ProjectList} : ProjectsProps) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const url = `${pathname}?${searchParams}`
    let width = url == '/?' ? 'max-w-3xl' : 'max-w-4xl'; 
    let grid = url == '/?' ? 'sm:grid-cols-2' : 'sm:grid-cols-3'; 
    return ( 
        <section className={`${width} px-0 md:px-4 mt-20`}>
            <div className="bg-zinc-100 dark:bg-card p-6 rounded-2xl">
                <h3 className="font-medium text-slate-800 dark:text-white text-lg">Side Projects</h3>
                <p className="leading-7 text-slate-500 dark:text-slate-300 font-normal text-base">Discover side projects I have been working on</p>
                <div className={`mt-4 grid grid-cols-1 gap-3 ${grid}`}>
                    {ProjectList.map((project)=>(
                        <article className="flex min-h-fit flex-col gap-4 rounded-2xl dark:bg-neutral-900 dark:border-none border dark:shadow-lg border-slate-200 dark:border-secondary bg-white  p-3 shadow-md  shadow-slate-200 justify-around" key={project.link}>
                        <Image src={project.image} unoptimized width={0} height={0} alt={project.title} className="rounded-2xl h-[100px] object-cover" />
                            <h4 className="text-base font-medium text-slate-800 dark:text-white">{project.title}</h4>
                            <p  className="mt-1 text-sm text-slate-500 dark:text-gray-500">{project.desc}</p>
                            <div className="flex w-full items-center justify-between">
                                <div className={`rounded-full px-2 py-1 ${project.bgcolor}`}><span className={`block text-xs font-semibold ${project.textcolor}`}>{project.tech}</span></div>
                                <Link href={project.link} className="inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank">
                                    <span className="text-xs font-normal text-slate-500 dark:text-gray-500">View on GitHub</span> 
                                    <TbExternalLink color="gray" size={14}/>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                {url == '/?' ? <p className="not-prose text-xs font-normal text-slate-500 mt-4"><Link href={'/projects'}>See all my projects</Link></p> : ''}
            </div>
        </section>
     );
}
 
export default Projects;