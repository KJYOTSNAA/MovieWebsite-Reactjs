import React, { Component } from 'react';
import './App.css';
import styles from './style.module.css'
import imgs from './preloader.gif'
import Card from './Card'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      api : [],
      loader: true
    }
  }

  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(response => response.json())
    .then(json => setTimeout(()=> this.setState({api : json, loader:false}),2000))
  }

  render(){ 
    let cardArr = this.state.api.Search
    console.log(this.state.loader)
    return ( 
    <>
      <div className={ styles.Main }>
        { this.state.loader ? <img src={imgs} alt=""/> : 
          <div className={ styles.CardGrid }>
            { cardArr ?  cardArr.map(item => <Card props={item}/>)   : null }
          </div>
        }
      </div>
    </>
    );
  }
}
 

export default App;
