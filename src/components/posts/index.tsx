const Posts = () => {
    return ( 
        <section className="max-w-2xl px-4 mt-20">
            <article className="flex flex-col gap-4">
                <h3 className="font-medium text-slate-800">Posts</h3>
                <a href="#" className="group inline-flex items-start gap-3 rounded-lg py-1 pl-0.5 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                    <span className="mt-[2px] flex-shrink-0 text-sm font-medium text-slate-400">
                    2024-03-08 
                    </span>
                    <article>
                        <h4 className="font-medium group-hover:underline group-hover:underline-offset-2">Título de um artigo muito foda Aqui</h4>
                        <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quos laboriosam fugit voluptate consequatur, quis neque eum, at quae est nostrum quas! Sapiente itaque veritatis, ipsa dolore nihil quidem maiores.</p>
                    </article>
                </a>
                <a href="#" className="group inline-flex items-start gap-3 rounded-lg py-1 pl-0.5 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                    <span className="mt-[2px] flex-shrink-0 text-sm font-medium text-slate-400">
                    2024-05-08 
                    </span>
                    <article>
                        <h4 className="font-medium group-hover:underline group-hover:underline-offset-2">Título de outro artigo muito foda Aqui</h4>
                        <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quos laboriosam fugit voluptate consequatur, quis neque eum, at quae est nostrum quas! Sapiente itaque veritatis, ipsa dolore nihil quidem maiores.</p>
                    </article>
                </a>
            </article>
        </section>
     );
}
 
export default Posts;