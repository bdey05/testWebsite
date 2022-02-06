import Image from "next/image";
import aboutStyles from "@styles/sections/About.module.css";

const About = () => {
  return (
    <div className={aboutStyles.aboutDiv} id="about">
      <div className={aboutStyles.content}>
        <h1 className={aboutStyles.title}>About</h1>
        <p className={aboutStyles.desc}>
          AtomHacks is committed to creating and organizing innovative and
          interactive coding competitions for the Bronx High School of Science.
          We are driven to give back to our community and provide transformative
          computer science opportunities for students of all levels.
        </p>
      </div>
      <div>
        <Image
          src="/images/logos/logo2.svg"
          alt="logo2"
          className={aboutStyles.logo}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default About;
