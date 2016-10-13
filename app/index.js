import React from 'react';
import thunkMiddleware from 'redux-thunk'
import  ReactDOM from 'react-dom';
import App from './src/components/App';
import { createStore, applyMiddleware } from 'redux';
import gifSearcher from './src/reducers/index'
import { Provider} from 'react-redux'
import { fetchUrls, receiveUrls, addToCollection, removeFromCollection } from './src/actions/actions'

let store = createStore(gifSearcher, applyMiddleware(thunkMiddleware))
store.dispatch(addToCollection('sample'))
console.log(store.getState())
store.dispatch(removeFromCollection('sample'))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);

