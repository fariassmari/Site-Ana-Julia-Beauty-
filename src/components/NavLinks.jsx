import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre", href: "#" },
    { name: "Contato", href: "#" },
];

export default function NavLinks({ mobile, fecharMenu }) {
  return (
    <ul className={`flex ${mobile ? "flex-col gap-8 text-lg" : "items-center gap-10 text-sm"} uppercase tracking-widest`}>
      {links.map((link) => (
        <li key={link.name} className="relative group cursor-pointer w-fit">
          <Link href={link.href} onClick={fecharMenu} className="text-gray-300 group-hover:text-white transition">
            {link.name}
          </Link>
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  );
}