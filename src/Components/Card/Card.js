import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion,AccordionSummary,AccordionDetails,Typography,Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'2rem'
    },
    spaceTop:{
      marginTop:'1rem'
  },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Card = (props) => {

    let {name,description,del,id} = props  
    // Function to generate UID
    function generateUID() {
      const timestamp = new Date().getTime(); // Get current timestamp
      const randomNum = Math.floor(Math.random() * 900000) + 100000; // Generate random 6-digit number
      const uid = timestamp.toString() + randomNum.toString(); // Concatenate timestamp and random number
      return uid.slice(0, 16); // Return only first 16 digits
    }
    const classes = useStyles();
    const UID = generateUID()

    return (
      <div className={classes.root}>
<Accordion className={classes.spaceTop}>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography className={classes.heading}>{UID}</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Government of India
          </Typography>
          <Typography component="div" variant="h6">
        आम आदमी का अधिकार
      </Typography>
          <div style={{ width:"320%", height:"8px" ,backgroundColor:"#F99E3F",borderRadius:"140px",marginBottom:"10px",marginTop:"4px"}}></div>
          <div style={{ width:"280%", height:"8px" ,backgroundColor:"#4FBA5C",borderRadius:"140px",marginBottom:"25px"}}></div>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Name: {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            DOB: {description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Gender: {id}
        </Typography>
        </CardContent>
        
      </Box>
</Typography>
</AccordionDetails>
<AccordionDetails>
<Typography  align='right'  style={{width:'100%'}}>
<Button onClick={del} color='secondary'>Delete</Button>
</Typography>
</AccordionDetails>
</Accordion>
</div>
      
    );
}

export default Card;
