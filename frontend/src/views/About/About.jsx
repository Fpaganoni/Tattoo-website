import styles from "./about.module.css";
import SocialIcons from "../../components/Navbar/navbarComponents/SocialIcons";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero header */}
      <div className={styles.aboutHero}>
        <h1 className={styles.aboutTitle}>
          About <span>Our Studio</span>
        </h1>
        <p className={styles.aboutHeroText}>
          We believe that getting a tattoo should be a safe, inspiring, and
          memorable experience — whether it's your first or your fifty-first.
        </p>
      </div>

      <div className={styles.contentSection}>
        {/* About paragraphs */}
        <div className={styles.aboutContent}>
          <div className={styles.paragraphContainers}>
            <p className={styles.aboutParagraph}>
              Our mission is to help you find the right artist for your next
              tattoo. We strive to make every step of the process — from
              inspiration to booking to aftercare — a great experience.
            </p>
            <p className={styles.aboutParagraph}>
              Tattooing is about life, expression and identity. It's about
              discovering and defining who you are and making it a permanent
              part of yourself. Our studio is a place where your story takes
              center stage.
            </p>
            <p className={styles.aboutParagraph}>
              Co-founded by passionate artists with decades of combined
              experience, our studio has built a reputation for quality,
              creativity, and care. Every design is custom — because no two
              stories are the same.
            </p>
          </div>
        </div>

        {/* Contact card */}
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <div className={styles.contactInfoContainer}>
            <span className={styles.contactTitles}>Email</span>
            <span className={styles.contactInfo}>tattoStudio@gmail.com</span>
          </div>
          <div className={styles.contactInfoContainer}>
            <span className={styles.contactTitles}>Address</span>
            <span className={styles.contactInfo}>
              6200 Independence Ave, Kansas City, MO 64125
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.singupContainer}>
          <h2 className={styles.newsletterTitle}>Stay in the Loop</h2>
          <div className={styles.suscribeForm}>
            <label className={styles.subscribeLabel}>
              <input
                className={styles.subscribeInput}
                type="email"
                placeholder="your@email.com"
              />
            </label>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.subscribeParagraph}>
            You can unsubscribe at any time. We use Mailchimp as our marketing
            platform — your data stays safe.
          </p>
        </div>

        {/* Social icons */}
        <div className={styles.socialIconsContainer}>
          <h2 className={styles.socialTitle}>Connect With Us</h2>
          <p className={styles.socialParagraph}>
            Follow us for fresh tattoos, artist spotlights, promotions, and
            behind-the-scenes content from the studio.
          </p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default About;
