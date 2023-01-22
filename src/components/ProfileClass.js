import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log("Profile Constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Component Did Mount profile" + this.props.name);
  }

  componentDidUpdate() {
    console.log("profile componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("profile componentWillUnmount")
  }

  render() {
    console.log("Render profile");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name is : {this.state.userInfo.name}</h3>
        <h3>Location is : {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default Profile;
