/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import React, { useMemo, useEffect } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { ServiceHero } from './ServiceHero';
import { ServiceBenefits } from './ServiceBenefits';
import { ServiceRecs } from './ServiceRecs';
import { Footer } from '../Footer';
import { Navbar } from '../Header';


export const ServiceMain = ({ data }) => {

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
      />

      <ServiceBenefits
        content={data?.benefits}
      />

      <ServiceRecs
        content={data?.recs}
      />

      <Footer />
    </Container>
  )
}

ServiceMain.displayName = 'ServiceMain';