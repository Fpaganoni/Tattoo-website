import styles from "./GetAppointment.module.css";

const GetAppointment = () => {
  return (
    <section className={styles.section}>
      {/* Brand strip */}
      <div className={styles.brandsStrip}>
        <span className={styles.brandsLabel}>Trusted ink brands</span>
        <div className={styles.brandsRow}>
          <div className={styles.brandLogoWrapper}>
            <img
              className={styles.brandLogo}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/esternalink-logo.jpg?updatedAt=1755811184228"
              alt="Eternal Ink logo"
            />
          </div>
          <div className={styles.brandLogoWrapper}>
            <img
              className={`${styles.brandLogo} ${styles.radiantLogo}`}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/radiant-logo.png?updatedAt=1755811184160"
              alt="Radiant Colors logo"
            />
          </div>
          <div className={styles.brandLogoWrapper}>
            <img
              className={styles.brandLogo}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/logo-dynamic.jpg?updatedAt=1755811184207"
              alt="Dynamic Color logo"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.container}>
        {/* Schedule image */}
        <figure className={styles.scheduleCard}>
          <img
            className={styles.schedulesImage}
            src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/appointment.png?updatedAt=1755811236950"
            alt="Studio hours and availability"
          />
        </figure>

        {/* Reserve panel */}
        <div className={styles.reservePanel}>
          <p className={styles.reserveEyebrow}>Reserve your spot</p>
          <h2 className={styles.reserveTitle}>Book an Appointment</h2>

          <div className={styles.priceRow}>
            <span className={styles.price}>$50</span>
            <span className={styles.priceNote}>Deposit / session</span>
          </div>

          <a href="#" className={styles.promotionsLink}>
            See current promotions →
          </a>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="quantity">
              Sessions
            </label>
            <input
              className={styles.input}
              type="number"
              id="quantity"
              defaultValue={1}
              min={1}
            />
          </div>

          <button type="button" className={styles.ctaButton}>
            Reserve Session
          </button>

          <div className={styles.divider} />

          <p className={styles.shippingLabel}>Calculate travel cost</p>
          <div className={styles.zipRow}>
            <input
              className={styles.input}
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Zip code"
            />
            <button className={styles.zipButton} type="button">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAppointment;
