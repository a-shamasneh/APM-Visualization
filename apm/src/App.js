import React, { Component } from 'react';
import './App.css';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import D3 from './D3';




class App extends Component {

  constructor (props){
    super(props)
    this.state={locations:[]} 
  }



  componentWillMount(){
    // this.setState({data:[{name:"ahmed",age:14}]})
    this.socket = io.connect("http://ec2-34-212-134-187.us-west-2.compute.amazonaws.com:9090");
       this.socket.on('widget:data', data =>
      //  console.log(JSON.parse(data.message).Root.BinaryInSet.Entry)
      this.setState({locations:JSON.parse(data.message).Root.BinaryInSet.Entry.splice(0,8)})
      
      // splice array to get first of eight object contains data for two location
      )
  }

  render() {
    // console.log(this.state.locations)
    
    return (
      <div className="App">
         <D3 data={this.state.locations}/>
        <h2></h2>
       
      </div>
      
    );
  }
}

export default App;
