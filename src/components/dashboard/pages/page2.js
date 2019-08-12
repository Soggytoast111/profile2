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
import './page2.css'

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
    sf: {
      height: 140,
      "background-image": "url(assets/img/sfframe.png)"
    },
    rpg: {
      height: 140,
      "background-image": "url(assets/img/rpgframe.png)"
    },
    trivia: {
      height: 140,
      "background-image": "url(assets/img/trivia.png)"
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
                  <CardActionArea>
                    <CardMedia
                      className={classes.sf}
                      title="Street Fighter Hangman"
                      id="sf1337"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Street Fighter Hangman
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      My first exploration into Javascript.  The game uses it logic to track button presses, word bank, score, etc.  And of course - it's Street Fighter themed!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.rpg}
                      title="JQuery RPG"
                      id="RPG"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        JQuery RPG
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      A quick and dirty stat-based RPG game that I put together to experiment with JQuery.  This makes heavy use of the .animate() method to slide elements around.  Nifty!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.trivia}
                      title="Lighthouse Trivia!"
                      id="trivia"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lighthouse Trivia
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      A fun little trivia game about lighthouses.  This was mainly an exercise in the .setTimeout() method - most actions in the game are scripted with this, including the intro, timer, and fading of the elements between questions.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.tubtrivia}
                      title="Totally Tubular Trivia!"
                      id="tubtrivia"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Totally Tubular Trivia!
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Totally Tubular Trivia is a multiplayer trivia game that incorporates Node.js, Handlebars, and Sequelize.  Trivia Questions are pulled in from an open trivia API and the game logic is controled on the front-end.  The back-end logic handles how user info is stored in the database and manages game instances.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.reddit}
                      title="Reddit User History Scraper"
                      id="reddit"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Reddit User History Scraper
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Reddit User History Scraper is a utility that allows an annonymous user to fetch any reddit.com user's post history to be displayed, searched and sorted all on one page.  Built with MongoDB (Mongoose), Node.js, and Handlebars.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.bach}
                      title="Bach to Basics"
                      id="bach"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Bach to Basics
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Bach to the Basics is a musical sandbox where users can compose/save songs and practice scales.  Noteflight API is incorporated into the Compose page and allows the user to export MIDI files of created music.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
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