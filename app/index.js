import React from 'react';
import thunkMiddleware from 'redux-thunk'
import  ReactDOM from 'react-dom';
import App from './src/components/App';
import { createStore, applyMiddleware } from 'redux';
import gifSearcher from './src/reducers/index'
import { Provider} from 'react-redux'
import { fetchUrls, receiveUrls } from './src/actions/actions'
  
let store = createStore(gifSearcher, applyMiddleware(thunkMiddleware))

function five() {
  console.log(store.getState())
}

setInterval(five, 5000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);

