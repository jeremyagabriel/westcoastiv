/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy } from 'swiper';
import 'swiper/swiper-bundle.css';
import { RecsItem } from './RecsItem';
SwiperCore.use([Navigation, Pagination, Lazy]);


export const RecsSwiper = ({
  content = [],
  handle,
  ...props
}) => {

  return (
    <Box
      data-comp={RecsSwiper.displayName}
      sx={{
        width: '100%',
        height: 'auto'
      }}
      {...props}
    >
        <Swiper
          spaceBetween={0}
          slidesPerView={1.4}
          css={{
            width: 'inherit',
            height: 'inherit',
          }}
        >
          { content.map((item, index) =>(
              <SwiperSlide
                key={index}
              >
                <RecsItem
                  content={item}
                  index={index}
                  handle={handle}
                  sx={{
                    width: '90%',
                    minWidth: '230px',
                    mx: 0,
                    ml: '5vw'
                  }}
                />
              </SwiperSlide>
          ))}
        </Swiper>
    </Box>
  )
}

RecsSwiper.displayName = 'RecsSwiper';