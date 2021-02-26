/** @jsx jsx */
import { jsx, Text, Button } from 'theme-ui';
import React from 'react';
import ServiceTemplate from '../templates/service';

const VitaminInjectionsPage = () => {
  return (
    <ServiceTemplate>
      <Text>Vitamin Injections</Text>
      <Button>Book Now</Button>
    </ServiceTemplate>
  )
}

export default VitaminInjectionsPage;