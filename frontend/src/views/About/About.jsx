import styles from "./about.module.css";
import SocialIcons from "../../components/Navbar/navbarComponents/SocialIcons";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>About</h1>
        <div className={styles.paragraphContainers}>
          <p className={styles.aboutParagraph}>
            Our mission is to help you find the right artist for your next
            tattoo.
          </p>
          <p className={styles.aboutParagraph}>
            We believe that getting a tattoo should be safe and easy. That’s why
            we strive to make the process of finding a quality artist, making an
            appointment and getting a tattoo a great experience, no matter if
            it’s your first tattoo – or fifty first.
          </p>
          <p className={styles.aboutParagraph}>
            Tattooing is about life, expression and identity. It’s about
            discovering and defining who you are and making it a permanent part
            of yourself. And Tattoodo is here to help you on every step of your
            journey.
          </p>
          <p className={styles.aboutParagraph}>
            Co-founded in 2013 by renowned tattoo artist and media personality
            Ami James and backed by some of the most respected names in the
            industry, Tattoodo is the world’s largest tattoo marketplace and
            most downloaded tattoo app.
          </p>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <div className={styles.contactInfoContainer}>
          <span className={styles.contactTitles}>Email</span>
          <span className={styles.contactInfo}>tattoStudio@gmail.com</span>
        </div>
        <div className={styles.contactInfoContainer}>
          <span className={styles.contactTitles}>Address</span>
          <span className={styles.contactInfo}>
            6200 Independence Ave, Kansas City, Estados Unidos
          </span>
        </div>
      </div>
      <div className={styles.singupContainer}>
        <h2 className={styles.contactTitle}>Sign up for Our Newsletter</h2>
        <div className={styles.suscribeForm}>
          <label className={styles.subscribeLabel}>
            <input
              className={styles.subscribeInput}
              type="email"
              placeholder="Email"
            />
          </label>
          <button className={styles.subscribeButton}>SUBSCRIBE</button>
        </div>
        <p className={styles.subscribeParagraph}>
          You can unsubscribe at any time by clicking the link in the footer of
          our emails. For information about our privacy practices, please visit
          our website.
        </p>
        <p className={styles.subscribeParagraph}>
          We use Mailchimp as our marketing platform. By clicking above to
          subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing. Learn more about Mailchimp’s privacy
          practices here.
        </p>
      </div>
      <div className={styles.socialIconsContainer}>
        <h2 className={styles.socialTitle}>CONNECT WITH US</h2>
        <p className={styles.socialParagraph}>
          Want to see more of our work, meet our artists, or find out about
          promotions and news? Follow us on our social media. We share designs,
          fresh tattoos, creative processes, and everything that happens every
          day in the studio. Join the community, leave a like, comment, or send
          us a direct message. We're always active and love connecting with you!
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default About;
