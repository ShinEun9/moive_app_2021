import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
  }
  state={
    count: 0
  };
  add= ()=>{
    // this.setState({count:1});
    // this.setState({count:this.state.count+1});
    this.setState(current=>({count: current.count+1}));
  };
  minus=()=>{
    // this.setState({count:-1});
    this.setState({count:this.state.count-1});
    this.setState(current=>({count: current.count-1}));
    };

  componentDidMount(){
    console.log("component rendered");
  }
  
  componentDidUpdate(){
    console.log("i just updated");
  }

  render(){
    console.log("render");
    return (
      <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>minus</button>
      </div>
    ) 
   
    
  }
}

export default App;
