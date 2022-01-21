
import './App.css';
import styled from '@emotion/styled'
import { Container, Grid } from '@mui/material';
import Swiper from 'react-id-swiper';
function App() {
  const params = {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  const Title = styled.h3`
    font-size: 30px;
    text-align:center;
    margin-bottom:10px;
`
  const Ptag = styled.p`
font-size: 20px;
text-align:center;
`
  const Gridimg = styled.img`
width:100%;
height:400px;
border-radius: 25px;
`
  const Mydiv = styled.div`
margin-bottom:50px;
`



  return (
    <div >
      <Title className='font-text'>Section Category Banner Title</Title>
      <Ptag className='font-text'>Section Category Intro Text</Ptag>
      <Container >
        <Grid container spacing={2}>
          <Grid item sm={6} md={6} lg={6} xs={12}>

            <div>
              <Gridimg src="/img/1.jpg" alt="food1" />
            </div>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <div>
              <Gridimg src="/img/2.jpg" alt="food1" />
            </div>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <div>
              <Gridimg src="/img/3.jpg" alt="food1" />
            </div>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <div>
              <Gridimg src="/img/4.jpg" alt="food1" />
            </div>
          </Grid>
          <hr />
        </Grid>
        <Title className='font-text'>Section Category Banner Title</Title>
        <Ptag className='font-text'>Section Category Intro Text</Ptag>
        <Mydiv>    <Swiper {...params} >
          <div><Gridimg src="/img/1.jpg" alt="food1" /></div>
          <div><Gridimg src="/img/2.jpg" alt="food1" /></div>
          <div><Gridimg src="/img/3.jpg" alt="food1" /></div>
          <div><Gridimg src="/img/4.jpg" alt="food1" /></div>

        </Swiper></Mydiv>


      </Container >

    </div >
  );
}

export default App;
