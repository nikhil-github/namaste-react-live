import Profile from "./ProfileClass";
import React from "react";

const About2 = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is a chapter 7 of namaste react js - find the path &#128054;</p>
      <Profile name={"Nikhil Class"} />
      <ProfileFunctionalComponent name={"Nikhil"} />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor about");
  }

  render() {
    console.log("render about");
    return (
      <div>
        <h1>About us Page</h1>
        <p>This is a chapter 7 of namaste react js - find the path &#128054;</p>
        <Profile />
      </div>
    );
  }
}

export default About;
