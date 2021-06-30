import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BsCircleSquare } from "react-icons/bs";
import "../UI/card.css";
const useStyles = makeStyles({
  root: {
    minWidth: 260,
    backgroundColor: "#B6B9B2",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.2rem",
    color: "#1a1820",
  },
  pos: {
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default function SimpleCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="topDetails">
          <span className="cardIcon">
            <BsCircleSquare size="3rem" color="#ed814a" />
          </span>
          <div className="titles">
            <Typography
              variant="h5"
              component="h2"
              style={{ marginBottom: "0.5rem", color: "#1a1820" }}
            >
              {data.Event}
            </Typography>{" "}
            <Typography
              className={classes.title}
              component="h4"
              variant="h6"
              color="textSecondary"
            >
              {data.school}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {data.class}
            </Typography>
          </div>
        </div>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ fontWeight: "bold" }}
        >
          <span>Date: </span>
          {data.date}
          <br />
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ fontWeight: "bold" }}
        >
          <span>Time: </span>
          {data.time}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}