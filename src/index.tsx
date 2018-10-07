import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import DataGrid from './components/DataGrid'
import DataGridStore from './models/DataGridStore'
import registerServiceWorker from './registerServiceWorker';

const headers: string[] = ["Symbol", "Bid LP", "Bid", "Ask LP", "Ask", "Spread"];
const columnTypes: string[] = ["string", "string", "number", "string", "number", "number"];
let data = [
  ["AUDCAD", "span", 0.99206, "span", 0.99207, 0.1],
  ["AUDCHF", "span", 0.91370, "span", 0.91371, 0.1],
  ["AUDJPY", "span", 96.212, "span", 96.215, 0.3],
  ["AUDUSD", "span", 0.96741, "span", 0.96744, 0.3],
  ["CADCHF", "span", 0.92070, "span", 0.92071, 0.1],
  ["CADJPY", "span", 96.827, "span", 96.828, 0.1],
  ["CHFJPY", "span", 105.112, "span", 105.115, 0.3],
  ["EURAUD", "span", 1.35699, "span", 1.35702, 0.3],
  ["EURCAD", "span", 1.34721, "span", 1.34722, 0.1],
  ["EURCHF", "span", 1.24024, "span", 1.24025, 0.1],
];

const store = new DataGridStore(headers, columnTypes, data);

ReactDOM.render(
  <div className="container">
    <h1 className="mt-5">React grid</h1>
    <DataGrid store={store}/>
  </div>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
