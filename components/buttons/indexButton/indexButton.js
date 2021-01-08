import React, { Component } from "react";
import Link from "next/link";
// import { compose } from "redux"
import propTypes from "prop-types";
// import withSpacing from "../../hocs/withSpacings/withSpacings"
import withStyles from "hocs/withStyles/withStyles";
import classnames from "classnames";

import styles from "./indexButton.module.scss";

export class indexButton extends Component {
  handleClick = (event, callback) => {
    event.preventDefault();
    callback(event);
  };

  render() {
    const { text, link, external, onClick, className } = this.props;

    const styleClasses = classnames({
      [styles.indexButtonContainer]: true,
      [`${className}`]: className,
    });

    if (external) {
      return (
        <div className={styleClasses}>
          <a href={link} className={styles.buttonText} target="_blank">
            {text}
          </a>
        </div>
      );
    } else if (onClick) {
      return (
        <div
          className={styleClasses}
          onClick={(e) => this.handleClick(e, onClick)}
        >
          <div className={styles.buttonText}>{text}</div>
        </div>
      );
    } else {
      return (
        <div className={styleClasses}>
          <Link to={link} className={styles.buttonText}>
            {text}
          </Link>
        </div>
      );
    }
  }
}

indexButton.propTypes = {
  /*
   *
   * the text within the button */
  text: propTypes.string,
  /*
   *
   * the if the button link leads to external URLS */
  external: propTypes.bool,
  /*
   *
   * the link or route which the button leads to */
  link: propTypes.string,
  /*
   *
   * what happens when user clicks */
  onClick: propTypes.func,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
};

export default withStyles(indexButton);
