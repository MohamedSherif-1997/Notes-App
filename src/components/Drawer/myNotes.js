import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  card: {
    padding: "15px",
  },
}));
const DUMMY_CARDS = [
  {
    id: 1,
    name: "SherifKhan",
    title: "Chorizo Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes",
    imgTitle: null,
  },
  {
    id: 2,
    name: "Mohamed",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: "firstImg",
  },

  {
    id: 3,
    name: "Kalam",
    title: "Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 4,
    name: "Aslam",
    title: "Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 5,
    name: "Abarar",
    title: "Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 6,
    name: "Aslam",
    title: "Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 7,
    name: "Abararll",
    title: "Paella",
    date: "September 14, 2016",
    description:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
];
export default function MyNotes() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  return (
    <div container className={classes.cardContainer}>
      {DUMMY_CARDS.map((card) => (
        <div className={classes.card}>
          <Card className={classes.root} key={card.id}>
            <CardHeader
              avatar={
                <Avatar aria-label="user" className={classes.avatar}>
                  {card.name[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.title ? card.title : null}
              subheader={card.date}
            />
            {card.img ? (
              <CardMedia
                className={classes.media}
                image={card.img}
                title={card.imgTitle}
              />
            ) : null}
            {card.description ? (
              <CardContent key={card.id}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.description}....
                  <span style={{ color: "red" }}>
                    Readmore
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </span>
                </Typography>
              </CardContent>
            ) : null}
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            {card.details ? (
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{card.details}</Typography>
                </CardContent>
              </Collapse>
            ) : null}
          </Card>
        </div>
      ))}
    </div>
  );
}
