import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Background from '../../../assets/img/bg.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './page4.css'

const drawerWidth = 240;


const divStyle = {
    backgroundColor: 'white',
    opacity: 0.7,
    height: '800px',
}

const badgeStyle = {
  height: '150px',
  width: '150px'
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
      backgroundSize: 'cover'
    },
    fixedHeight: {
      height: 240,
    },
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
    },
  }));



function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with love by the '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' team.'}
      </Typography>
    );
  }


function Page1() {
    const classes = useStyles();
    const theme = useTheme();
  return (
    <>
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container direction="row"   justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} >
              <Paper className={classes.paper}>
                
                <Grid item sm={6} xs={12} md={4} lg={3}>
                  <Card className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        Contact Me on Facebook
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <a href="https://m.me/jonathancurto">
                    <img style={badgeStyle} src="assets/img/fbmsg.png"></img>
                    </a>
                    </div>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                  </Card>
                  </Grid>
                  <br></br><br></br>
                  <Grid item sm={6} xs={12} md={4} lg={3}>
                  <Card className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        Contact Me on LinkedIn
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <a href="https://www.linkedin.com/in/jon-curto-7730a017b">
                      <img style={badgeStyle} src="assets/img/linkedin.png"></img>
                    </a>
                    </div>
                    </div>
                  <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                  </Card>
                  </Grid>
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