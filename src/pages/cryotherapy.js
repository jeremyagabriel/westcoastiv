/** @jsx jsx */
import { jsx, Text, Button } from 'theme-ui';
import React from 'react';
import ServiceTemplate from '../templates/service';

const CryotherapyPage = () => {
  return (
    <ServiceTemplate>
      <Text>Cryotherapy</Text>
      <Button>Book Now</Button>
    </ServiceTemplate>
  )
}

export default CryotherapyPage;