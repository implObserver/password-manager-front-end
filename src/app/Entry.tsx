import React from 'react'
import ReactDOM from 'react-dom/client'
import { WithRedux } from './model/providers/WithRedux'
import { App } from './ui/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WithRedux>
      <App></App>
    </WithRedux>
  </React.StrictMode>,
);