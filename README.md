# RendR Core

This repository serves as the single source of truth for the collection of all components which will be used for the Website Development Business Project. It will be used as a dependency, which will be pulled by Web-Prototypes(WPs). WP's will be used as a base design for customers to choose from, and which they can make visual customisations. To overwrite the CORE code base, WP's will need to use `alias.json`.

## Setup SCSS

https://nextjs.org/docs/basic-features/built-in-css-support#sass-support

1. Install

```bash
npm install --save sass
```

## Setup Fonts

[Refer This](https://www.gatsbyjs.com/docs/using-local-fonts/#using-local-fonts-in-gatsby).

1. Copy font files into `/src/styles/fonts`

2. Create `fonts.scss` in the same folder of the font folder

```scss
// Black
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-Black.ttf");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-BlackItalic.ttf");
  font-weight: 900;
  font-style: italic;
}
// Extra Bold
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-ExtraBold.ttf");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-ExtraBoldItalic.ttf");
  font-weight: 800;
  font-style: italic;
}
// Bold
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-BoldItalic.ttf");
  font-weight: 700;
  font-style: italic;
}
```

3. Import in `global.scss`

```scss
@import "./fonts/Poppins/POPPINS.scss";
@import "./fonts/Open_Sans/OPEN_SANS.scss";
```

## Setup Absolute Import

[Reference: Gatsby Plugin Root Import](https://www.gatsbyjs.com/plugins/gatsby-plugin-root-import/)

[Another reference](https://stackoverflow.com/questions/61484861/how-to-use-absolute-imports-in-gatsby-with-eslint)

1. install

```bash
npm install --save-dev gatsby-plugin-root-import
```

2. Add into gatsby-config.js

```javascript
module.exports = {
  plugins: ["gatsby-plugin-root-import"],
};
```

# Errors, Issues and References

[Using Google Drive as a Storage Service to Download File on Button Click](https://www.labnol.org/internet/direct-links-for-google-drive/28356/)

[Component changing an uncontrolled input of type text to controlled](https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro)

[Click and scroll to component](https://stackoverflow.com/questions/41692785/scroll-page-to-the-nested-react-component-on-a-button-click)

[Media Query: Larger Max width overriding Smaller max width](https://stackoverflow.com/questions/32629967/why-does-a-higher-max-width-in-media-queries-overwrite-a-lower-max-width/32630026) : Make sure larger max widths come _EARLIER_.

## Using React Reveal and Percentage Width

Be careful when using percentages as width. If you are using React-Reveal's Fade as a wrapper, the width will break, because the Fade component does not have a width, hence e.g. 80% of none.

Solution: use vw instead.

```scss
.priceCardsContainer {
  width: 80vw;
  // width: 80% // will not work if you have a React Reveal's component as a wrapper - because the RR's components' do not have width property, causing it to be 80% of nothing, which breaks the width
  min-height: 400px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 180px;
}
```

# Image Optimasation

[Using WEBP](https://developers.google.com/speed/webp/docs/using)

1. Run Script:

```bash
 cwebp -q 80 landing-coding.jpg -o landing-coding.webp
```

# Deployment

Main reference:

https://medium.com/@jacoboakley/deploy-a-next-js-app-on-heroku-69bcb01db1b7

https://www.gatsbyjs.com/docs/deploying-to-heroku/

1. Install and setup Heroku

```bash
<!-- Install -->
brew tap heroku/brew && brew install heroku

<!-- Create Heroku repo -->
heroku create recode-masterclass

<!-- IMPORTANT: add buildpacks -->

heroku buildpacks:set heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git
```

2. Define all static files in _static.json_

See [Heroku Static Buildpack](https://github.com/heroku/heroku-buildpack-static#configuration)

```json
{
  "root": "public/",
  "headers": {
    "/**": {
      "Cache-Control": "public, max-age=0, must-revalidate"
    },
    "/**.png": {
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/static/images/**.png": {
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/static/images/**.jpg": {
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/static/images/**.webp": {
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/static/images/**.jp2": {
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/static/data/**.json": {
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    "/icons/*.png": {
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  },
  "https_only": true,
  "error_page": "404.html"
}
```

3. Push to Heroku

```bash
<!-- Push to Heroku -->
git push heroku master
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
