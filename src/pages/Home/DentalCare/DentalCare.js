import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import dentalImg from '../../../images/treatment.png';
import { Button, Typography } from '@mui/material';

const DentalCare = () => {
    return (
        <Box sx={{ flexGrow: 1 }}   style={{marginTop: 100}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width: '80%'}} src={dentalImg} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display: "flex",
            textAlign: "left"
        }}>
          <Box>
              <Typography variant="h3" style={{marginTop: 80}}>
                    Exceptional Dental <br /> Care On Your Terms
              </Typography>
              <Typography variant="h5" color="text.secondary" style={{fontSize: 15, fontWeight: 300, marginTop: 40 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, <br />  porro voluptatum quia fugiat asperiores rem! Distinctio explicabo animi <br /> dolores, natus commodi quo quae magni nesciunt debitis! Libero, itaque <br />  similique? Incidunt deserunt nam iste nisi necessitatibus dolor cumque <br /> itaque neque similique. Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Repellat neque amet aliquam voluptate ab deleniti. Sapiente atque a <br /> numquam corporis!
              </Typography>
              <Button style={{backgroundColor: '#5CE7ED', marginTop: 60}} variant="contained" >Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default DentalCare;