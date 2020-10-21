# RendR Core - Recode Masterclass

This repository serves as the single source of truth for the collection of all components which will be used for the Website Development Business Project. It will be used as a dependency, which will be pulled by Web-Prototypes(WPs). WP's will be used as a base design for customers to choose from, and which they can make visual customisations. To overwrite the CORE code base, WP's will need to use `alias.json`.

## Setup SCSS

https://nextjs.org/docs/basic-features/built-in-css-support#sass-support

1. Install

```bash
npm install --save sass
```

## Setup Fonts

1. Copy font files into `/src/styles/fonts`

2. Create `fonts.scss` in the same folder of the font folder

```scss
// Black
@font-face {
  font-family: "Poppins";
  src: url("./Poppins-Black.ttf");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("./Poppins-BlackItalic.ttf");
  font-weight: 900;
  font-style: italic;
}
// Extra Bold
@font-face {
  font-family: "Poppins";
  src: url("./Poppins-ExtraBold.ttf");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("./Poppins-ExtraBoldItalic.ttf");
  font-weight: 800;
  font-style: italic;
}
// Bold
@font-face {
  font-family: "Poppins";
  src: url("./Poppins-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("./Poppins-BoldItalic.ttf");
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

[Next JS Absolute Imports](https://nextjs.org/docs/advanced-features/module-path-aliases)

1. make `jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

2. Make Reference reference

```javascript
import Button from "components/button";
```

# Errors, Issues and References

[Using Google Drive as a Storage Service to Download File on Button Click](https://www.labnol.org/internet/direct-links-for-google-drive/28356/)

[Component changing an uncontrolled input of type text to controlled](https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro)

[Click and scroll to component](https://stackoverflow.com/questions/41692785/scroll-page-to-the-nested-react-component-on-a-button-click)

[Media Query: Larger Max width overriding Smaller max width](https://stackoverflow.com/questions/32629967/why-does-a-higher-max-width-in-media-queries-overwrite-a-lower-max-width/32630026) : Make sure larger max widths come _EARLIER_.

[Cannot destructure property .... PRERENDER ERROR](https://github.com/vercel/next.js/blob/master/errors/prerender-error.md) : This error happens if you have page files in the _/pages_ folder but those pages are not rendered on the screen. If you dont intent to render any page, put them in the _/nonPages_ folder. [Another reference.](https://github.com/isaachinman/next-i18next/issues/661)

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

1. Install and setup Heroku

```bash
<!-- Install -->
brew tap heroku/brew && brew install heroku

<!-- Create Heroku repo -->
heroku create recode-masterclass
```

2. Modify package.json

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT",
    "heroku-postbuild": "npm run build", <-- Optional
  },
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
