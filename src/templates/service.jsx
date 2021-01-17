/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';
import { Main } from '../layouts';

const ServiceTemplate = ({ children }) => {
  return (
    <Main>
      <Text>Service Template</Text>
      { children }
    </Main>
  )
}

export default ServiceTemplate;