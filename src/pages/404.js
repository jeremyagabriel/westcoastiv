/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { Flex, FlexCol, Image } from '../components/Components';


const FourZeroFour = () => {

  return (
    <Flex
      data-comp={FourZeroFour.displayName}
    >
      <Text>404</Text>
    </Flex>
  )
}

FourZeroFour.displayName = 'FourZeroFour';

export default FourZeroFour;