import React, { Component, Fragment } from "react";
import classnames from "classnames";

// import components
import CustomHero from "components/heros/custom/hero";
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle";
import Content from "containers/Content/Content";
import InfoCards from "components/infoCards/infoCards";
import PriceCards from "components/priceCards/priceCards";
import Button from "components/buttons/indexButton/indexButton";
import Quote from "components/testimonials/quote/quote";

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
    const testimonialData = data.testimonial;
    return (
      <Fragment>
        <CustomHero
          {...heroProps}
          onClickIndexButton={this.handleIndexButtonClick}
        />
        {/* ********** Why US ********** */}
        <SectionTitle
          text={section1Data.heading}
          className={styles.landing_section_title_whyUs}
        />
        <Content className={styles.landing_section_whyUs}>
          <AnimateAppear>
            <InfoCards data={section1Data.infoCards} />
          </AnimateAppear>
        </Content>
        {/* ********** Programmes ********** */}
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

        {/* ********** Testimonial ********** */}
        <Content className={styles.landing_testimonial}>
          <SectionTitle
            text={testimonialData.title}
            className={styles.landing_section_title_testimonial}
          />
          <AnimateAppearFromBottom>
            <Quote {...testimonialData} />
          </AnimateAppearFromBottom>
        </Content>

        {/* ********** Contact Us ********** */}
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
            <div className={styles.landing_contact_inline_buttons}>
              <Button
                text={section3Data.button1Text}
                className={styles.landing_contact_button_view}
                external
                link={section3Data.button1Link}
              />
              <Button
                text={section3Data.button2Text}
                className={styles.landing_contact_button}
                external
                link={section3Data.button2Link}
              />
            </div>
          </AnimateAppear>
        </Content>
      </Fragment>
    );
  }
}

export default Landing;
