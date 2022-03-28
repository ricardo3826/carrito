import { Component } from "react";

const styles = {
  logo: {
    fontWeight: "700",
    fontZise: "2rem",
  },
};

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        <h1>Carrito</h1>
      </div>
    );
  }
}

export default Logo;
