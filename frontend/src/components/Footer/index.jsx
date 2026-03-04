import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Brand column */}
        <div className={styles.brandColumn}>
          <p className={styles.footerBrandTitle}>
            Tattoo <span>Studio</span>
          </p>
          <p className={styles.footerTagline}>
            Premium custom tattoo art. Every line tells your story — book your
            session today and make it permanent.
          </p>
        </div>

        {/* Payment methods */}
        <div className={styles.paymentsContainer}>
          <h2 className={styles.paymentTitle}>Payment Methods</h2>
          <div className={styles.paymentImgContainer}>
            <img
              width={50}
              height={43}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/googlepay-logo.png?updatedAt=1755811264469"
              alt="Google Pay"
            />
            <img
              width={95}
              height={30}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/maestro-logo.png?updatedAt=1755811264493"
              alt="Maestro"
            />
            <img
              width={55}
              height={40}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/mastercard-logo.png?updatedAt=1755811264505"
              alt="Mastercard"
            />
            <img
              width={40}
              height={45}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/visa-logo.png?updatedAt=1755811264532"
              alt="Visa"
            />
            <img
              width={45}
              height={45}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/westernUnion-logo.png?updatedAt=1755811264516"
              alt="Western Union"
            />
          </div>
        </div>

        {/* Contact */}
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Contact</h2>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsMail.png?updatedAt=1755811286254"
              alt=""
            />
            tattoStudio@gmail.com
          </span>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/telephone-icon.png?updatedAt=1755811202520"
              alt=""
            />
            011 6942 3436
          </span>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsLocation.png?updatedAt=1755811286257"
              alt=""
            />
            6200 Independence Ave, Kansas City, MO
          </span>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Tattoo Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
