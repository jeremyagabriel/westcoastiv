/** @jsx jsx */
import { jsx, Box, NavLink } from 'theme-ui';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useInView } from 'react-intersection-observer';
import MarkerIcon from '../../assets/marker-small.png';
const googleAPI = process.env.GATSBY_GOOGLE_MAPS_API;


export const Map = () => {

  const [ isVisible, setIsVisible ] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!isVisible) setIsVisible(true);
  }, [inView])

  return (
    <Box
      data-comp={Map.displayName}
      ref={ref}
      sx={{
        bg: 'white',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      { inView &&
        <Box
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          <LoadScript
            googleMapsApiKey={googleAPI}
          >
            <GoogleMap
              mapContainerStyle={mapStyle}
              center={offset}
              zoom={17}
              clickableIcons={false}
              options={{
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                // gestureHandling: 'none'
              }}
            >
              <Marker
                position={center}
                icon={{
                  url: MarkerIcon
                }}
              />
            </GoogleMap>
          </LoadScript>
          <NavLink
            sx={{
              fontFamily: 'Tungsten, sans-serif',
              letterSpacing: '0.05em',
              fontWeight: 300,
              color: 'white',
              bg: 'B2',
              pt: '11px',
              pb: 4,
              px: 13,
              borderRadius: '5px',
              position: 'absolute',
              top: '70px',
              left: '50px',
              cursor: 'pointer'
            }}
            href='https://g.page/westcoastiv?share'
            target='_blank'
          >
            {'\> '}Go to Google Maps
          </NavLink>
        </Box>
      }
    </Box>
  );
};

const mapStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 32.834134,
  lng: -117.152532
};

const offset = {
  lat: 32.834134,
  lng: -117.150498
};

Map.displayName = 'Map';