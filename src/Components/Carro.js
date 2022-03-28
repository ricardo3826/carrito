import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import Detallescarro from "./Detallescarro";

const styles = {
  carro: {
    backgroundColor: "#359A2c",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  bubble: {
    position: "relative",
    left: "12px",
    top: "20px",
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, x) => acc + x.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <Detallescarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
