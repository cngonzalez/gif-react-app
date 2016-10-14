import React from 'react';
import thunkMiddleware from 'redux-thunk'
import  ReactDOM from 'react-dom';
import App from './src/components/App';
import { createStore, applyMiddleware } from 'redux';
import gifSearcher from './src/reducers/index'
import { Provider} from 'react-redux'
// import { viewToggle, fetchUrls, receiveUrls, addToCollection, removeFromCollection } from './src/actions/actions'

let store = createStore(gifSearcher, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);

