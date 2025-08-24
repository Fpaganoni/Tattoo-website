import styles from "./GetAppointment.module.css";
import appointment from "../../assets/img/appointment.png";
import eternal from "../../assets/brands-sponsor-logos/esternalink-logo.jpg";
import dynamic from "../../assets/brands-sponsor-logos/logo-dynamic.jpg";
import radiant from "../../assets/brands-sponsor-logos/radiant-logo.png";

const GetAppointment = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.schedulesFigure}>
        <img
          className={styles.schedulesImage}
          src={appointment}
          alt="Days open and close"
        />
      </figure>

      <div className={styles.reserveContainer}>
        <div className={styles.sponsorContainer}>
          <img
            className={styles.brandsEternalImg}
            src={eternal}
            alt="eternal logo"
          />
          <img
            className={styles.brandsImgRadiant}
            src={radiant}
            alt="radiant logo"
          />
          <img
            className={styles.brandsDynamicImg}
            src={dynamic}
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
