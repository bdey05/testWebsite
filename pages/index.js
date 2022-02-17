import Head from "next/head";
import Image from "next/image";

import About from "@components/sections/About";
import FAQ from "@components/sections/FAQ";
import Sponsor from "@components/sections/Sponsors";

import styles from "@styles/sections/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atomhacks</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.landing}>
          <div className={styles.logoDiv}>
            <Image
              src="/images/logos/logo.png"
              alt="atomhacks logo"
              className={styles.logo}
              width={600}
              height={600}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Atom Hacks</h1>
            <h1>Bronx Science&apos;s 12-hour Annual Hackathon!</h1>
            <h1>Coming soon!</h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfzUW9fK_5WJjf3E94ZQRNEehO33piR3CsBzmFBHFzEM6BhVg/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.btn}>
                <h2>Register!</h2>
              </button>
            </a>
          </div>
        </div>
        <About />
        <FAQ />
        <Sponsor />
      </div>
    </>
  );
}
