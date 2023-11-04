import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { MongoClient } from 'mongodb';


const root = ReactDOM.createRoot(document.getElementById('root'));
async function solve() {
  const mongoClient = new MongoClient('mongodb+srv://silviyageorgieva:abXT5JFL5KyBA1cd@rent-a-bike.wqngass.mongodb.net/?retryWrites=true&w=majority');

  const data = await mongoClient.db().collection('rent-a-bike').find({}).toArray();

  console.log('!!!', data);
}
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
