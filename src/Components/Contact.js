import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{"This is contact page(Class based component"}</h1>

        <UserClass name="first child" />
      </div>
    );
  }
}

/* Parent constructor
   Parent render

          First child constructor
          First child render

          Second child constructor
          Second child render

          <DOM UPDATED --- in single batch>

          First child componentDidMount
          Second child componentDidMount
  
          Parent componentDidMount
          */
export default Contact;
