import React, { Component } from 'react';

import './App.css';
import Content from './Content';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      item:[],
      isLoaded:false
    }
  }
  componentDidMount(){
   // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://my.api.mockaroo.com/personal.json?key=503df050')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json
      })
    });

  }

  changeCss(event){
    event.currentTarget.style.background = 'tomato';
    
    event.currentTarget.style.display = 'none';

    
  }

  render() {
    var {isLoaded, items}=this.state;
    if (!isLoaded){
      return (
      <div> 'Loading..'</div>)
    } else{
     
    
    return (
      <div className="row">

       
        <ul>

          {items.map(item=>(
          
            <li className="myList"> 
            
              <img src={item.avatar} className="myAvatar" alt="Avatar" />
              {item.first_name} <br/> Email:{item.email} <br/>
              <Content/>
             <button className='btn' onClick={this.changeCss}>
               clickMe
            </button>
          </li>      
            
            
            ))}           
        
        </ul>
        
        
      </div>
    );
    }
  }
}

export default App;
