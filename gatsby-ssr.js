const React = require('react');

exports.onRenderBody = ({
  setHeadComponents,
}) => {

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Tungsten-Book.woff2"
      as="font"
      type="font/woff2"
      crossorigin
      key="font-tungsten-book"
    />,
    <link
      rel="preload"
      href="/fonts/Tungsten-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossorigin
      key="font-tungsten-semibold"
    />,
    <link
      rel="preload"
      href="/fonts/TungstenNarrow-Medium.woff2"
      as="font"
      type="font/woff2"
      crossorigin
      key="font-tungsten-narrow-medium"
    />,
    <link
      rel="preload"
      href="/fonts/TungstenNarrow-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossorigin
      key="font-tungsten-narrow-semibold"
    />,
    <link
      id='fonts-link-css'
      type="text/css"
      key='fonts-link-css'
      rel="stylesheet"
      href="/fonts/fonts.css"
    />,
    <link
      key='local-fonts-css'
      href='/fonts/fonts.css'
      rel='preload'
      as='style'
    />,
  ])
}