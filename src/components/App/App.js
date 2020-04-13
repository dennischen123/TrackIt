import React from 'react';
import './App.css';
import warrantyAPI from './../../api/warrantyAPI';

class App extends React.Component {

  componentDidMount() {
    let uid = "5e94b4dd52fc3c5ec96c278a"
    warrantyAPI.index(uid)
      .then(res => console.log(res));  
  }

  render() {
    return (
      <div className="APP">
        <h1>App</h1>
      </div>
    )
  }
}

export default App;
