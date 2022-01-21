import React, { Component } from 'react';

export default class Rodape extends Component {


  constructor(props) {
    super(props);
    this.state = {}
  }  

  render() {
    return(
      <div>
        <footer className="footer">
          <span className="text-muted">&copy; 2022 Todos os direitos reservados <a href="https://www.pedroselvate.com.br">Pedro Selvate</a></span>
        </footer>
      </div>
    );
  }
}
