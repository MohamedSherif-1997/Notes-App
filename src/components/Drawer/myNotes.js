import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    marginBottom: "10px",
    marginLeft: "15px",
  },
  media: {
    height: 0,
    paddingTop: "45.25%", // 16:9
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
  cardExpandContent: {
    maxWidth: 300,
    maxHeight: 100,
    overflowY: "auto",
  },
}));

const DUMMY_CARDS = [
  {
    id: 1,
    name: "SherifKhan",
    title: "Chorizo Paella",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet ",
    imgTitle: null,
  },
  {
    id: 2,
    name: "Mohamed",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: "firstImg",
  },

  {
    id: 3,
    name: "Kalam",
    title: "CardEx01",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 4,
    name: "Aslam",
    title: "Paella@0",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 5,
    name: "Abarar",
    title: "Paella@1",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 6,
    name: "Aslam",
    title: "Paella@2",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
  {
    id: 7,
    name: "Abararll",
    title: "Paella@3",
    date: "September 14, 2016",
    details:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook,  stirring occasionally until lightly browned, 6 to 8 minutes.  Transfer shrimp to a large plate and set aside, leaving chicken and    chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,  onion, salt and pepper, and cook, stirring often until thickened and   fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2   cups chicken broth; bring to a boil.",
    img: null,
    imgTitle: null,
  },
];

export default function MyNotes() {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <div container className={classes.cardContainer}>
      {DUMMY_CARDS.map((card, index) => (
        <div>
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
            {card.details ? (
              <CardContent key={card.id}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.details.substr(0, 100)}....
                  <span style={{ color: "red" }}>
                    Readmore
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expandedId === index,
                      })}
                      id={card.id}
                      onClick={() => {
                        handleExpandClick(index);
                      }}
                      aria-expanded={expandedId === index}
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
              <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph className={classes.cardExpandContent}>
                    {card.details.substr(100)}
                  </Typography>
                </CardContent>
              </Collapse>
            ) : null}
          </Card>
        </div>
      ))}
    </div>
  );
}
