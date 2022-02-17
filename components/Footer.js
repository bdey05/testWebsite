import Image from "next/image";

import footerStyles from "@styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <h1 className={footerStyles.title}>atomhacks</h1>
      <div className={footerStyles.social}></div>
      <Image
        src="/images/footer-icons/powered-by-vercel.svg"
        width={200}
        height={100}
        alt="Powered by vercel"
      />
      <p>© Copyright 2021, Bronx High School of Science AtomHacks.</p>
    </div>
  );
};

export default Footer;
