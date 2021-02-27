/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../layouts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Benefits } from '../components/Benefits';


const Home = ({ data }) => {

  return (
    <Box
    data-comp={Main.displayName}
    display='flex'
    flexDirection='column'
    height='100vh'
    >
      <Header />
      <Benefits />
      {/* <Footer /> */}
    </Box>
  )
}

Home.displayName = 'Home';
export default Home;

export const query = graphql`
  query HomePageQuery {
    homePage: contentfulPageContainer(metaHandle: {eq: "home-page"}) {
      sections {
        metaTitle
        metaHandle
        metaTags
        content {
          ... on ContentfulButton {
            metaTitle
            metaHandle
            metaTags
            title
            url
          }
          ... on ContentfulHeading {
            metaTitle
            metaHandle
            metaTags
            heading
            subheading
          }
          ... on ContentfulHero {
            metaTitle
            metaHandle
            metaTags
            backgroundImage {
              image {
                file {
                  url
                }
              }
              altText
            }
            overlayImage {
              image {
                file {
                  url
                }
              }
              altText
            }
            backgroundColor
            headingContent {
              heading
              subheading
            }
            textContent {
              text {
                text
              }
            }
            buttonContent {
              title
              url
            }
          }
          ... on ContentfulImage {
            metaTitle
            metaHandle
            metaTags
            image {
              file {
                url
              }
            }
            altText
          }
          ... on ContentfulMediaObject {
            metaTitle
            metaHandle
            metaTags
            image {
              image {
                file {
                  url
                }
              }
              altText
            }
            headingContent {
              heading
              subheading
            }
            textContent {
              text {
                text
              }
            }
            buttonContent {
              title
              url
            }
          }
          ... on ContentfulSection {
            metaTitle
            metaHandle
            metaTags
            content {
              ... on ContentfulButton {
                metaTitle
                metaHandle
                metaTags
                title
                url
              }
              ... on ContentfulHeading {
                metaTitle
                metaHandle
                metaTags
                heading
                subheading
              }
              ... on ContentfulImage {
                metaTitle
                metaHandle
                metaTags
                image {
                  file {
                    url
                  }
                }
                altText
              }
              ... on ContentfulHero {
                metaTitle
                metaHandle
                metaTags
                backgroundImage {
                  image {
                    file {
                      url
                    }
                  }
                  altText
                }
                overlayImage {
                  image {
                    file {
                      url
                    }
                  }
                  altText
                }
                backgroundColor
                headingContent {
                  heading
                  subheading
                }
                textContent {
                  text {
                    text
                  }
                }
                buttonContent {
                  title
                  url
                }
              }
              ... on ContentfulMediaObject {
                metaTitle
                metaHandle
                metaTags
                image {
                  image {
                    file {
                      url
                    }
                  }
                  altText
                }
                headingContent {
                  heading
                  subheading
                }
                textContent {
                  text {
                    text
                  }
                }
                buttonContent {
                  title
                  url
                }
              }
              ... on ContentfulSection {
                metaTitle
                metaHandle
                metaTags
                content {
                  ... on ContentfulButton {
                    metaTitle
                    metaHandle
                    metaTags
                    title
                    url
                  }
                  ... on ContentfulHeading {
                    metaTitle
                    metaHandle
                    metaTags
                    heading
                    subheading
                  }
                  ... on ContentfulImage {
                    metaTitle
                    metaHandle
                    metaTags
                    image {
                      file {
                        url
                      }
                    }
                    altText
                  }
                  ... on ContentfulHero {
                    metaTitle
                    metaHandle
                    metaTags
                    backgroundImage {
                      image {
                        fluid {
                          srcWebp
                        }
                      }
                      altText
                    }
                    overlayImage {
                      image {
                        fluid {
                          srcWebp
                        }
                      }
                      altText
                    }
                    backgroundColor
                    headingContent {
                      heading
                      subheading
                    }
                    textContent {
                      text {
                        text
                      }
                    }
                    buttonContent {
                      title
                      url
                    }
                  }
                  ... on ContentfulMediaObject {
                    metaTitle
                    metaHandle
                    metaTags
                    image {
                      image {
                        file {
                          url
                        }
                      }
                      altText
                    }
                    headingContent {
                      heading
                      subheading
                    }
                    textContent {
                      text {
                        text
                      }
                    }
                    buttonContent {
                      title
                      url
                    }
                  }
                  ... on ContentfulText {
                    metaTitle
                    metaHandle
                    metaTags
                    text {
                      text
                    }
                  }
                }
              }
              ... on ContentfulText {
                metaTitle
                metaHandle
                metaTags
                text {
                  text
                }
              }
            }
          }
          ... on ContentfulText {
            metaTitle
            metaHandle
            metaTags
            text {
              text
            }
          }
        }
      }
    }
  }
`;