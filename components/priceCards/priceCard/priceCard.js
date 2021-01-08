// template to create a new component
import React, { createContext } from "react";
import propTypes from "prop-types";
import classnames from "classnames";

// import component
import Button from "components/buttons/indexButton/indexButton";

// import style
import styles from "./priceCard.module.scss";

export const PriceCard = (props) => {
  const {
    heading,
    subHeading,
    text,
    price,
    discountPrice,
    buttonText,
    buttonLink,
    className,
  } = props;

  // define container classes here
  const styleClasses = classnames({
    [styles.priceCardContainer]: true,
    [`${className}`]: className,
  });

  return (
    <div className={styleClasses}>
      {/* whatever you need to do here */}
      {/* avoid using style tags */}
      <div>
        <p className={styles.priceCard_heading}>{heading}</p>
        <p className={styles.priceCard_subHeading}>{subHeading}</p>
      </div>

      <div className={styles.priceCard_text}>
        <p>{text}</p>
      </div>
      <div>
        {discountPrice && (
          <>
            <p className={styles.priceCard_disocuntprice}>{discountPrice}</p>
            <p
              className={classnames(
                styles.priceCard_price,
                styles.priceCard_price_stroke
              )}
            >
              {price}
            </p>
          </>
        )}
        {!discountPrice && <p className={styles.priceCard_price}>{price}</p>}
      </div>
      <div>
        <Button
          text={buttonText}
          backgroundColor="navy-blue"
          fontColor="white"
          className={styles.priceCard_button}
          external
          link={buttonLink}
        />
      </div>
    </div>
  );
};

/* Prop Definition */
PriceCard.propTypes = {
  /*
   *
   * heading of the card */
  heading: propTypes.string,
  /*
   *
   * subHeading of the card */
  subHeading: propTypes.string,
  /*
   *
   * some text */
  text: propTypes.string,
  /*
   *
   * the price */
  price: propTypes.string,
  /*
   *
   * the text on the button */
  buttonText: propTypes.string,
  /*
   *
   * where the buttons leads to */
  buttonLink: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
};

export default PriceCard;
