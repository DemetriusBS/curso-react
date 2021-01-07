import React, { Component } from 'react'

class Teste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
    };
  }

  mudaEstado = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }

  render() {
    return (
      <div className='App'>
        <button type='button' onClick={this.mudaEstado}>
          {this.state.showImage ? 'Esconder' : 'Mostrar'}
        </button>

        {this.state.showImage && (
          <img src='./src/image/react-logo.png' className='img' />
        )}
      </div>
    );
  }
}

export default Teste