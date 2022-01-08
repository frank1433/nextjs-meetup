import classes from "./MeetupDetail.module.css";
const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>{props.address}</h3>
    </section>
  );
};
export default MeetupDetail;
