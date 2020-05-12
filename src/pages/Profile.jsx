import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Footer from "../components/Footer"
import Header from "../components/Header"
import Cardprf from "../components/Cardprf"
import TableCell from '@material-ui/core/TableCell';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import AvTimerRoundedIcon from '@material-ui/icons/AvTimerRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import Speeddial from '../components/Speeddial'
import '../App.css'





const list = {
    listStyle: 'none',
  }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        background: "#eeb4b4"
    },
    fixedHeight: {
        height: 630,
    },
    table: {
        height: 375,
    },
    font: {
        fontFamily: 'Comfortaa, cursive',
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaper1 = clsx(classes.paper, classes.table);
    

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>

                <Header/>

                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3} >

                        <Grid item xs={12} md={4} lg={3} >
                            <Paper className={fixedHeightPaper1}>
                                    <Cardprf/>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                               
                            <TableCell className = {classes.font}>
                                <h1>Diva</h1>
                                <li style={list}>"Ucing pala berbi"</li>
                            </TableCell>

                            <TableCell >
                                <li className={classes.root}>
                                <PublicIcon />
                                <Typography className = {classes.font}>Asal</Typography>
                                </li>
                                <li className={classes.root}>
                                <InsertEmoticonRoundedIcon />
                                <Typography className = {classes.font}>Gender</Typography>
                                </li>
                                <li className={classes.root}>
                                <AvTimerRoundedIcon />
                                <Typography className = {classes.font}>Umur</Typography>
                                </li>
                                <li className={classes.root}>
                                <CheckCircleOutlineRoundedIcon />
                                <Typography className = {classes.font}>Tahun join</Typography>
                                </li>
                            </TableCell>
                            
                            <TableCell className = {classes.font}>
                                <h3>About :</h3>
                                <li className={classes.root}>
                                    Dinding ba dinding oi dinding ba dinding
                                </li>
                                <li className={classes.root}>
                                    Dinding ba dinding oi dinding ba dinding
                                </li>
                                <li className={classes.root}>
                                    Dinding ba dinding oi dinding ba dinding
                                </li>
                                <li className={classes.root}>
                                    Dinding ba dinding oi dinding ba dinding
                                </li>
                            </TableCell>
                            <Speeddial/>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} >
                            <Paper >
                                    
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9} >
                            <Paper className={fixedHeightPaper1}> 
                           

                            </Paper>
                        </Grid>

                    </Grid>

                    <Box pt={4}>
                        <Grid container spacing={1}>
                            <Footer />
                        </Grid>
                    </Box>

                </Container>
            </main>
        </div>
    );
}