import React, { useState } from "react";
import "./Cart.css";
import logo from "../../images/profile-4.jpeg";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  //console.log(props.cart.time);
  let total = 0;
  for (const product of cart) {
    total = total + product.time;
  }
  const [breaktime, settime] = useState(0);
  const breaktimeset = (time) => {
    let newtime = time;
    settime(newtime);
    console.log("brek time clicked");
  };

  return (
    <div>
      <div className="person-info">
        <div className="person-img">
          <img src={logo} alt="" />
        </div>
        <div className="person-detal">
          <h3>Md:Ismail Hossain Sabbir</h3>
          <p>Dhaka , Bangladesh</p>
        </div>
      </div>
      <div className="body-measerment">
        <div className="weight">
          <h1>55 kg</h1>
          <p>Weight</p>
        </div>
        <div className="height">
          <h1>6.5</h1>
          <p>Height</p>
        </div>
        <div className="age">
          <h1>22yrs</h1>
          <p>Age</p>
        </div>
      </div>
      <h3 className="break">Add a Break</h3>
      <div className="breaktime">
        <button onClick={() => breaktimeset(10)}>
          10 <span>s</span>
        </button>
        <button onClick={() => breaktimeset(20)}>
          20 <span>s</span>
        </button>
        <button onClick={() => breaktimeset(30)}>
          30 <span>s</span>
        </button>
        <button onClick={() => breaktimeset(40)}>
          40 <span>s</span>
        </button>
      </div>
      <div className="detals">
        <div className="exercise-time">
          <h4>Exercise time</h4>
          <h4>
            <span>{total}</span> secound
          </h4>
        </div>
        <div className="break-time">
          <h4>Break time</h4>
          <h4>
            <span>{breaktime}</span> secound
          </h4>
        </div>
        <button>Activity Completed</button>
      </div>
    </div>
  );
};

export default Cart;
