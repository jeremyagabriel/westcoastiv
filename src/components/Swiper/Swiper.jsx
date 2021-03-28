/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Lazy]);


export const Swiper = ({
  content = [1, 2, 3, 4],
  ...props
}) => {

  return (
    <Box
      data-comp={Swiper.displayName}
      sx={{
        width: '100%',
        height: 'auto'
      }}
      {...props}
    >
        <SwiperReact
          spaceBetween={50}
          slidesPerView={1.2}
          css={{
            width: 'inherit',
            height: 'inherit'
          }}
        >
          { content.map((item, index) =>(
              <SwiperSlide
                key={index}
              >
                <Box
                  sx={{
                    bg: index % 2 === 0 ? 'blue' : 'green',
                    height: '100%',
                    width: '100%'
                  }}
                >
                  <Text>Slide {index}</Text>
                </Box>
              </SwiperSlide>
          ))}
        </SwiperReact>
    </Box>
  )
}

Swiper.displayName = 'Swiper';