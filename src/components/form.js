import React from "react";

class Form extends React.Component{
  render(){
    return(   
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Ввод на английском языке"/>
        <button>Получить информацию</button>
      </form>
    );
  }
}

export default Form;
