import React, { useEffect } from 'react';
import Landing from './pages/Landing';
import ComponentPage from './pages/ComponentPage';
import Events from 'pages/Events';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from 'pages/Details';
import { getAutocomplete } from 'utils/api';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'https://api.seatgeek.com/2';
  axios.defaults.params = { client_id: process.env.REACT_APP_API_KEY };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/components" element={<ComponentPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
