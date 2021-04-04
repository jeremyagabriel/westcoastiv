/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { QuoteItem } from './QuoteItem';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Autoplay]);


export const QuoteSwiper = ({
  content = [],
  ...props
}) => {

  return (
    <Box
      data-comp={QuoteSwiper.displayName}
      sx={{
        width: '100%',
        height: 'auto'
      }}
      {...props}
    >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          css={{
            width: 'inherit',
            height: 'inherit'
          }}
        >
          { content.map((item, index) => (
              <SwiperSlide
                key={index}
              >
                <QuoteItem
                  content={item}
                />
              </SwiperSlide>
          ))}
        </Swiper>
    </Box>
  )
}

QuoteSwiper.displayName = 'QuoteSwiper';