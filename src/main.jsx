import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import RouterView from './routerView.jsx'
import Layout from './layout/Main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App(props) {
    return (
      <div>
          <Layout />
          <RouterView />
      </div>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
