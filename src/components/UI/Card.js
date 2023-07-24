import "./Card.css";

//! The concept of composition - children props
// This is a card component which will act as a common containers for all the cards we will create using it. The style imported here is a css file contain all the common styles related to cards.

// Card is a custom wrapper compoenent.

// {props.children} is the content which will be put in the Card component.

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
