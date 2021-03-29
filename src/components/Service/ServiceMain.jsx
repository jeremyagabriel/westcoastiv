/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import React, { useMemo, useEffect } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { ServiceHero } from './ServiceHero';
import { ServiceBenefits } from './ServiceBenefits';
import { Recommendations } from '../Recommendations';
import { Footer } from '../Footer';
import { Navbar } from '../Header';


export const ServiceMain = ({ data }) => {

  const productImage = useMemo(() => (
    data?.hero?.overlayImage?.image?.file?.url
  ), [data]);

  return (
    <Container
      data-comp={ServiceMain.displayName}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Navbar dark={true} />

      <ServiceHero
        content={data?.hero}
        image={productImage}
      />

      <ServiceBenefits
        content={data?.benefits}
        image={productImage}
      />

      <Recommendations
        content={data?.recs}
      />

      <Footer />
    </Container>
  )
}

ServiceMain.displayName = 'ServiceMain';