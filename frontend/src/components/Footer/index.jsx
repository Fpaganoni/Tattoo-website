import styles from "./Footer.module.css";
import googlePay from "../../assets/payment-method-logos/googlepay-logo.png";
import maestro from "../../assets/payment-method-logos/maestro-logo.png";
import mastercard from "../../assets/payment-method-logos/mastercard-logo.png";
import visa from "../../assets/payment-method-logos/visa-logo.png";
import westernUnion from "../../assets/payment-method-logos/westernUnion-logo.png";
import location from "../../assets/contact-icons/location-icon.png";
import phone from "../../assets/contact-icons/telephone-icon.png";
import email from "../../assets/contact-icons/mail-icon.png";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.paymentsContainer}>
          <h2 className={styles.paymentTitle}>PAYMENT METHODS</h2>
          <div className={styles.paymentImgContainer}>
            <img width={50} height={43} src={googlePay} alt="" />
            <img width={95} height={30} src={maestro} alt="" />
            <img width={55} height={40} src={mastercard} alt="" />
            <img width={40} height={45} src={visa} alt="" />
            <img width={45} height={45} src={westernUnion} alt="" />
          </div>
        </div>

        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>CONTACT</h2>
          <span className={styles.contactInfo}>
            <img className={styles.contactIcons} src={email} alt="email" />{" "}
            tattoStudio@gmail.com
          </span>
          <span className={styles.contactInfo}>
            <img className={styles.contactIcons} src={phone} alt="phone" />{" "}
            01169423436
          </span>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src={location}
              alt="location"
            />
            6200 Independence Ave, Kansas City, MO 64125, Estados Unidos
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
