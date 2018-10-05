import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Grid from './components/Grid'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="container">
    <h1 className="mt-5">React grid</h1>
      <Grid
        headers={["Symbol", "Bid LP", "Bid", "Ask LP", "Ask", "Spread"]}
        rows={
          [
            ["AUDCAD", "", "0.99206", "", "0.99207", "0.1"],
            ["AUDCHF", "", "0.91370", "", "0.91371", "0.1"]
          ]
        }
        />
  </div>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
