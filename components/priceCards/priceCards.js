// template to create a new component
import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

// dependency component
import PriceCard from "./priceCard/priceCard";

// import style
import styles from "./priceCards.module.scss";

export const PriceCards = (props) => {
  const { data, className } = props;

  // define container classes here
  const styleClasses = classnames({
    [styles.priceCardsContainer]: true,
    [`${className}`]: className,
  });

  return (
    <div className={styleClasses}>
      {data.map((pricing, idx) => {
        console.log("pricing");
        console.log(pricing);
        return <PriceCard key={idx} {...pricing} />;
      })}
    </div>
  );
};

/* Prop Definition */
PriceCards.propTypes = {
  /*
   *
   * the array of pricing information */
  data: propTypes.arrayOf(
    propTypes.shape({
      heading: propTypes.string,
      subHeading: propTypes.string,
      text: propTypes.string,
      price: propTypes.string,
      discountPrice: propTypes.string,
      buttonText: propTypes.string,
    })
  ),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
};

export default PriceCards;
