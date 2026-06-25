import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logos/ICA-removebg-preview.png";
import { navigationLinks } from "../../data/navigation";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    <header className="fixed top-0 left-0 z-50 w-full">
<div className="mx-auto w-full border-b border-white/10 bg-[#041330]/80">
  <div className="mx-auto flex h-20 max-w-375 items-center justify-between px-4 sm:px-6 lg:px-10 backdrop-blur-xl">

          <div className="flex items-center gap-2">
       <Link
  to="/"
  className="flex items-center gap-2"
    onClick={() => window.scrollTo(0, 0)}

>
  <img
    src={logo}
    alt="ICA Academy"
    className="h-auto w-36"
  />

</Link>
          </div>
          

         <nav className="hidden items-center gap-8 text-slate-300 lg:flex">
  {navigationLinks.map((link) => (
   <HashLink
  smooth
  key={link.href}
  to={link.href}
  className="transition-all hover:text-blue-500"
>
  {link.title}
</HashLink>
  ))}
</nav>
          <div className="hidden lg:flex items-center gap-4">
             <button className="rounded-xl  font-semibold text-slate-300 ">
              Sign in
            </button>
            <a href="#tracks" className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500">
              Get Started
            </a>
          </div>

     <button
  onClick={() => setIsOpen(!isOpen)}
  className="text-white lg:hidden"
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>
        </div>
      </div>
 {
  isOpen && (
    <div className="absolute left-0 top-full w-full lg:hidden">
      <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#041330]/95 backdrop-blur-xl shadow-2xl">
        
       <div className="flex flex-col p-6 text-slate-300">
  {navigationLinks.map((link) => (
    <HashLink
  smooth
  key={link.href}
  to={link.href}
  onClick={() => setIsOpen(false)}
  className="py-3 text-center transition hover:text-blue-500"
>
  {link.title}
</HashLink>
  ))}

  <div className="mt-6 flex flex-col gap-3">
    <button className="rounded-xl border border-white/10 py-3 text-white">
      Sign In
    </button>

    <button className="rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 transition">
      Get Started
    </button>
  </div>
</div>
      </div>
    </div>
  )
}
    </header>
  );
};

export default Navbar;