import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Logoig from './logo/instagram.png'
import Logofb from './logo/facebook.png'
import Logotw from './logo/twitter.png'
import Logopi from './logo/pinterest.png'
import Logogo from './logo/google.png'
import Logoyo from './logo/youtube.png'
import '../App.css'



const list = {
  listStyle: 'none',
}


const spacing = {
  listStyle: 'none',
  paddingTop: '10px',
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mizuchi
      </Link>{' '}
      {new Date().getFullYear()}
      {'. All rights reserved.'} | <Link color="inherit" href="#">{'Term and Conditions'}</Link> | <Link color="inherit" href="#">{'Privacy Policy'}</Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      
    },
  },
  logo: {
    width: 40
  },
  text: {
    fontFamily: 'Comfortaa, cursive',
  }
}));


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={5} justify="space-evenly">

        <Grid item xs={6} sm={3} className={classes.text}>
          <h3>Searah</h3>
          <li style={list}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Esse dolor voluptate sunt, saepe explicabo possimus adipisci totam. 
          Iure ipsum officiis ex, esse molestiae assumenda sint itaque quae odio fuga vero.</li>
        </Grid>

        <Grid item xs={6} sm={3} className={classes.text}>
          <h3>Menu</h3>
          <Link color="inherit" href="#"><li style={list}>Home</li></Link>
          <Link color="inherit" href="#"><li style={list}>Start a trip</li></Link>
          <Link color="inherit" href="#"><li style={list}>Profile</li></Link>
          <Link color="inherit" href="#"><li style={list}>Review</li></Link>
        </Grid>

        <Grid item xs={6} sm={3} className={classes.text}>
          <h3>Searah</h3>
          <li style={list}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Esse dolor voluptate sunt, saepe explicabo possimus adipisci totam. 
          Iure ipsum officiis ex, esse molestiae assumenda sint itaque quae odio fuga vero.</li>
        </Grid>

        <Grid item xs={6} sm={3} className={classes.text} >
          <h3>Contact Us</h3>
          <li style={list}>Jl. Kemang Raya No.123</li>
          <li style={list}>Jakarta Selatan</li>
          <li style={list}>(021) 987-6543</li>
          <li style={list}>searah@gmail.com</li>
        </Grid>

          
          <li style={spacing}>
          <Link color="inherit" href="#"><img src={Logoig} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="#"><img src={Logofb} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="#"><img src={Logotw} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="#"><img src={Logopi} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="#"><img src={Logogo} alt="My logo" className={classes.logo}/></Link>{' '}
          <Link color="inherit" href="#"><img src={Logoyo} alt="My logo" className={classes.logo}/></Link>{' '}
          </li>
          
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}