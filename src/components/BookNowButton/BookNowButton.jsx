/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';


export const BookNowButton = ({
  title = 'Book Now',
  url,
  style
}) => {

  return (
    <NavLink
      variant='buttons.primary'
      href={url || 'https://westcoastiv.netlify.com'}
      target='_blank'
      sx={{
        ...style,
        maxWidth: '206px'
      }}
    >
      {title}
    </NavLink>
  );
};

BookNowButton.displayName = 'BookNowButton';