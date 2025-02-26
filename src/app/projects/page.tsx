import { ModeToggle } from "@/components/mode-toggle";
import Projects from "@/components/projects";
import { ProjectList } from "./projects";
import Link from "next/link";
import { HomeIcon, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from 'react'

const ProjectsImade = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
            <div className="flex w-full justify-between">
                <Button className="self-start bg-card hover:bg-card shadow-md">
                    <Link href={'/'}><span className="text-xs font-normal text-foreground flex items-center justify-center gap-2 hover:text-slate-500"><ChevronLeft size={15} /></span>
                    </Link>
                </Button>
                <ModeToggle />
            </div>
            <Suspense>
                <Projects ProjectList={ProjectList} />
            </Suspense>
        </main>
    );
}

export default ProjectsImade;