import React from 'react';
import {TextField,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      marginTop:'2rem'
    },
  }));

const Save = (props) => {
    let {home,justChange,doSave} = props  

    const classes = useStyles();

    return (
        <div>
        <TextField className={classes.root}
          label="Name"
          onChange={justChange}
          name='name'
          
        />
        <TextField className={classes.root}
          label="Date of Birth"
          onChange={justChange}
          name='description'
        />
        <TextField className={classes.root}
          label="Gender"
          multiline
          row={3}
          onChange={justChange}
          name='id'
        />
        <Typography className={classes.root}>
            <Button onClick={doSave} style={{marginRight:'1rem'}} variant="contained" color="primary">Save</Button>
            <Button onClick={home} variant="contained" color="secondary">Go To Home</Button>
        </Typography>
        </div>
    );
}

export default Save;
