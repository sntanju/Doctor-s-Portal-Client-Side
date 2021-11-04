import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ContactInfo = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Grid item xs={6} style={{border: "1px solid black"}}>

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5">
                            Opening Hours 
                        </Typography>
                        <Typography variant="h6">
                            9am-10pm 
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                
                </Grid>
                <Grid item xs={4}>
                
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default ContactInfo;