import Image from "next/image";
import aboutStyles from "@styles/sections/About.module.css";

const About = () => {
  return (
    <div>
      <div className={aboutStyles.aboutDiv} id="about">
        <div className={aboutStyles.content}>
          <h1 className={aboutStyles.title}>About</h1>
          <p className={aboutStyles.desc}>
            AtomHacks is committed to creating and organizing innovative and
            interactive coding competitions for the Bronx High School of
            Science. We are driven to give back to our community and provide
            transformative computer science opportunities for students of all
            levels.
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
      <div className={aboutStyles.aboutDiv}>
        <div className={aboutStyles.signUpDiv}>
          <h1>Mentors</h1>
          <p className={aboutStyles.desc}>
            Have some sort of background in programming and want to help? Apply
            to be a mentor! You&apos;ll help host workshops to teach the
            participants programming!
          </p>
          <button className={aboutStyles.signUpButton}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScXH1PYCP4tY2PrRr-hozX8x8U3oUGabWzhPprqoetMZDcgwQ/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              Sign up to be a mentor!
            </a>
          </button>
        </div>
        <div className={aboutStyles.signUpDiv}>
          <h1>Judges</h1>
          <p className={aboutStyles.desc}>
            Have a big background in programming? Want to become more involved
            with the competition overall? Apply to be a judge and help us vote
            on the winners of the event!
          </p>
          <button className={aboutStyles.signUpButton}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfJXmkOiswNmxRE-2lYA91UaWC06MWrYrvIMA0ff-UFSxtEsQ/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              Sign up to be a judge!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
