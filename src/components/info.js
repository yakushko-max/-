import React from "react";

class Info extends React.Component{
  render(){
    return(
      <div>
        <h2>Приложение для просмотра погоды</h2>
        <p>Узнай погоду в своем городе</p>
        <form onSubmit={this.props.weatherMethod}>
        </form>
      </div>
    );
  }
}

export default Info;
