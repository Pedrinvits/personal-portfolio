import Bio from "@/components/bio";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import Posts from "@/components/posts";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
      <Bio/>
      <Projects/>
      <Posts/>
      <Footer/>
    </main>
  );
}
