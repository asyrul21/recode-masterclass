import React, { Component, Fragment } from "react";
import classnames from "classnames";

// import components
import CustomHero from "components/heros/custom/hero";
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle";
import Content from "containers/Content/Content";
import InfoCards from "components/infoCards/infoCards";
import PriceCards from "components/priceCards/priceCards";
import Button from "components/buttons/indexButton/indexButton";

// animators
import AnimateAppear from "components/animators/reveal-fade-appear";
import AnimateAppearFromBottom from "components/animators/reveal-fade-appear-from-bottom";

// data
import data from "public/data/index/data2.json";
import Image from "containers/Image/Image";

// import style
import styles from "./landing.module.scss";

class Landing extends Component {
  constructor() {
    super();
    this.programmesRef = React.createRef();
  }

  handleIndexButtonClick = (event) => {
    console.log("Index BUtton clicked!");
    this.programmesRef.current.scrollIntoView({ behavior: "smooth" });
    // smoooth does not work with safari
  };

  render() {
    const heroProps = {
      ...data.hero,
    };

    const section1Data = data.section1;
    const section2Data = data.section2;
    const section3Data = data.section3;
    return (
      <Fragment>
        <CustomHero
          {...heroProps}
          onClickIndexButton={this.handleIndexButtonClick}
        />
        <SectionTitle
          text={section1Data.heading}
          className={styles.landing_section_title_whyUs}
        />
        <Content className={styles.landing_section_whyUs}>
          <AnimateAppear>
            <InfoCards data={section1Data.infoCards} />
          </AnimateAppear>
        </Content>
        <Content className={styles.landing_programmes} ref={this.programmesRef}>
          <div className={classnames("backgroundImage")}>
            <Image {...section2Data.background} />
          </div>
          <SectionTitle
            text={section2Data.title}
            className={styles.landing_section_title_programmes}
          />

          <AnimateAppearFromBottom>
            <PriceCards data={section2Data.programmes} />
          </AnimateAppearFromBottom>
        </Content>
        <Content className={styles.landing_contact}>
          <SectionTitle
            text={section3Data.title}
            className={styles.landing_section_title_contact}
          />
          <AnimateAppear>
            <p
              className={styles.landing_contact_text}
              dangerouslySetInnerHTML={{ __html: section3Data.text }}
            />
            <Button
              text={section3Data.buttonText}
              className={styles.landing_contact_button}
              fontColor="white"
              external
              link={section3Data.buttonLink}
            />
          </AnimateAppear>
        </Content>
      </Fragment>
    );
  }
}

export default Landing;
