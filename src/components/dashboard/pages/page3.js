import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Background from '../../../assets/img/bg.jpg'
import './page3.css'

const drawerWidth = 240;


const divStyle = {
    backgroundColor: 'white',
    opacity: 0.7,
    height: '800px',
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
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    rock: {
      height: 140,
      "background-image": "url(assets/img/rock.png)"
    },
    rpg: {
      height: 140,
      "background-image": "url(assets/img/rpgframe.png)"
    },
    burger: {
      height: 140,
      "background-image": "url(assets/img/burger.png)"
    },
    tubtrivia: {
      height: 140,
      "background-image": "url(assets/img/tubtrivia.png)"
    },
    reddit: {
      height: 140,
      "background-image": "url(assets/img/reddit.png)"
    },
    bach: {
      height: 140,
      "background-image": "url(assets/img/bach.png)"
    }
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
  return (
    <>
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea onClick={()=> window.location.assign('https://soggytoast111.github.io/RPS-Multiplayer/')}>
                    <CardMedia
                      className={classes.rock}
                      title="Multiplayer RPS"
                      id="rock"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Multiplayer RPS
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      A Multiplayer Rock, Paper, Scissors game that uses Firebase to track player data.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea onClick={()=> window.location.assign('https://soggytoast111.github.io/giphyapi/')}>
                    <CardMedia
                      className={classes.rpg}
                      title="Giphy API"
                      id="Giphy"
                      image="assets/img/image5.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Giphy Search
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      A little app that queries the giphy.com API and displays search results on screen.  An exercise to build some experience with .ajax and get requests. 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea onClick={()=> window.location.assign('https://salty-gorge-60362.herokuapp.com/')}>
                    <CardMedia
                      className={classes.media}
                      title="Ultra Dan Finder!"
                      id="trivia"
                      image="assets/img/image10.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ultra Dan Finder!
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                     A mock up of a friend-finder app - some more practice with node and express.  
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea onClick={()=> window.location.assign('https://gentle-tor-60024.herokuapp.com/')}>
                    <CardMedia
                      className={classes.burger}
                      title="Totally Tubular Trivia!"
                      id="burger"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Burger Time!
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      A little nonsense app that was mostly an exercise in integrating SQL, Express, and Handlebars into seemless delivery of a user experience.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>

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