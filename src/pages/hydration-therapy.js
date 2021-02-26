/** @jsx jsx */
import { jsx, Text, Button } from 'theme-ui';
import React from 'react';
import ServiceTemplate from '../templates/service';

const HydrationTherapyPage = () => {
  return (
    <ServiceTemplate>
      <Text>Hydration Therapy</Text>
      <Button>Book Now</Button>
    </ServiceTemplate>
  )
}

export default HydrationTherapyPage;