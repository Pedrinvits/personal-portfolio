import Bio from "@/components/bio";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import Posts from "@/components/posts";
import Projects from "@/components/projects";
import { ProjectList } from "./projects/projects";
const featuredProjects = ProjectList.slice(0, 4);
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <ModeToggle/>
      <Bio/>
      <Projects ProjectList={featuredProjects} />
      <Posts/>
      <Footer/>
    </main>
  );
}
