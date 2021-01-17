/** @jsx jsx */
import { jsx, Text, Button } from 'theme-ui';
import React from 'react';
import ServiceTemplate from '../templates/service';

const IVTherapy = () => {
  return (
    <ServiceTemplate>
      <Text>IV Therapy</Text>
      <Button>Book Now</Button>
    </ServiceTemplate>
  )
}

export default IVTherapy;