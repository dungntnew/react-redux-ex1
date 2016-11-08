import React, {Component} from 'react';
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'

const App = () => (
  <div>
    <UserList />
    <hr/>
    <UserDetail />
  </div>
)

export default App;
