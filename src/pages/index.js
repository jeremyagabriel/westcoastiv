/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../layouts';

const Home = ({ data }) => {

  console.log('data', data)

  return (
    <Main>
      <Box
        data-comp={Home.displayName}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
      >
        <Text variant='buttons.primary'>Hello World</Text>
      </Box>
    </Main>
  )
}

Home.displayName = 'Home';
export default Home;

export const query = graphql`
  query MyQuery {
    allContentfulCard(filter: {metaTags: {eq: "home"}}) {
      edges {
        node {
          buttonText
          buttonURL
          heading
          text {
            text
          }
          image {
            fluid {
              srcWebp
            }
          }
        }
      }
    }
  }
`;