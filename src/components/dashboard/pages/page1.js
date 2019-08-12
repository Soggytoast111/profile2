import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../assets/img/bg.jpg'
import { relative } from 'path';

  const drawerWidth = 240;


  const divStyle = {
      backgroundColor: 'white',
      opacity: 0.7,
      position: "relative",
      top: "-520px",
  }

  const useStyles = makeStyles(theme => ({
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
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      maxWidth: '900px',
      minWidth: '900px',
    },
    fixedHeight: {
      height: 240,
    },
  }));



function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'2019'}
      </Typography>
    );
  }


function Page1() {
    const classes = useStyles();
  return (
    <>
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <img className='paraimg' src='assets/img/aboutme.jpg'></img>
                <div id='containerdiv' style={divStyle}>
                  <h1 className='paratitle'>
                  Engineer.  Coder.  Developer. Doer.
                  </h1>
                  <div id='textdiv'>
                  <p className='para'>
                    Hello world! Welcome to my domain!
                  </p>
                  <p className='para'>
                    In this space you will find a little bit about me, as well as some links to recent projects that I have been working on.  Even though most of this stuff doesn't have much real-world application (yet), I'm quickly gathering the skill and experience to truly build something great.
                  </p>
                  <p className='para'>
                    I currently work as a research and development engineer at Picatinny Arsenal in New Jersey - a position that I began after graduating from Rutgers University in 2008 with a B.S. in Materials Science and Engineering. In my spare time, I enjoy some tinkering with or repairing old electronics - which is why I'm also picking up coding as partnering skill.
                  </p>
                  <p className='para'>
                    I run and hike a little to keep in shape, and try to stay outside when I can.  I'm also into fighting games (specifically Street Fighter V) and try to keep up with the scene in my spare time. 
                  </p>
                  <p className='para'>
                    I currently reside in Berkeley Heights, NJ with my wonderful girlfriend - gearing up to build her a new website so she can show off all of her graphic arts projects. No sweat!
                  </p>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <MadeWithLove />
    </main>
    </>
  )
}

export default Page1;