'use client'

// Componente Funcional (exemplo)
import React from 'react';


class MyComponent extends React.Component<{}, { visibility: boolean }>  {
  constructor(props: {}) {
    super(props);
    this.state = {
      visibility: false
    };
    // O gancho para o js não confundir o this
    this.toggleVisibility = this.toggleVisibility.bind(this);
    
  }
  // Ação da função
  // consiste em atualizar o novo state da prop
  toggleVisibility(){
    this.setState(state => {
      if (state.visibility) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    })
  }

  // 
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button 
            className="flex items-center gap-5 self-start  bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={this.toggleVisibility}>Click Me
          
          </button>  {/* chamo a função com onclick*/}
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button 
          className="flex items-center gap-5 self-start bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


export default MyComponent;


