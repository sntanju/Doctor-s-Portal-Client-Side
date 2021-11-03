import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...verticalCenter, textAlign: "left"}} item xs={12} md={6}>
          <Box>
          <Typography variant="h3">
              Your New Smile <br/>
              Starts Here
          </Typography>
          <Typography variant="h6" sx={{ my: 5, fontSize: 13, fontWeight: 300, color: 'gray' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At atque voluptate inventore iste hic tempore minima delectus a minus qui!
          </Typography>
          <Button style={{backgroundColor: '#5CE7ED'}} variant="contained" >Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: '400px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;

//swiperjs.com