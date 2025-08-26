import styles from "./GetAppointment.module.css";

const GetAppointment = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.schedulesFigure}>
        <img
          className={styles.schedulesImage}
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/appointment.png?updatedAt=1755811236950"
          alt="Days open and close"
        />
      </figure>

      <div className={styles.reserveContainer}>
        <div className={styles.sponsorContainer}>
          <img
            className={styles.brandsEternalImg}
            src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/esternalink-logo.jpg?updatedAt=1755811184228"
            alt="eternal logo"
          />
          <img
            className={styles.brandsImgRadiant}
            src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/radiant-logo.png?updatedAt=1755811184160"
            alt="radiant logo"
          />
          <img
            className={styles.brandsDynamicImg}
            src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/logo-dynamic.jpg?updatedAt=1755811184207"
            alt="dynamic logo"
          />
        </div>
        <h1 className={styles.titleReserve}>Reserve an appointment</h1>
        <span className={styles.reservePrice}>$50,00</span>
        <a href="#" className={styles.seePromotions}>
          See promotions available...
        </a>
        <div className={styles.cartContainer}>
          <label className={styles.quantityLabel}>
            Quantity:
            <input
              className={styles.quantityInput}
              type="number"
              id="quantity"
              defaultValue={1}
              min={1}
            />
          </label>
          <button type="button" className={styles.buttonCart}>
            Add to cart
          </button>
        </div>

        <div className={styles.sippingCost}>
          <span className={styles.shippingCostTitle}>
            Calculate shipping cost
          </span>

          <div className={styles.zipCodeContainer}>
            <input
              className={styles.zipcodeInput}
              type="number"
              min={0}
              id="zipcode"
              name="zipcode"
              placeholder="Zip Code"
            />
            <button className={styles.zipCodeButton} type="button">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAppointment;
