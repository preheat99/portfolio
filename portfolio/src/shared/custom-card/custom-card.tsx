import { Card } from "@mui/material";
import "./custom-card.scss";
import { CardI } from "../shared-models";

const CustomCard = ({
  classes = {},
  raised = false,
  styles = {},
  icon = "",
  heading,
  content,
}: CardI) => {
  return (
    <Card classes={classes} raised={raised} sx={styles}>
      <div className="card-icon">{icon}</div>
      <div className="card-heading">{heading}</div>
      <div className="card-content">{content}</div>
    </Card>
  );
};

export default CustomCard;
