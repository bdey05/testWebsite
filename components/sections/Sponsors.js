import Image from "next/image";

import sponsorStyles from "@styles/sections/Sponsor.module.css";

const Sponsor = () => {
  return (
    <div className={sponsorStyles.sponsorDiv}>
      <h1 className={sponsorStyles.title}>Sponsors</h1>
      <div className={sponsorStyles.logos}>

        <img src="/images/sponsors/digital_ocean.svg" className={sponsorStyles.logo} />
        <img src="/images/sponsors/small_planet.png" className={sponsorStyles.smallPlanet} />

        

      </div>
    </div>
  );
};

export default Sponsor;
