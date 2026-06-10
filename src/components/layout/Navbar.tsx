import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logos/Gemini_Generated_Image_uzp7zxuzp7zxuzp7-removebg-preview-removebg-preview.png";
import { navigationLinks } from "../../data/navigation";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    <header className="fixed top-0 left-0 z-50 w-full">
<div className="mx-auto w-full border-b border-white/10 bg-[#041330]/80">
  <div className="mx-auto flex h-20 max-w-375 items-center justify-between px-4 sm:px-6 lg:px-10 backdrop-blur-xl">

          <div className="flex items-center gap-2">
           <a
  href="/"
  className="flex items-center gap-2"
>
  <img
    src={logo}
    alt="ICA Academy"
    className="h-10 w-auto"
  />

  <h2 className="text-lg font-bold text-white">
    ICA Academy
  </h2>
</a>
          </div>
          

         <nav className="hidden items-center gap-8 text-slate-300 lg:flex">
  {navigationLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className="hover:text-blue-500 transition-all"
    >
      {link.title}
    </a>
  ))}
</nav>
          <div className="hidden lg:flex items-center gap-4">
             <button className="rounded-xl  font-semibold text-slate-300 ">
              Sign in
            </button>
            <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500">
              Get Started
            </button>
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
    <a
      key={link.href}
      href={link.href}
      onClick={() => setIsOpen(false)}
      className="py-3 text-center hover:text-blue-500 transition"
    >
      {link.title}
    </a>
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