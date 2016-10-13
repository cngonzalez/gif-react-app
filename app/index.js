import React from 'react';
import  ReactDOM from 'react-dom';
import App from './src/components/App';
import { createStore } from 'redux';
import gifSearcher from './src/reducers/index'
import { Provider} from 'react-redux'
import { fetchUrls, updateCurrent } from './src/actions/actions'
  
let store = createStore(gifSearcher)
function five() {
  console.log(store.getState())
}

setInterval(five, 5000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);

