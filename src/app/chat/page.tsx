
import { FormComponent } from "@/components/chat";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronLeft } from "lucide-react";

export default function chat () {
    return (
        <main className="flex min-h-fit flex-col items-center justify-between p-6 sm:p-24">
            <div className="flex w-full justify-between">
                <Button className="self-start bg-card hover:bg-card shadow-md">
                    <Link href={'/'}><span className="text-xs font-normal text-foreground flex items-center justify-center gap-2 hover:text-slate-500"><ChevronLeft size={15} /></span>
                    </Link>
                </Button>
                <ModeToggle />
            </div>
            <div className="flex max-h-screen flex-col items-center w-full pb-6">
                <Suspense>
                    <FormComponent/>
                </Suspense>
            </div>
        </main>
    )
}