import Image from "next/image";
import navStyles from "@styles/components/Nav.module.css";
import Link from "next/link";

const routes = [
  { name: "Home", href: "/#home", current: false },
  { name: "About", href: "/#about", current: false },
  { name: "FAQ", href: "/#faq", current: false },
  { name: "Sponsors", href: "/#sponsors", current: false },
  { name: "Schedule", href: "/#schedule", current: false },
];

const Nav = () => {
  return (
    <nav className={navStyles.navbar}>
      <Image
        src="/images/logos/logo.png"
        alt="atomhacks logo"
        height={50}
        width={50}
      ></Image>
      <Link href="/" passHref>
        <h2 className={`${navStyles.navItem} ${navStyles.home}`}>Atomhacks</h2>
      </Link>
      <Link href="/gallery" passHref>
        <h2 className={`${navStyles.navItem} ${navStyles.home}`}>Gallery</h2>
      </Link>
      <div className={navStyles.right}>
        {routes.map((route, i) => (
          <Link href={route.href} key={i} passHref>
            <h2 className={navStyles.navItem}>{route.name}</h2>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
