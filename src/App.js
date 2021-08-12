import './App.css';
import { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
//import {SeacchBox} from './components/search-box/search-box.component'
class App extends Component{

  constructor(){
    super();

    this.state = {
      patras: [],
      searchField: ''
    };
  }

  componentDidMount(){
    console.log('--------did mount--------');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({patras: users}));

  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  render(){
    const {patras, searchField} = this.state;
    const filteredPatras = patras.filter(patra => 
      patra.name.toLowerCase().includes(searchField.toLowerCase())
      );    
      return(
        
      <div className="App">
        <h1>Ramyana Characters (Patras)</h1>
        <SearchBox
          placeHolder='search ramayana character'
          handleChange = {this.handleChange}
        />

        <CardList patras={filteredPatras}/>          
    </div>
    )
  }
}
export default App;
