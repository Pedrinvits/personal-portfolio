import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";
import WebstreamsImage from '../../../public/json.png'
import ShopImage from '../../../public/shop.png'
import BarberImage from '../../../public/barber.png'
import MailImage from '../../../public/mail.png'
import Link from "next/link";

const Projects = () => {
    return ( 
        <section className="max-w-3xl px-0 md:px-4 mt-20">
            <div className="bg-zinc-100 p-6 rounded-2xl">
                <h3 className="font-medium text-slate-800">Side Projects</h3>
                <p className="leading-7 text-slate-500">Discover side projects I have been working on</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-md shadow-slate-200 justify-around">
                        <Image src={ShopImage} alt="" quality={100} className="rounded-2xl h-[100px] object-cover" />
                        <h4 className="text-base font-medium text-slate-800">Gaming e-commerce</h4>
                        <p  className="mt-1 text-sm text-slate-500">Full e-commerce integrated with stripe</p>
                        <div className="flex w-full items-center justify-between">
                            <div className="rounded-full px-2 py-1 bg-gray-100"><span className="block text-sm font-semibold text-gray-700">Next js</span></div>
                            <Link href="https://github.com/Pedrinvits/FSW-SHOP" className="inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank">
                                <span className="text-xs font-normal text-slate-500">View on GitHub</span> 
                                <TbExternalLink color="gray"size={14}/>
                            </Link>
                        </div>
                    </article>
                    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-md shadow-slate-200 justify-around">
                        <Image src={BarberImage} alt="" quality={100} className="rounded-2xl h-[100px] object-cover" />
                        <h4 className="text-base font-medium text-slate-800">Barbershop scheduling system</h4>
                        <p  className="mt-1 text-sm text-slate-500">Some features such as Appointment Scheduling Service Selection</p>
                        <div className="flex w-full items-center justify-between">
                            <div className="rounded-full px-2 py-1 bg-gray-100"><span className="block text-sm font-semibold text-gray-700">Next js</span></div>
                            <Link href="https://github.com/Pedrinvits/BarberShop" className="inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank">
                                <span className="text-xs font-normal text-slate-500">View on GitHub</span> 
                                <TbExternalLink color="gray" size={14}/>
                            </Link>
                        </div>
                    </article>
                    <article className="flex h-fit flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-md shadow-slate-200 justify-around">
                        <Image src={WebstreamsImage} quality={100} alt="" className="rounded-2xl h-[100px] object-cover" />
                        <h4 className="text-base font-medium text-slate-800">Webstreams Api</h4>
                        <p  className="mt-1 text-sm text-slate-500">Consuming 100gb on frontend using Node Webstreams</p>
                        <div className="flex w-full items-center justify-between">
                            <div className="rounded-full px-2 py-1 bg-green-100"><span className="block text-sm font-semibold text-green-700">Node js</span></div>
                            <Link href="https://github.com/Pedrinvits/WebstreamsNode" className="inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank">
                                <span className="text-xs font-normal text-slate-500">View on GitHub</span> 
                                <TbExternalLink color="gray" size={14}/>
                            </Link>
                        </div>
                    </article>
                    <article className="flex min-h-fit flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-md shadow-slate-200 justify-around">
                        <Image src={MailImage} quality={100} alt="" className="rounded-2xl h-[100px] object-cover" />
                        <h4 className="text-base font-medium text-slate-800">Trigger mail Api</h4>
                        <p  className="mt-1 text-sm text-slate-500">Email trigger microservice using SOLID</p>
                        <div className="flex w-full items-center justify-between">
                            <div className="rounded-full px-2 py-1 bg-blue-100"><span className="block text-sm font-semibold text-blue-700">Typescript</span></div>
                            <Link href="https://github.com/Pedrinvits/solidApi" className="inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2" target="_blank">
                                <span className="text-xs font-normal text-slate-500">View on GitHub</span> 
                                <TbExternalLink color="gray" size={14}/>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
     );
}
 
export default Projects;