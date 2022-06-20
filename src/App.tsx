import React from 'react';
import Landing from './pages/Landing';
import ComponentPage from './pages/ComponentPage';
import Events from 'pages/Events';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
