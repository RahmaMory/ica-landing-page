import Container from "./Container";
import { companyInfo } from "../../data/company";
import { footerLinks, socialLinks } from "../../data/footerLinks";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
<footer className="relative border-t border-white/10 py-20">

      

      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              {companyInfo.name}
            </h3>

            <p className="mt-5 max-w-md leading-relaxed text-slate-400">
             Empowering the next generation of tech innovators with cutting-edge courses and expert instruction.
            </p>

            <div className="mt-8 flex gap-3">
  {socialLinks.map((item) => (
  <a
    key={item.name}
    href={item.link}
    target="_blank"
    rel="noreferrer"
    className="
      flex h-11 w-11 items-center justify-center
      rounded-xl
      border border-white/10
      bg-[#142342]
      transition-all duration-300
      
      hover:border-blue-700
      hover:bg-blue-600
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  >
   <img
  src={item.icon}
  alt={item.name}
  className="
    h-5 w-5
    object-contain
    opacity-50
    brightness-0
    invert
    transition-all
    duration-300
    group-hover:opacity-100
  "
/>
  </a>
))}
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

<ul className="mt-6 space-y-4 ">
                  {footerLinks.quickLinks.map((link) => (
               <li key={link.title}>
  <a
    href={link.href}
    className="
      relative text-slate-400
      transition-all duration-300
      hover:text-blue-500
      
    "
  >
    <span className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />
    {link.title}
  </a>
</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white">
              Resources
            </h4>

            <ul className="mt-6 space-y-4 ">
              {footerLinks.resources.map((item) => (
               <li
  key={item}
  className="
    text-slate-400
    transition-all duration-300
    hover:text-blue-500
    
  "
>
  {item}
</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">
              Get in Touch
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li className="flex items-center gap-3"><Mail className="text-blue-700"/>{companyInfo.email}</li>
              <li><p>Join our newsletter for the latest updates and exclusive content.</p></li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
<div
  className="
  mt-16
  flex
  flex-col
  items-center
  justify-between
  gap-5
  border-t
  border-white/10
  pt-8
  text-sm
  text-slate-500

  lg:flex-row
  "
>
        <p className="text-center lg:text-left">
  © 2026 {companyInfo.name}. All rights reserved.
</p>
          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#"
              
            >
              Privacy Policy
            </a>

            <a
              href="#"
              
            >
              Terms of Service
            </a>

            <a
              href="#"
              
            >
              Cookie Policy
            </a>

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;