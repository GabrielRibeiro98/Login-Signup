import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';
import Paper from '@material-ui/core/Paper';
import Phone from './Celular.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyle = makeStyles(theme => ({
    root:{
        height: '100vh',
        backgroundColor: 'white',
    },
    imagePhone:{
        backgroundRepeat: 'no-repeat',
        maxWidth:'500px',
        maxHeight:'500px',
        height: 'auto',
        width: 'auto'
    },
    whiteCircle:{
        width: '10vw',
        height: '10vw',
        backgroundColor: '#FFFFFF',
        borderRadius: '0% 100% 0% 0%',
        border: '10px solid white',
        position: 'absolute',
        bottom: '0',
    },
    blueCircle:{
        width: '10vw',
        height: '10vw',
        backgroundColor: '#19D6E2',
        borderRadius: '0% 0% 0% 100%',
        border: '10px solid #19D6E2',
        position: 'absolute',
        top: '0',
        right:'0',
    },
    gridVisual:{
        height:'100vh',
        background: '#19D6E2',
    },
    div:{
        margin: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    gridLogin:{
        height: '100vh',
        background: '#FFFFFF'
    },
    fontH1:{
        fontFamily: 'Montserrat',
        color: '#FFFFFF',
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    },
    fontH2:{
        fontFamily: 'Montserrat',
        color: '#FFFFFF',
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },        
    },
    fontLogin:{
        fontFamily: 'Montserrat',
        color: '#19D6E2',
        fontSize: '1.2rem',
        '@media (min-width:300px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.0rem',
        },        
    },
    divLogin:{
        margin: theme.spacing(18),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}));

export default function Material(){
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <CssBaseline />
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={6} className={classes.gridVisual}>
                    <div className={classes.whiteCircle}></div>
                    <div className={classes.div}>
                        <Typography className={classes.fontH1}>Gabriel Ribeiro</Typography>
                        <Typography className={classes.fontH2}>www.github.com/GabrielRibeiro98</Typography>
                        <img src={Phone} alt="Phone" className={classes.imagePhone}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridLogin}>
                    <div className={classes.blueCircle}></div>
                    <div className={classes.divLogin}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Typography className={classes.fontLogin}>Login</Typography>

                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}