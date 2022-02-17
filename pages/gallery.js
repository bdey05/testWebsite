import galleryStyles from "@styles/components/gallery.module.css";

import Image from "next/image";

export default function Gallery() {

  const array1 = []
  for (let i = 1; i <= 12; i++) {
    array1.push(`/images/gallery/img${i}.png`)
  }

  const array2 = []
  for (let i = 13; i <= 22; i++){
    array2.push(`/images/gallery/img${i}.JPG`)
  }

  return (
    <div className={galleryStyles.galleryDiv}>
      <h1 className={`title ${galleryStyles.titleshadow}`}>Gallery</h1>
      <div className={galleryStyles.mainBody}>
        <div className={galleryStyles.gridContainer}>
          <h2 className={galleryStyles.gridTitle}>2021</h2>
          <p className={galleryStyles.gridCaption}>This was the first year that the hackathon went online</p>
          <div className={galleryStyles.gridImages}>
            {array1.map((image, i) => (
                <div className={galleryStyles.gridImage}>
                  <Image
                  src = {image}
                  alt = "img"
                  layout="fill"
                  objectFit="cover">
                  </Image>
                </div>
            ))}
          </div>
        </div>
        <div className={galleryStyles.gridContainer}>
          <h2 className={galleryStyles.gridTitle}>2019</h2>
          <p className={galleryStyles.gridCaption}>A great year for the hackathon</p>
          <div className={galleryStyles.gridImages}>
            {array2.map((image, i) => (
                <div className={galleryStyles.gridImage}>
                  <Image
                  src = {image}
                  alt = "img"
                  layout="fill"
                  objectFit="cover">
                  </Image>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
