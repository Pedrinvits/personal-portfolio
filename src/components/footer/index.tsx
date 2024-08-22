
const Footer = () => {
    return ( 
        <footer className="mt-4 text-center text-sm text-gray-400 overflow-hidden z-[1] relative">
                <div className="flex flex-col gap-4">
                   <a href="mailto:pedromantovani26@gmail.com" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-fit px-2 py-1">
                    Let us chat
                   </a>
                    {`© ${new Date().getFullYear()}`}
                </div>
        </footer>
     );
}
 
export default Footer;