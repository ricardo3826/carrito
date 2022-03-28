import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A283E",
    color: "#fff",
    padding: "10px 15px",
    margin: "10px",
    boder: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props}></button>;
  }
}

export default Button;
