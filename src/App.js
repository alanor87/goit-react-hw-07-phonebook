import React, { Component } from 'react';
import InputForm from './components/InputForm/';
import Filter from './components/Filter'
import PbookList from './components/PbookList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <h1>PhoneBook / home</h1>
        <InputForm />
        <Filter />
        <PbookList />
      </div>
    );
  }

}

export default App;
