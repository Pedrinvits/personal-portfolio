import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";
import WebstreamsImage from '../../../public/json.png'
import ShopImage from '../../../public/shop.png'
import BarberImage from '../../../public/barber.png'
import MailImage from '../../../public/mail.png'
import Link from "next/link";

const ProjectList = [
    {
        title : "Gaming e-commerce",
        desc  : "Full e-commerce integrated with stripe",
        link  : "https://github.com/Pedrinvits/FSW-SHOP",
        bgcolor : "bg-gray-100",
        textcolor : "text-gray-700",
        tech  : "Next js",
        image : ShopImage

    },
    {
        title : "Barbershop scheduling system",
        desc  : "Some features such as Appointment Scheduling Service Selection",
        link  : "https://github.com/Pedrinvits/BarberShop",
        bgcolor : "bg-gray-100",
        textcolor : "text-gray-700",
        tech  : "Next js",
        image : BarberImage
    },
    {
        title : "Webstreams Api",
        desc  : "Consuming 100gb on frontend using Node Webstreams",
        link  : "https://github.com/Pedrinvits/WebstreamsNode",
        bgcolor : "bg-green-100",
        textcolor : "text-green-700",
        tech  : "Node js",
        image : WebstreamsImage
    },
    {
        title : "Trigger mail Api",
        desc  : "Email trigger microservice using SOLID",
        link  : "https://github.com/Pedrinvits/solidApi",
        bgcolor : "bg-blue-100",
        textcolor : "text-blue-700",
        tech  : "Typescript", 
        image : MailImage
    }
]
   
        


const Projects = () => {
    return ( 
        <section className="max-w-3xl px-0 md:px-4 mt-20">
            <div className="bg-zinc-100 dark:bg-card p-6 rounded-2xl">
                <h3 className="font-medium text-slate-800 dark:text-white text-lg">Side Projects</h3>
                <p className="leading-7 text-slate-500 dark:text-slate-300 font-normal text-base">Discover side projects I have been working on</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {ProjectList.map((project)=>(
                        <article className="flex min-h-fit flex-col gap-4 rounded-2xl dark:bg-neutral-900 dark:border-none border dark:shadow-lg border-slate-200 dark:border-secondary bg-white  p-3 shadow-md  shadow-slate-200 justify-around" key={project.link}>
                        <Image src={project.image} unoptimized alt={project.title} className="rounded-2xl h-[100px] object-cover" />
                            <h4 className="text-base font-medium text-slate-800 dark:text-white">{project.title}</h4>
                            <p  className="mt-1 text-sm text-slate-500 dark:text-gray-500">{project.desc}</p>
                            <div className="flex w-full items-center justify-between">
                                <div className={`rounded-full px-2 py-1 ${project.bgcolor}`}><span className={`block text-sm font-semibold ${project.textcolor}`}>{project.tech}</span></div>
                                <Link href={project.link} className="inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank">
                                    <span className="text-xs font-normal text-slate-500 dark:text-gray-500">View on GitHub</span> 
                                    <TbExternalLink color="gray" size={14}/>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Projects;