/** @jsx jsx */
import { jsx, Text, Container } from 'theme-ui';
import { FlexCol } from '../components/Components';
import { Main } from '../layouts';
import { Navbar } from '../components/Header';
import { Footer } from '../components/Footer';
import { Seo } from '../components/seo.js';


const FourZeroFour = () => {

  return (
    <Main>
      <Seo />
      <Container
        data-comp={FourZeroFour.displayName}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          minHeight: '100vh',
        }}
      >
        <Navbar dark={true} />
        <FlexCol
          sx={{
            flex: 1,
            minHeight: '600px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            variant='text.h5Italic'
            sx={{ mx: 4, fontSize: 5, color: 'P2', mb: 4 }}
          >
            404
          </Text>
          <Text
            variant='text.h5Italic'
            sx={{ mx: 4 }}
          >
            Oops, there's nothing here.
          </Text>
        </FlexCol>
        <Footer />
      </Container>
    </Main>
  )
}

FourZeroFour.displayName = 'FourZeroFour';

export default FourZeroFour;