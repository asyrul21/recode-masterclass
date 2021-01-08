// template to create a new component
import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Image from "containers/image/Image";

// import style
import styles from "./quote.module.scss";

export const Quote = (props) => {
  const { text, author, className } = props;

  // define container classes here
  const styleClasses = classnames({
    [styles.QuoteContainer]: true,
    [`${className}`]: className,
  });

  return (
    <div className={styleClasses}>
      {/* whatever you need to do here */}
      {/* avoid using style tags */}
      <div className={styles.QuoteTextContainer}>
        <div className={styles.QuoteImageContainer}>
          <Image path="images/index/quote.png" />
        </div>
        <p className={styles.QuoteText}>{text}</p>
      </div>

      <div className={styles.QuoteAuthorContainer}>
        <p className={styles.QuoteAuthorName}>- {author.name}</p>
        <p className={styles.QuoteAuthorPost}>{author.post}</p>
      </div>
    </div>
  );
};

/* Prop Definition */
Quote.propTypes = {
  /*
   *
   * the text within the button */
  text: propTypes.string,
  /*
   *
   * the link or route which the button leads to */
  author: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
};

export default Quote;
