import Link from "next/link";

const Posts = () => {
    return ( 
        <section className="max-w-2xl px-4 mt-20">
            <article className="flex flex-col gap-4">
                <h3 className="font-medium text-slate-800 dark:text-white text-lg">Posts</h3>
                <Link href="https://medium.com/@pedromantovani26/the-missing-link-between-development-and-online-visibility-6f5441ca9480" className="group inline-flex items-start gap-3 rounded-lg p-4 outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 hover:shadow-md dark:hover:shadow-md  hover:shadow-slate-200">
                    <span className="mt-[2px] flex-shrink-0 text-sm font-medium text-slate-500 dark:text-gray-500">
                    08-14-2024 
                    </span>
                    <article>
                        <h4 className="font-medium group-hover:underline group-hover:underline-offset-2">The Missing Link Between Development and Online Visibility</h4>
                        <p className="text-sm text-slate-500">This short article aims to highlight the importance of SEO and how it is left aside by developers</p>
                    </article>
                </Link>
                <Link href="https://medium.com/@pedromantovani26/the-security-of-your-code-is-in-your-hands-7a5c629b2a64" className="group inline-flex items-start gap-3 rounded-lg p-4 outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 hover:shadow-md dark:hover:shadow-md  hover:shadow-slate-200">
                    <span className="mt-[2px] flex-shrink-0 text-sm font-medium text-slate-500 dark:text-gray-500">
                    08-19-2024 
                    </span>
                    <article>
                        <h4 className="font-medium group-hover:underline group-hover:underline-offset-2">The Security of Your Code is in Your Hands</h4>
                        <p className="text-sm text-slate-500">This article emphasizes the critical importance of code security in software development, highlighting that security is not just the responsibility of the security team but a shared duty for all developers</p>
                    </article>
                </Link>
            </article>
        </section>
     );
}
 
export default Posts;