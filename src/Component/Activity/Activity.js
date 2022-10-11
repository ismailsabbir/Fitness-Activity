import "./Activity.css";
const Activity = (props) => {
  const { name, imge, time, age, about } = props.activity;

  return (
    <div className="activity">
      <img src={imge} alt="" />
      <h4>{name}</h4>
      <p className="about">{about}</p>
      <p>
        Fore Age :<span>{age}</span>
      </p>
      <p>
        Time required: <span>{time}s</span>
      </p>
      {/* onClick={() => props.handler(props.activity) */}
      <button onClick={() => props.handler(props.activity)}>
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Activity;
