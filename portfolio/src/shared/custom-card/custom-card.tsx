import { Card } from "@mui/material";
import "./custom-card.scss";
import { CardI } from "../shared-models";
import { useIntersectionObserver } from "../intersection-observer-context";

const CustomCard = ({
  classes = {},
  raised = false,
  styles = {},
  icon = "",
  heading,
  content,
}: CardI) => {
  const observedEntries = useIntersectionObserver()
  console.log(observedEntries['card-viewport'])
  return (
    <Card classes={classes} raised={raised} sx={styles} data-viewport="card-viewport" className={`animated-element ${observedEntries['card-viewport'] ? 'animate' : ''}`}>
      <div className="card-icon">{icon}</div>
      <div className="card-heading">{heading}</div>
      <div className="card-content">{content}</div>
    </Card>
  );
};

export default CustomCard;
