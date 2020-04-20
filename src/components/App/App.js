import React from 'react';
import './App.css';
// import warrantyAPI from './../../api/warrantyAPI';
import Routes from '../config/routes';
import Header from '../../layout/Header/Header';
// import Footer from '../../layout/Footer/Footer';
import jwt_decode from 'jwt-decode';
import userApi from '../../api/userAPI';
import setAuthHeader from '../../utils/setAuthHeader';

class App extends React.Component {
  
  state = {
    name: '',
    uid: ''
  }
  
  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        name: decoded.name,
        uid: decoded._id
      })
    }

  }

  register = (user) => {
    userApi.register(user)
      .then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            name: decoded.name,
            uid: decoded._id
          })
        }
      })
      .catch(err => console.log(err));
  }

  login = (user) => {
    userApi.login(user)
      .then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            name: decoded.name,
            uid: decoded._id
          })
        }
      })
      .catch(err => console.log(err))
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      name: '',
      uid: ''
    })
  }

  render() {
    return (
      <div className="APP">
        <Header
          logout={this.logout}
          name={this.state.name}
          uid={this.state.uid}
          login={this.login}
        />
        <Routes 
          login={this.login}
          register={this.register}
          uid={this.state.uid}
          name={this.state.name}
        />
      </div>
    )
  }
}

export default App;
