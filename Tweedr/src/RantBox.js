import React from 'react';

class RantBox extends React.Component{
createRant (event){
    event.preventDefault();

    const typeRant = {
    YourRant: this.yourRant.value
    }

    this.props.addRant(typeRant);
  }

  render (){
    return(
      <form ref={(input) => this.inputBox = input} className="rantField" onSubmit={(event)=> this.createRant(event)}>
      <input ref={(input)=> this.typeRant= input} type="text" placeholder="Enter Your Rant" />
      <button type="submit">+ Post Rant</button>
      </form>
    )
  }
}

export default RantBox;
