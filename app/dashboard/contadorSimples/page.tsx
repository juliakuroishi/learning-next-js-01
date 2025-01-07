

import React from 'react';

interface EstadoDosComponentes {
  count: number;
}

// a classe do contador em si
class Counter extends React.Component <{}, EstadoDosComponentes> {
    constructor(props: {}) {
      super(props);
      this.state = {
        count: 0  //iniciar o estado inicial do contador com zero
      };
      
      this.reset = this.reset.bind(this);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this)
      
    }
    // as 3 funções usadas

    //resetar o contador para zero
    reset() {
      this.setState( { count: 0 })
    }

    //incrementar 1
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }


    //decrementar -1
    decrement() {
      this.setState( state => ({ count: state.count - 1 }));
    }
   
    //renderizar 
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };


  export default Counter;

