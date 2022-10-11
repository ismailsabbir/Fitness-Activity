import React from "react";
import "./Question.css";
import logo from "../../images/react work.png";
import logo1 from "../../images/props state.png";
import logo2 from "../../images/useEffect.jpg";
const Question = () => {
  return (
    <div className="question">
      <h1>React Blog</h1>
      <div className="react-work">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <h1>How does react Work ?</h1>
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes. The declarative view makes your code more
            predictable and easier to debug.
          </p>
          <p>
            A React application is made of multiple components, each responsible
            for rendering a small, reusable piece of HTML. Components can be
            nested within other components to allow complex applications to be
            built out of simple building blocks. A component may also maintain
            an internal state – for example, a TabList component may store a
            variable corresponding to the currently open tab.
          </p>
        </div>
      </div>
      <div className="props-state">
        <div className="left">
          <h1>Difference between props and state</h1>
          <p>
            <span>Props</span>: The Data is passed from one component to
            another.It is Immutable (cannot be modified). Props can be used with
            state and functional components.Props are read-only.
          </p>
          <p>
            <span>State : </span>The Data is passed within the component only.It
            is Mutable ( can be modified).State can be used only with the state
            components/class component (Before 16.0). State is both read and
            write.
          </p>
        </div>
        <div className="right">
          <img src={logo1} alt="" />
        </div>
      </div>
      <div className="useeffect">
        <div className="left">
          <img src={logo2} alt="" />
        </div>
        <div className="right">
          <h1>Use of useEffect in react</h1>
          <p>
            By using this Hook, you tell React that your component needs to do
            something after render. React will remember the function you passed
            (we’ll refer to it as our “effect”), and call it later after
            performing the DOM updates. In this effect, we set the document
            title, but we could also perform data fetching or call some other
            imperative API.
          </p>
          <p>
            Placing useEffect inside the component lets us access the count
            state variable (or any props) right from the effect. We don’t need a
            special API to read it — it’s already in the function scope. Hooks
            embrace JavaScript closures and avoid introducing React-specific
            APIs where JavaScript already provides a solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
