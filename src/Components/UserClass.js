import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "noida",
        avatar_url: "http://dummyphoto",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Tanushigupta09");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    this.timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
    }
    console.log("component update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <>
        <h2>name:{name}</h2>
        <h2>location:{location}</h2>
        <img src={avatar_url} />
      </>
    );
  }
}

export default UserClass;

/* 
 ----------------- MOUNTING CYCLE-----------------

 Constructor(dummy)
 render(dummy)
    <html dummy>
  ComponentDidMount
    <API CALL>
    <this.setState->state variable is updated >


  -----------UPDATE CYLCE-----------------
        render(Api data)
        <HTML (new api data)

        ComponentDidUpdate

*/
