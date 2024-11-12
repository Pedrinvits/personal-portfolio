import { StaticImageData } from 'next/image';
import ShopImage from '../../../public/shop.webp';
import BarberImage from '../../../public/barber.webp';
import WebstreamsImage from '../../../public/json.webp';
import MailImage from '../../../public/mail.webp';
import GoalsImage from '../../../public/Goals-.png';
import ChatflyImage from '../../../public/chatfly.png';
import CodeHubImage from '../../../public/codehub.png';

export const ProjectList: {
  title: string;
  desc: string;
  link: string;
  bgcolor: string;
  textcolor: string;
  tech: string;
  image: StaticImageData;
}[] = [
  {
    title: "CodeHub",
    desc: "Social network for programmers",
    link: "https://github.com/Pedrinvits/CodeHub",
    bgcolor: "bg-gray-100",
    textcolor: "text-gray-700",
    tech: "Next js",
    image: CodeHubImage,
  },
  {
    title: "Gaming e-commerce",
    desc: "Full e-commerce integrated with stripe",
    link: "https://github.com/Pedrinvits/FSW-SHOP",
    bgcolor: "bg-gray-100",
    textcolor: "text-gray-700",
    tech: "Next js",
    image: ShopImage,
  },
  {
    title: "Barbershop scheduling system",
    desc: "Some features such as Appointment Scheduling Service Selection",
    link: "https://github.com/Pedrinvits/BarberShop",
    bgcolor: "bg-gray-100",
    textcolor: "text-gray-700",
    tech: "Next js",
    image: BarberImage,
  },
  {
    title: "Webstreams Api",
    desc: "Consuming 100gb on frontend using Node Webstreams",
    link: "https://github.com/Pedrinvits/WebstreamsNode",
    bgcolor: "bg-green-100",
    textcolor: "text-green-700",
    tech: "Node js",
    image: WebstreamsImage,
  },
  {
    title: "Trigger mail Api",
    desc: "Email trigger microservice using SOLID",
    link: "https://github.com/Pedrinvits/solidApi",
    bgcolor: "bg-blue-100",
    textcolor: "text-blue-700",
    tech: "Typescript",
    image: MailImage,
  },
  {
    title: "Chatfly",
    desc: "Online Chat with rooms using websocket",
    link: "https://github.com/Pedrinvits/Chatfly-api",
    bgcolor: "bg-red-100",
    textcolor: "text-red-700",
    tech: "Nest Js",
    image: ChatflyImage,
  },
  {
    title: "Nlw-pocket-js",
    desc: "The project is a desktop goal tracking website with weekly progress",
    link: "https://github.com/Pedrinvits/NLW-Pocket-JavaScript",
    bgcolor: "bg-green-100",
    textcolor: "text-green-700",
    tech: "Node js",
    image: GoalsImage,
  },
];
