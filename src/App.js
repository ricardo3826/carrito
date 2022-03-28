import Productos from "./Components/Productos";
import { Component } from "react";
import Layout from "./Components/Layout";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 1000, img: "/productos/lechuga.jpg" },
    ],

    carro: [],

    esCarroVisible: false,
  };

  agregarAlcarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      //busca por el nombre del producto, si es igual al producto que le estamos pasando entonces crea una copia del arreglo incrementando en 1 la cantidad del producto
      const newcarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x, // Haciendo una copia con el Spread para incrementarle 1 a la cantidad.
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newcarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    console.log(this.state.carro);
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />

        <Layout>
          <Title />
          <Productos
            agregarAlcarro={this.agregarAlcarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
