import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
             style={{width: 400, marginTop: -110 }}
             src={doctor} alt="" />
          </Grid>

          <Grid item xs={12} md={6} sx={{
              display: 'flex', justifyContent: 'flex-start',
              alignItems: "center",
              textAlign: "left"
              }}>
           <Box >
           <Typography sx={{ mb: 2 }} variant="h6" style={{color: '#5CE7ED'}}>
               APPOINTMENT
           </Typography>
           <Typography sx={{ mb: 3 }} variant="h4" style={{color: 'white'}}>
               Make An Appointment 
               <br /> Today
           </Typography>
           <Typography sx={{ mb: 7 }} variant="h5" style={{color: 'white', fontSize: 14, fontWeight: 300 }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt non quibusdam accusantium dicta dolore sed totam molestias nostrum maxime.
           </Typography>
           <Button style={{backgroundColor: '#5CE7ED'}} variant="contained" >Learn More</Button>
           </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;