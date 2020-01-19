import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import Search from './components/user/Search';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClearButton={users.length > 0 ? true : false}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
