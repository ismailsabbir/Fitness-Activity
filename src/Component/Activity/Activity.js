import "./Activity.css";
const Activity = (props) => {
  const { name, imge, time, age, about } = props.activity;
  console.log(props);

  return (
    <div className="activity">
      <img src={imge} alt="" />
      <h4>{name}</h4>
      <p>{about}</p>
      <p>Fore Age :{age}</p>
      <p>Time required:{time}s</p>

      <button>
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Activity;
