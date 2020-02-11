import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyle = makeStyles(theme => ({
    root:{
        height: '100vh',
        backgroundColor: '#00C2CE',
        backgroundImage: '-webkit-linear-gradient(65deg, #00C2CE 50%, #00A8B2 50%)',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    login:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding:'20px',
        borderRadius: '20px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.35)'
    },
    icon:{
        marginTop: theme.spacing(1),
        color: '#00C2CE',
        fontSize: '50px',
    },
    iconUsername:{
        color: '#8D8D8D',
    },
    form:{
        width:'100%',
        marginTop: theme.spacing(2)
    },
    margin:{
        marginTop: theme.spacing(3),
        width: '100%',
        color: '#00C2CE'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(262.09deg, #19D6E2 24.19%, #25C9D3 99.06%)',
        borderRadius: '30px'
    },
    checkbox:{
        color:'#8D8D8D'
    },
    color:{
        color:'#8D8D8D'
    }
}));

export default function Material(){
    const classes = useStyle();
    const [values, setValues] = React.useState({
        password:'',
        showPassword: ''
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return(
        <div className={classes.root}>
            <CssBaseline />
            <Container className={classes.login} component="main" maxWidth="xs">
                <AccountCircleIcon className={classes.icon}></AccountCircleIcon>
                <Typography component="h1" variant="h5">Login</Typography>
                <form className={classes.form} noValidate>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">
                                <AccountCircleIcon className={classes.iconUsername}></AccountCircleIcon>
                            </InputAdornment>}
                            labelWidth={80}
                        />
                    </FormControl>
                    <FormControl className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >                   
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" className={classes.checkbox} />}
                        label="Remember me"
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        className={classes.submit}
                        endIcon={<Icon>send</Icon>}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2" className={classes.color}>
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2" className={classes.color}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
                <Box mt={8}>
                    <Copyright />
                </Box>
        </div>
    );
}